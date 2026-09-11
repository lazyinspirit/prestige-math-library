---
id: "lem-fixed-machine-history-predicate-is-primitive-recursive"
kind: "lemma"
title: "Fixed machine history predicate is primitive recursive"
status: "draft"
origin: "pipeline"
deps: ["def-kleene-computation-predicate-and-output-map", "lem-fixed-coding-primitive-recursive-arithmetic-and-sequences", "thm-induction-principle"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gallier §2.3, Comp and End construction; explicit local Turing-history adaptation"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
proof_strategy: "direct"
---

## Statement

For each fixed positive $k$, the predicate $T_k$ and total output function $U$ of the preceding definition are primitive recursive. The predicate holds exactly on histories of a terminating canonical-numeric computation. For fixed $e,\mathbf a$, every witness has the same output $U(z)$.

## Facts & Assumptions

**Given:** The fixed arity and conventions just specified. There is no bound on the running time of the program being described.

[F1] The history checks include the initial configuration, nonhalting intermediate configurations, consecutive steps and canonical output ([[def-kleene-computation-predicate-and-output-map]]).

[F2] Bounded arithmetic, search, list operations and explicitly bounded scans are PR ([[lem-fixed-coding-primitive-recursive-arithmetic-and-sequences]]).

[F3] Properties propagate from zero by successor induction ([[thm-induction-principle]]).

## Proof

1.1 Decode the word of index $e$ by binary expansion of $e+1$ and deleting its leading bit. The operations are PR by F2. Parse its unary arity header and each unary-length block with a cursor, taking at most word length plus one parser rounds; failed states stay failed. Horner conversion decodes a numeral. Check canonicality, $m\ge3$, $r\ge1$, $s<r$, $s\ge2$, tuple length $3+3(m-2)r$, and the ranges of every triple. Multiplication and comparisons are PR; bounded iteration over the actual list checks every entry and no unprovided entries. Hence program validity and decoded table lookup, with a fixed zero fallback on failure, are PR. [F1, F2]

2.1 For a candidate configuration, its list must have exactly three entries. Check state range, $h<\ell(v)$, all symbol ranges and the trimming condition in F1 by bounded comparisons and a scan of $v$. Construct the initial tape word by converting each of the fixed $k$ input numbers into its canonical numeral, appending the arity and length headers, and changing bit $i$ to letter $i+1$. All these are bounded folds in F2; their bounds may be PR functions of the arguments, not constant bounds. Its initial configuration code has state/head zero and the resulting nonempty tape word, so equality of the proposed first entry with it is PR. [F1, F2, step 1.1]

3.1 For two valid configuration codes $(q,h,v)$ and $(q',h',v')$, reject if $q$ is halting. Otherwise read the table entry for $q$ and the coordinate $v_h$, obtaining $(p,b,d)$. Check $q'=p$, $v'_h=b$, and $v'_j=v_j$ at each $j<\max(\ell(v),\ell(v'))$ other than $h$. Beyond this bound both tapes are blank. Check $h'=h+1$ if $d=1$ and $h'=\max(h-1,0)$ if $d=0$. These PR checks express precisely one actual step, including clamping and any new last cell; the validity tests already require canonical trimming on both sides. [F1, F2, step 1.1, step 2.1]

4.1 A bounded conjunction over the history list tests all configurations and all adjacent pairs. Nonemptiness and first/last entry checks are PR. For terminal output, find the first coordinate of the last tape list not in $\{1,2\}$, using its length as the value if no such coordinate occurs. This stopping rule gives exactly the maximal bit prefix; only in the latter case is its next implicit cell necessarily blank. Reject an empty prefix; accept a leading $1$ bit or the single bit $0$. Horner accumulation computes its value. On any syntactic failure set $U$ to zero. All scans are bounded by a decoded finite length, proving that $U$ is total PR and the conjunction $T_k$ is PR. No search for a halting time occurs in these tests. [F1, F2, step 2.1, step 3.1]

5.1 If $T_k$ holds, its initial check places the list at the actual starting configuration. At every subsequent position the exact step check produces the unique next configuration, so successor induction identifies the entire list with an initial segment of the actual run. Its final state is halting and all earlier ones are nonhalting, hence this is the first halt and has canonical output. Conversely, a finite actual run ending at its first halt with canonical output has finitely supported tapes; trim and encode its configurations as prescribed and cons them into a history. It passes every check. The start is nonhalting, so a purported length-one halting history does not pass. [step 2.1, step 3.1, step 4.1, F1, F3]

6.1 Two witnessing histories coincide at every common time by determinism and induction. If one were shorter, the longer would have a nonhalting entry at the time where the shorter has its halting entry, impossible since these entries coincide. Thus their lengths and final configurations coincide, and the deterministic extraction in U gives the same value. Empty histories are false, malformed indices have no witnesses, and invalid output has no witness although U itself remains total. This proves all claims without an assumption of eventual halting or any choice. [step 4.1, step 5.1, F3] ∎
