# Frontier 37 Step-3b author exits

Investigation completed 2026-09-30 UTC. This report was the only repository write in this investigation. I read `CLAUDE.md`, `README.md`, the two author dispatch logs/results, the current dispatch and usage code, the DeepSeek model profile, and the relevant author prompt. I did not read credential/config files or live author homes, and I did not launch a CLI or model request.

## Finding

Two author processes returned exit code 0 while their pair outputs were incomplete. The dispatcher therefore recorded `ok: true` for those attempts. The saved evidence does **not** identify why Codex/DeepSeek stopped. In particular, it does not prove context exhaustion. The missing durable terminal event and removed temporary Codex home prevent distinguishing a normal but empty completion from an abort, provider-side limit, or another Codex/provider interaction.

The engine did detect the induced-unitary artifact gap after dispatch: the run log records `dispatch-ok` followed by `stage-stalemate` for that covered but artifact-incomplete pair. This is an acceptance/diagnostics gap at dispatch, not evidence that the controller killed the process.

## Attempt evidence

| Pair | Process result and usage | Pair carriers |
| --- | --- | --- |
| `induced-unitary-representations-of-locally-compact-groups` (`c27bcce066c7329d`) | Started `10:31:08.415Z`, ended `10:41:12.116Z`; 603,701 ms; exit 0; not timed out; 68 observed requests; maximum request input 247,852; 0 compactions. Result `tail` is empty. The 9,523-line attempt log ends with `tokens used 267,327`. That figure equals uncached input plus output: `(7,725,505 − 7,572,480) + 114,302 = 267,327`; it is cumulative usage, not the request context size. | The assigned inventory is 18 A items + 4 B items. At the author's initial check, all 22 item files were missing. The last logged substantive operation printed manifest strategies for seven items; the log contains no item write, patch, or checkpoint. A later disk snapshot during the investigation showed 7/22 item files present but the pair report, both library pages, and batch contract absent. Those later files cannot be attributed to this attempt: the original log first saw all 22 missing and records no author write. The later gate recorded this pair as artifact-incomplete. |
| `cartier-and-weil-divisors-line-bundles-and-picard-groups` (`d30bb1b3f729a8d8`) | Started `10:30:57.388Z`, ended `10:55:52.475Z`; 1,495,087 ms; exit 0; not timed out; 166 requests; maximum request input 249,532; 2 compactions. Cumulative input was 21,901,670, cached input 21,290,368, and output 263,066; uncached input plus output is 874,368. The result's final stdout tail is `Now the heavy lemma. Writing it carefully:`. | The assigned inventory is 36 A items + 10 B items. A later disk snapshot during the investigation showed 11/46 item files present, 35 item files missing, both library pages missing, and the report and batch proof-contract file present: 37/50 required carriers were missing. The attempt log shows checkpoints and partial item writes, but its final tail is still an intention to continue authoring. |

The artifact counts above are frozen read-only snapshots taken during the investigation while disjoint Luna repairs were already in progress; they are not live counts or proof of the exact original exit footprint and must not overwrite the immutable attempt results. The induced files now present are later repair work, not outputs established by the original empty-exit log. The current dispatcher helper defines the required carrier set as every owned item, both A/B library pages, the pair report, and the batch contract (`tools/dispatch-author-artifacts.mjs`).

Two other authors that ended during this investigation are useful controls:

- `approximation-algorithms-and-gap-reductions`: exit 0, 307 requests, 2 compactions, maximum request input 250,091; all 31/31 required carriers were present and nonempty. Its result tail reports the pair report and 27 decision receipts.
- `perfect-complexes-and-triangulated-grothendieck-groups`: exit 0, 255 requests, 2 compactions, maximum request input 249,865; all 16/16 required carriers were present and nonempty. Its result tail reports no unfinished suppliers or owner escalations.

Carrier presence establishes file accounting only, not mathematical correctness. These two completions show that a similar maximum request size and two compactions do not by themselves explain the incomplete exits.

## What the author did before the empty exit

The induced-unitary log shows a long pre-writing investigation: it read the full assigned manifest, coverage, notes, Step-3a scope report, workflow and tooling; fetched four source PDFs; read extensive BHV, Vogan, and Bruhat passages; and inspected many prerequisite proofs and tool contracts. The last substantive action was a manifest query over several later items. The assigned 22-item inventory check still showed every item missing, and the saved transcript has no author write or checkpoint before process exit. This verifies that source review never reached writing in the retained attempt. It does not explain why the model or CLI stopped at that point.

The prompt required the source and dependency checks and ordered item-by-item authoring with checkpoints. A broad source pass can consume substantial time and context before the first checkpoint. Requiring an initial checkpoint and keeping source reads just-in-time for the next dependency-ordered item reduces the chance of an invisible pre-writing stall; it cannot be claimed as the cause of this exit.

## Runner, context, and provider

- The dispatch source has a 7,200-second default timeout. Both attempts ended well before it and record `timed_out: false`. The command has no explicit `--max-turns` flag. The dispatcher accepted exit 0 and, in these pre-guard results, recorded no terminal summary or pair-artifact assessment.
- The DeepSeek Codex profile declares a 1,048,576-token context and `auto_compact_token_limit: null` in its model catalog. The dispatcher separately overrides the compaction threshold to 250,000. Induced-unitary's largest observed request input, 247,852, is below that local threshold and roughly one quarter of the declared model window; it recorded no compaction. Cartier and both complete comparison pairs recorded two compactions. Neither the session footer nor cumulative input/output usage is evidence that a request exhausted the model context.
- The temporary Codex home was removed after dispatch. The old result files retain token counts but not the terminal event. The exact provider finish reason and Codex task-completion/abort flags therefore cannot be recovered from these artifacts.

Plausible but unverified endings include a normal provider stop followed by an empty assistant message, a Codex task-complete event without final text, an abort/error, or a provider response truncated by a per-request limit. The DeepSeek documentation lists several stop reasons, including `length` and `aborted`, but those docs do not show what this particular Responses API call returned or how Codex mapped it. Do not select one of these hypotheses as the diagnosis.

## Source retrieval

Read-only HTTP retrievals on 2026-09-30 returned status 200 for the following official documentation:

- DeepSeek, [Integrate with Codex](https://api-docs.deepseek.com/quick_start/agent_integrations/codex/): says Codex uses the Responses API, which DeepSeek supports; the documented model catalog specifies a 1,048,576-token context and null built-in auto-compaction threshold.
- DeepSeek, [Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing/): lists DeepSeek-V4.1-Flash with 1M context and maximum output 384K.
- DeepSeek, [Create Chat Completion](https://api-docs.deepseek.com/api/create-chat-completion/): documents `stop`, `length`, `content_filter`, `tool_calls`, `insufficient_system_resource`, and `aborted` as Chat Completion finish reasons; it says `length` may mean the output limit or context length was exceeded. This is Chat Completion documentation, not evidence of the Responses finish reason in either attempt.
- OpenAI, [Codex CLI reference](https://developers.openai.com/codex/cli/reference/), retrieved with HTTP 200 after redirect to `https://learn.chatgpt.com/docs/developer-commands?surface=cli`: documents `codex exec` as non-interactive and `--output-last-message` as writing the assistant's final message to a file; it recommends `--json` with that option for CI progress and final summaries.

The installed Codex 0.158.0 release directory contained the executable and packaged resources but no local CLI source. No auth or config files were inspected.

## Resolution status and minimal follow-up

Root reports that commit `651eb1fae` adds terminal-event retention/presence checks and required pair-carrier enforcement, and that the focused guard tests pass 9/9. The two incomplete pairs are assigned to disjoint Luna repair work. The two comparison pairs above are carrier-complete and need no owner repair on file-accounting grounds.

No additional provider/model change is justified by the evidence. Keep the on-disk artifact gate active for these pre-guard receipts and finish only the missing work in the two incomplete pairs. If another clean exit is incomplete, retain the terminal summary and final-response presence signal; provider-specific attribution would additionally require preserving a redacted provider finish reason or equivalent metadata. Do not infer context exhaustion from cumulative token usage.

Run snapshot reported by root: Nevanlinna author launch verified at `11:12:33Z`; `26` Step-3b authors active at `11:13:53Z`; all levels reported green at 810. These are time-stamped observations, not a live count.
