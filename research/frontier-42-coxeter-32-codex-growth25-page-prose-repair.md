# Growth 25 B-page focused prose repair

Status: independently reviewed; page writes HELD pending Root's explicit registry/write-window grant. Only this report has been written.

The exact subject is `library/coxeter-groups/coxeter-descents-poincare-polynomials-and-growth-examples.md`. Current raw SHA-256 is `a7ecee39d55227075bc5b47f75179212351efe8499c6b61d0ff05d6cc73d5bd3`, equal to the immutable `research/frontier-42-coxeter-32-step5-hash-25-pre.json` B-page `file_sha256`. The page therefore still matches its pre-reader bytes; no Reader 25 B-page change is being overwritten. Current before bytes, preserved literally:

```markdown
---
page: coxeter-descents-poincare-polynomials-and-growth-examples
title: "Coxeter Descents, Poincaré Polynomials, and Growth — Examples"
status: draft
items: []
examples: [ex-cg-classical-poincare-products-by-insertion,
           ex-cg-a2-descent-inclusion-exclusion-and-reciprocity,
           ex-cg-infinite-dihedral-growth]
---

This companion is a dependency leaf. Its examples use only the theory of [[coxeter-descents-poincare-polynomials-and-growth]] and that page's established prerequisite closure; no other theory page may depend on a supplier homed here.

[[ex-cg-classical-poincare-products-by-insertion]] re-derives the type-A products by inserting $n$ at each one-based position: this adds exactly $n-i$ inversions and yields $P_{S_n}=[n]_tP_{S_{n-1}}=[n]_t!$. In the signed-permutation model, the type-B cosets over the subgroup fixing $\varepsilon_1$ correspond to the $2n$ choices $\pm\varepsilon_i$, giving the factor $[2n]_t$ and $P_{B_n}=\prod_{i=1}^n[2i]_t$. For type D with $n\ge4$, deleting the terminal node gives the $D_{n-1}$ parabolic; the even-signed Schreier cycle has distances $0,\ldots,n-2$, $n-1$ twice, and $n,\ldots,2n-2$, giving the factor $[n]_t(1+t^{n-1})$ and, by telescoping from $D_3$, $P_{D_n}=[n]_t\prod_{i=1}^{n-1}[2i]_t$. The low-rank bases and checks are $P_{S_2}=[2]_t$, $P_{S_3}=[2]_t[3]_t$, $P_{S_4}=[2]_t[3]_t[4]_t$, $P_{B_1}=[2]_t$, $P_{B_2}=[2]_t[4]_t$, $P_{D_2}=[2]_t^2$, and $P_{D_3}=[4]_t!$. The $D_4$ product is $[4]_t[2]_t[4]_t[6]_t=1+4t+9t^2+16t^3+23t^4+28t^5+30t^6+28t^7+23t^8+16t^9+9t^{10}+4t^{11}+t^{12}$, whose coefficient sum is $192=|W(D_4)|$. Evaluations at $t=1$ give $n!$, $2^nn!$ and $2^{n-1}n!$ for the symmetric, signed and even-signed permutation groups.

[[ex-cg-a2-descent-inclusion-exclusion-and-reciprocity]] uses the smallest-rank finite Coxeter system whose diagram is not a product of copies of $A_1$. It relabels the library's $S_3$ on $\{0,1,2\}$ order-preservingly as permutations of $\{1,2,3\}$, lists all six elements and lengths, and computes every right-descent interval directly and through inclusion-exclusion. The finite Steinberg identity $1-2/(1+t)+1/P_W=t^3/P_W$ is verified after clearing denominators; the degree product $[2]_t[3]_t=P_W$, group order $P_W(1)=6$, exponent sum $\sum_i(d_i-1)=3=N$, and reciprocity $t^3P_W(t^{-1})=P_W(t)$ are checked explicitly. The finite enumeration uses no choice.

[[ex-cg-infinite-dihedral-growth]] uses the alternating normal forms to count one identity and two elements of every positive length, giving $P_W=(1+t)/(1-t)$. Its spherical subsets are $\emptyset,\{s\},\{t\}$, and the infinite Steinberg identity becomes $1-2/(1+t)+(1-t)/(1+t)=0$. In $\mathbb Q(t)$, $P_W(t^{-1})=-P_W(t)$, so a finite-$N$ reciprocity identity would force $t^N=-1$; this fails for every $N\ge0$. The alternating lengths are unbounded, so the group has no longest element. Its rank-one parabolic still has $P_{W_{\{s\}}}=1+t=[2]_t$.

Each example states its hypotheses in full and verifies the displayed calculation; the two infinite-case examples exhibit the exact point where the finite reciprocity argument stops. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
```

Read the full actual Reader 25 report, both machine-readable findings, native result, current page, and exact classical lemma Statement (2)(c)/Proof 4.3. Independently confirmed:

1. For n >= 4, the displayed graph has chains z_1—…—z_n and −z_1—…—−z_n, with cross edges z_1—−z_2 and −z_1—z_2. Thus ±z_n have degree 1 and ±z_2 degree 3. Calling the entire graph a cycle is false. Its displayed distance histogram and Poincaré product remain correct. Planned literal substitution: `the even-signed Schreier cycle has distances` → `the even-signed Schreier graph has distances`.
2. Full YAML lists exactly three examples: finite classical products, finite A2, and one infinite-dihedral example. Planned literal substitution: `the two infinite-case examples exhibit` → `the infinite-dihedral example exhibits`.

No original item Statement or Definition changes; no downstream mathematical interface change. Both edits are confined to these exact page phrases. No item, contract, manifest, native finding, certificate, control, or ledger writes are authorized here. Historical Reader 25 findings retain their null observed_source and are untouched.

Drain evidence: native result has ok:true, exit 0, no timeout, task_complete; result ended 2026-10-07T22:02:36.750Z and engine state ended 2026-10-07T22:02:36.839Z with lastExitOk:true. Root reports exact children absent at 22:03:30; this is attributed to Root, not independently rechecked without the numeric PIDs. A fresh process listing found no process matching the exact reader label/session beyond the inspection command itself. Root subsequently confirmed the receipt does not record numeric PIDs. Exact label/session process absence together with the runtime watcher's recorded exact-label absence at 22:03:30 is sufficient drain evidence; no numeric PID is invented or required. The two substitutions are approved in principle, while page writes remain held pending the registry API.

No page validator has been run on nonexistent repaired bytes. Once granted, recheck the before hash, make the two literal substitutions, perform focused page checks, record final raw guard and drain, and notify Root to preserve the original finding plus the new touched-page obligation under the registry.

## Final authorized repair and local review

Run: `frontier-42-coxeter-32`. Root granted the exact two substitutions after CAT owner captured immutable before evidence. READY; page and report writes drained. This final entry supersedes the earlier held status, retaining that chronology.

Current path: `library/coxeter-groups/coxeter-descents-poincare-polynomials-and-growth-examples.md`. Before raw SHA-256: `a7ecee39d55227075bc5b47f75179212351efe8499c6b61d0ff05d6cc73d5bd3`. After raw SHA-256: `6e9d9f300bf48a61c68a1761e69398b302c51fbaf0f9e2bc3c660ba8a76d081a`. Capture path: `research/frontier-42-coxeter-32-step5-owner-page-25-coxeter-descents-poincare-polynomials-and-growth-examples-before.json`; capture raw SHA-256: `0847c281a7a3509e39282793a3692509cd4fd4645ffb2d9259fe84106abb69e1`. Original owner artifact is this repair report; its final raw hash is handed off separately after the report's last edit.

Exact unique edit array:

```json
[
  {
    "before": "the even-signed Schreier cycle has distances",
    "after": "the even-signed Schreier graph has distances"
  },
  {
    "before": "the two infinite-case examples exhibit",
    "after": "the infinite-dihedral example exhibits"
  }
]
```

Before mutation, rechecked every capture reference (pre snapshot, before archive, native result, native report and findings), immutable pre/current/archive byte agreement, and absence of active relevant run42 native dispatchers. Reader 25 PIDs 869353/869360 were independently checked absent now, agreeing with Root's 22:05:21 observation. Unrelated run43 dispatchers were excluded by exact run identity.

Focused page check: full YAML parsed before and after, frontmatter identical; same three ordered examples, all three item paths exist; each old phrase occurred exactly once and each replacement occurs exactly once; reconstructing from the before archive with only these two literal edits equals current bytes exactly. Distances, formulas, page metadata and example order are preserved.

Final explicit rendering: `node tools/rendercheck.mjs library/coxeter-groups/coxeter-descents-poincare-polynomials-and-growth-examples.md --json` passed, one file, zero errors and warnings. No proof-bearing item was changed, so item proof-layout/phase precheck is not applicable and no empty item check is claimed. This is a local page repair review, not mathematical acceptance, native adjudication or gate clearance.

Registry integration remains CAT owner's sole responsibility. No shared registry, item, contract, manifest, original finding, certificate or control was changed. The original native findings and unbound reader observations remain historical evidence; the captured owner-before bytes honestly bind this repair.
