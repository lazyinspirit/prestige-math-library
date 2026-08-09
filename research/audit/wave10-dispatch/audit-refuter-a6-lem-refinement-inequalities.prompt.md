# Audit proof-refuter brief — Wave 10, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` proof, actively search for a counterexample. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Wave 10 target — `lem-refinement-inequalities`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `946725639ed676c4e6edff8dd3aac77be9cfa82e2e3de5085f9a2916adae962a`

## Complete current target

````markdown
---
id: lem-refinement-inequalities
kind: lemma
title: "Refining a partition raises the lower Darboux sum and lowers the upper one, and every lower sum is at most every upper sum: $L(f,P) \\le L(f,P') \\le U(f,P') \\le U(f,P)$ when $P'$ refines $P$, and $L(f,P) \\le U(f,Q)$ for arbitrary partitions $P$ and $Q$; moreover the two changes are at most $2M(n' - n)\\|P\\|$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-partition-and-refinement, def-darboux-sums, lem-sup-monotone, lem-finite-sum-laws, def-finite-sum, def-infimum, thm-infimum-property, def-bounded-set, thm-induction-principle, def-canonical-natural, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, def-interval]
justified_by: []
aliases: []
landmark: true
short: "refinement inequalities"
proof_strategy: induction
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded, say
$|f(x)| \le M$ for every $x \in [a,b]$ with $M \ge 0$ real
([[def-bounded-set]]). Darboux sums are those of [[def-darboux-sums]] and
partitions those of [[def-partition-and-refinement]]. Then:

1. **Refinement.** If $P' = (n',t')$ refines $P = (n,t)$ then
   $$L(f,P) \;\le\; L(f,P') \;\le\; U(f,P') \;\le\; U(f,P).$$
2. **Every lower sum is at most every upper sum.** For arbitrary partitions $P$
   and $Q$ of $[a,b]$,
   $$L(f,P) \;\le\; U(f,Q).$$
3. **Quantitative form.** If $P' = (n',t')$ refines $P = (n,t)$ then
   $$0 \;\le\; U(f,P) - U(f,P') \;\le\; 2M\,(n' - n)\,\|P\|, \qquad 0 \;\le\; L(f,P') - L(f,P) \;\le\; 2M\,(n' - n)\,\|P\| .$$

**Notation.** In claim 3 the natural number $n' - n$ multiplies a real, and as in
clause 2 of [[lem-finite-sum-laws]] it stands there for its canonical natural
$\iota(n'-n) \in \mathbb{R}$ ([[def-canonical-natural]]); $\iota$ is additive and
nondecreasing on $\mathbb{N}$ ([[lem-of-naturals-positive]]). The same
abbreviation is used throughout the proof.

Claims 1 and 2 are what make [[def-darboux-integral]] well posed. Claim 3 is the
extra information that a refinement changes the sums by an amount controlled by
the mesh of the **coarse** partition and by how many points were added; it is
what [[thm-darboux-equals-riemann]] needs and nothing else on this page uses it.
Here $n' - n \ge 0$ ([[def-partition-and-refinement]]), so the right-hand bounds
are nonnegative.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$ with $|f(x)| \le M$ for all $x \in [a,b]$ and $M \ge 0$ real, and partitions $P = (n,t)$ and $P' = (n',t')$ of $[a,b]$ with $P'$ refining $P$.

[L1] A refinement carries an index map $\varphi$ with $\varphi(0) = 0$, $\varphi(n) = n'$ and $\varphi(i) < \varphi(i+1)$ for $i < n$; hence $\varphi(k) \ge k$ for $k \le n$ and $n \le n'$. For $i < n$ and $\varphi(i) \le j < \varphi(i+1)$ one has $I'_j \subseteq I_i$, and $\sum_{j=\varphi(i)}^{\varphi(i+1)-1}\Delta'_j = \Delta_i$. Every $\Delta_i$ satisfies $0 < \Delta_i \le \|P\|$, and $\sum_{i<n}\Delta_i = b - a$ ([[def-partition-and-refinement]]).

[L2] For any partitions $R, S$ of $[a,b]$ the common refinement $R \vee S$ refines both ([[def-partition-and-refinement]]).

[L3] With $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$: $-M \le m_i \le f(x) \le M_i \le M$ for $x \in I_i$, $L(f,P) = \sum_{i<n} m_i\Delta_i$, $U(f,P) = \sum_{i<n} M_i\Delta_i$, and $L(f,R) \le U(f,R)$ for every partition $R$ ([[def-darboux-sums]], [[def-interval]]).

[L4] If $\varnothing \ne S \subseteq T \subseteq \mathbb{R}$ and $T$ is bounded above then $\sup S \le \sup T$ ([[lem-sup-monotone]]); dually, if $T$ is bounded below then $\inf S \ge \inf T$, since $\inf T$ is a lower bound of $T$ and hence of $S$, and $\inf S$ is the greatest lower bound of $S$ ([[def-infimum]], [[thm-infimum-property]]).

[L5] Finite sums: splitting $\sum_{j<q} c_j = \sum_{j<p} c_j + \sum_{j=p}^{q-1} c_j$ for $p \le q$, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] Ordered-field arithmetic: adding a constant and multiplying by a nonnegative quantity preserve an inequality, and the order is total and transitive ([[lem-of-add-order]], [[lem-of-sign-rules]], [[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L8] A natural number multiplying a real means its canonical natural $\iota(\cdot)$; $\iota(0) = 0$, $\iota(p+q) = \iota(p)+\iota(q)$, $\iota(p) \ge 0$, and $p \le q$ implies $\iota(p) \le \iota(q)$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** induction.

1.1 Fix the index map $\varphi$ of [L1] and, for $k \le n$, put $A_k := \sum_{j<\varphi(k)} M'_j\Delta'_j$, $B_k := \sum_{i<k} M_i\Delta_i$, $A^{-}_k := \sum_{j<\varphi(k)} m'_j\Delta'_j$ and $B^{-}_k := \sum_{i<k} m_i\Delta_i$; let $Q(k)$ be the conjunction $B_k - 2M\|P\|(\varphi(k)-k) \le A_k \le B_k$ and $B^{-}_k \le A^{-}_k \le B^{-}_k + 2M\|P\|(\varphi(k)-k)$. The proof is an induction on $k$ using [L6]. [given, L1, L6, construct]

1.2 **Base, $k = 0$.** All four sums are empty, hence $0$, and $\varphi(0) - 0 = 0$, so $Q(0)$ reads $0 \le 0 \le 0$ twice. [base, L1, L5]

1.3 **Induction hypothesis.** Fix $k < n$ and assume $Q(k)$. [ih, given]

2.1 Put $\beta := \sum_{j=\varphi(k)}^{\varphi(k+1)-1} M'_j\Delta'_j$ and $\gamma := \sum_{j=\varphi(k)}^{\varphi(k+1)-1} m'_j\Delta'_j$. For $\varphi(k) \le j < \varphi(k+1)$ one has $I'_j \subseteq I_k$, hence $f[I'_j] \subseteq f[I_k]$, hence $m_k \le m'_j \le M'_j \le M_k$ by [L4] and [L3]; also $|M'_j| \le M$ and $|m'_j| \le M$ by [L3]. [step 1.1, L1, L3, L4]

3.1 Since $\Delta'_j > 0$ and the lengths in the block sum to $\Delta_k$ by [L1], monotonicity and scaling of finite sums ([L5]) give $m_k\Delta_k \le \gamma \le \beta \le M_k\Delta_k$ and $-M\Delta_k \le \gamma \le \beta \le M\Delta_k$. [step 2.1, L1, L5, L7]

4.1 Both $M_k\Delta_k - \beta$ and $\gamma - m_k\Delta_k$ lie in $[\,0,\ 2M\|P\|(\varphi(k+1)-\varphi(k)-1)\,]$. Nonnegativity is step 3.1. If $\varphi(k+1) = \varphi(k)+1$ the block is the single index $j = \varphi(k)$, and then $I'_j = I_k$ by [L1], so $M'_j = M_k$, $m'_j = m_k$, $\Delta'_j = \Delta_k$ and both quantities are $0$. Otherwise $\varphi(k+1) - \varphi(k) - 1 \ge 1$, and by step 3.1 and [L3] each quantity is at most $M\Delta_k + M\Delta_k = 2M\Delta_k \le 2M\|P\|$, hence at most $2M\|P\|(\varphi(k+1)-\varphi(k)-1)$. [step 2.1, step 3.1, L1, L3, L5, L7, L8]

5.1 **The upper half of $Q(k+1)$.** By the splitting law [L5], $A_{k+1} = A_k + \beta$ and $B_{k+1} = B_k + M_k\Delta_k$. From step 1.3 and step 3.1, $A_{k+1} \le B_k + M_k\Delta_k = B_{k+1}$; and from step 1.3 and step 4.1, $A_{k+1} \ge B_k - 2M\|P\|(\varphi(k)-k) + M_k\Delta_k - 2M\|P\|(\varphi(k+1)-\varphi(k)-1) = B_{k+1} - 2M\|P\|(\varphi(k+1)-(k+1))$. [step 1.3, step 3.1, step 4.1, L5, L7, L8]

5.2 **The lower half of $Q(k+1)$.** Likewise $A^{-}_{k+1} = A^{-}_k + \gamma$ and $B^{-}_{k+1} = B^{-}_k + m_k\Delta_k$, so step 1.3 with step 3.1 gives $A^{-}_{k+1} \ge B^{-}_{k+1}$, and step 1.3 with step 4.1 gives $A^{-}_{k+1} \le B^{-}_k + 2M\|P\|(\varphi(k)-k) + m_k\Delta_k + 2M\|P\|(\varphi(k+1)-\varphi(k)-1) = B^{-}_{k+1} + 2M\|P\|(\varphi(k+1)-(k+1))$. So $Q(k+1)$ holds. [step 1.3, step 3.1, step 4.1, L5, L7, L8]

6.1 By [L6] with steps 1.2, 1.3, 5.1 and 5.2, $Q(k)$ holds for every $k \le n$. Taking $k = n$ and using $\varphi(n) = n'$ from [L1]: $A_n = U(f,P')$, $B_n = U(f,P)$, $A^{-}_n = L(f,P')$ and $B^{-}_n = L(f,P)$, so $U(f,P) - 2M\|P\|(n'-n) \le U(f,P') \le U(f,P)$ and $L(f,P) \le L(f,P') \le L(f,P) + 2M\|P\|(n'-n)$. With $L(f,P') \le U(f,P')$ from [L3] this is claim 1, and it is claim 3. [step 1.2, step 1.3, step 5.1, step 5.2, L1, L3, L6, L8]

7.1 **Claim 2.** Let $P$ and $Q$ be arbitrary partitions of $[a,b]$ and let $R := P \vee Q$, which refines both by [L2]. Applying step 6.1 to the pair $(P,R)$ and to the pair $(Q,R)$ gives $L(f,P) \le L(f,R) \le U(f,R) \le U(f,Q)$, the middle inequality by [L3]. All three claims are now established, the first and third in step 6.1 from the completed induction and the second here. [step 6.1, L2, L3, L6, discharge-induction] ∎

## Remarks

- **Where the hypothesis $|f| \le M$ is used, and where it is not.** Claims 1 and 2 need only that $f$ is bounded, so that the Darboux sums exist at all; the particular bound $M$ enters only in claim 3, through step 4.1, and the factor $2M$ there is exactly the largest possible value of $M_k - m_k$ ([[def-darboux-sums]]).

- **The mesh in claim 3 is that of the coarse partition.** It has to be: the refinement $P'$ may have very short subintervals, and what the estimate measures is how much a single one of $P$'s subintervals can be improved by being cut up. That is why [[thm-darboux-equals-riemann]] can fix a partition $P_0$ once and then let $P$ range over all partitions of small mesh.

- **The count $n' - n$ is not a count of new points in disguise.** It is the difference of the two index counts, and by the telescoping identity of [[def-partition-and-refinement]] it equals the total amount by which the blocks of $\varphi$ exceed length one. That is the form the proof uses, and it needs no notion of the cardinality of $\operatorname{pts}(P') \setminus \operatorname{pts}(P)$.
````

## Current Wave 10 provenance determination

```json
{
  "id": "lem-refinement-inequalities",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_rint.html",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
  ],
  "rationale": "The sources state that refinement increases lower sums and decreases upper sums. The proof reduces to one-point insertion and then iterates over finitely many new points.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 10 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-partition-and-refinement",
      "source_section": "Definition",
      "quote": "**Standing hypothesis for this page.** Throughout, $\\mathbb{R}$ is the complete\nordered field ([[def-complete-ordered-field]], [[def-ordered-field]]),\n$\\mathbb{N}$ is the set of natural numbers and **contains $0$**\n([[def-natural-numbers]], [[def-nat-order]]), $\\iota : \\mathbb{N} \\to \\mathbb{R}$\nis the canonical natural ([[def-canonical-natural]]), and $a, b$ are reals with\n\n$$a \\;<\\; b .$$\n\nIntervals and their lengths are those of [[def-interval]]; finite sums are those\nof [[def-finite-sum]], indexed as $\\sum_{i<n}$ over $i \\in \\mathbb{N}$.\n\n### Partitions\n\nA **partition of $[a,b]$** is a pair $P = (n, t)$ consisting of a natural number\n$n \\ge 1$ and a sequence $t : \\mathbb{N} \\to \\mathbb{R}$ ([[def-sequence]]) with\n\n$$t_0 = a, \\qquad t_i < t_{i+1} \\ \\text{ for every } i < n, \\qquad t_k = b \\ \\text{ for every } k \\ge n .$$\n\nThe tail convention on the third clause is bookkeeping only: it makes $t$ a\ngenuine sequence, so that the finite-sum laws of [[lem-finite-sum-laws]] apply to\nit verbatim, and it costs nothing because no index above $n$ is ever read. The\nfirst two clauses say exactly that\n\n$$a \\;=\\; t_0 \\;<\\; t_1 \\;<\\; \\dots \\;<\\; t_n \\;=\\; b ,$$\n\nthe last equality because $t_n = b$ by the third clause. In particular\n$i \\mapsto t_i$ is strictly increasing, hence injective, on\n$\\{\\, i \\in \\mathbb{N} : i \\le n \\,\\}$ ([[def-injection-surjection-bijection]]),\nand $a \\le t_i \\le b$ for every $i \\le n$.\n\nThe **point set** of $P$ is the finite set\n\n$$\\operatorname{pts}(P) \\;:=\\; \\{\\, t_i \\ : \\ i \\le n \\,\\} \\;\\subseteq\\; [a,b], \\qquad a, b \\in \\operatorname{pts}(P) .$$\n\nThe **subintervals** of $P$ are\n\n$$I_i \\;:=\\; [\\,t_i,\\ t_{i+1}\\,] \\qquad (i < n),$$\n\nand their **lengths** are $\\Delta_i := t_{i+1} - t_i$. Each $\\Delta_i > 0$, so\neach $I_i$ is a nondegenerate closed bounded interval ([[def-interval]]). There\nare $n$ of them and they are indexed from $i = 0$, not from $i = 1$: the first\nsubinterval is $[t_0, t_1] = [a, t_1]$.\n\n**The lengths sum to $b - a$.** By the telescoping law, clause 5 of\n[[lem-finite-sum-laws]],\n\n$$\\sum_{i<n} \\Delta_i \\;=\\; \\sum_{i<n} (t_{i+1} - t_i) \\;=\\; t_n - t_0 \\;=\\; b - a .$$\n\n**The mesh.** The set $\\{\\, \\Delta_i : i < n \\,\\}$ is a nonempty finite set of\nreals, nonempty because $n \\ge 1$, so it has a maximum\n([[lem-finite-set-has-max]], [[def-max-min]]). The **mesh** of $P$ is\n\n$$\\|P\\| \\;:=\\; \\max\\{\\, \\Delta_i \\ : \\ i < n \\,\\} \\;>\\; 0 ,$$\n\nand $\\Delta_i \\le \\|P\\|$ for every $i < n$.\n\n**The uniform partition.** For a natural $N \\ge 1$, the **uniform partition of\n$[a,b]$ into $N$ parts** is $U_N := (N, t)$ with\n\n$$t_i \\;:=\\; a + \\iota(i)\\,\\frac{b-a}{\\iota(N)} \\quad (i \\le N), \\qquad t_k := b \\quad (k \\ge N).$$\n\nThis is a partition: $t_0 = a$; $t_N = a + (b-a) = b$; and $t_{i+1} - t_i =\n(b-a)/\\iota(N) > 0$ for $i < N$, because $\\iota(N) > 0$ and $\\iota(i+1) =\n\\iota(i) + 1$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]). Its\nsubinterval lengths are all equal to $(b-a)/\\iota(N)$, so\n\n$$\\|U_N\\| \\;=\\; \\frac{b-a}{\\iota(N)} .$$\n\n### A partition is determined by its point set\n\n**Claim.** If $P = (n,t)$ and $P' = (n', t')$ are partitions of $[a,b]$ with\n$\\operatorname{pts}(P) = \\operatorname{pts}(P')$, then $n = n'$ and $t_i = t'_i$\nfor every $i \\le n$.\n\n*Proof.* First, $t_i = t'_i$ for every $i \\le \\min\\{n,n'\\}$, by induction on $i$\n([[thm-induction-principle]]). For $i = 0$ both equal $a$. Suppose $t_j = t'_j$\nfor all $j \\le i$ and $i + 1 \\le \\min\\{n,n'\\}$. The set\n$S := \\{\\, x \\in \\operatorname{pts}(P) : x > t_i \\,\\}$ has $t_{i+1}$ as its least\nelement: $t_{i+1} \\in S$, and any $x \\in S$ is $t_j$ for some $j \\le n$ with\n$t_j > t_i$, which forces $j > i$ because $t$ is increasing on indices $\\le n$,\nhence $j \\ge i+1$ and $x = t_j \\ge t_{i+1}$. The same argument in $P'$ makes\n$t'_{i+1}$ the least element of\n$\\{\\, x \\in \\operatorname{pts}(P') : x > t'_i \\,\\}$, which is the same set $S$,\nsince the point sets agree and $t'_i = t_i$. A set has at most one least element\n([[def-max-min]]), so $t_{i+1} = t'_{i+1}$.\n\nSecond, $n = n'$. If $n < n'$ then $t'_n = t_n = b$ by the previous paragraph,\nwhile $t'_n < t'_{n'} = b$ because $t'$ is increasing on indices $\\le n'$ and\n$n < n'$; that is impossible. Exchanging the roles of $P$ and $P'$ rules out\n$n' < n$. $\\square$\n\nSo the map $P \\mapsto \\operatorname{pts}(P)$ is injective, and a partition may be\nnamed by its point set whenever one is exhibited.\n\n### Inserting a point\n\nLet $P = (n,t)$ be a partition of $[a,b]$ and let $c \\in [a,b]$. Define a\npartition $P + c$ of $[a,b]$ as follows.\n\n- If $c \\in \\operatorname{pts}(P)$, put $P + c := P$.\n- Otherwise $c \\ne a$ and $c \\ne b$, so $a < c < b$. The set\n  $T := \\{\\, t_i : i \\le n \\text{ and } t_i < c \\,\\}$ is a nonempty finite set of\n  reals, nonempty because $t_0 = a < c$, so it has a maximum\n  ([[lem-finite-set-has-max]]); let $i_0 \\le n$ be the unique index with\n  $t_{i_0} = \\max T$, unique because $t$ is injective on indices $\\le n$. Then\n  $i_0 < n$, since $t_n = b > c$ puts $t_n \\notin T$; and\n  $$t_{i_0} \\;<\\; c \\;<\\; t_{i_0+1},$$\n  the right inequality because $t_{i_0+1} \\ne c$ (as $c \\notin \\operatorname{pts}(P)$)\n  and $t_{i_0+1} < c$ would put $t_{i_0+1} \\in T$ with $t_{i_0+1} > t_{i_0} = \\max T$.\n  Put $P + c := (n+1, s)$ with\n  $$s_i := t_i \\ (i \\le i_0), \\qquad s_{i_0+1} := c, \\qquad s_i := t_{i-1} \\ (i_0 + 2 \\le i \\le n+1), \\qquad s_k := b \\ (k \\ge n+1).$$\n\nIn both cases $P + c$ is a partition of $[a,b]$ and\n\n$$\\operatorname{pts}(P + c) \\;=\\; \\operatorname{pts}(P) \\cup \\{c\\}, \\qquad \\|P+c\\| \\;\\le\\; \\|P\\| .$$\n\nThe displayed identity is immediate from the two cases. For the mesh: in the\nfirst case nothing changes; in the second the list of subinterval lengths of\n$P + c$ is that of $P$ with $\\Delta_{i_0}$ replaced by the two numbers\n$c - t_{i_0}$ and $t_{i_0+1} - c$, each of which is smaller than\n$\\Delta_{i_0} = (c - t_{i_0}) + (t_{i_0+1} - c)$ because the other is positive.\nSo every length of $P + c$ is at most a length of $P$, and the maximum cannot\nincrease. Finally the index count grows by exactly $1$ in the second case and\nnot at all in the first.\n\n### Refinement and the common refinement\n\n$P'$ **refines** $P$, and is a **refinement** of $P$, when\n\n$$\\operatorname{pts}(P) \\;\\subseteq\\; \\operatorname{pts}(P') .$$\n\nLet $P = (n,t)$ and $Q = (m,s)$ be partitions of $[a,b]$. Applying the recursion\ntheorem ([[thm-recursion]]) to the set $\\mathbb{N} \\times \\mathcal{P}_{[a,b]}$,\nwhere $\\mathcal{P}_{[a,b]}$ is the set of partitions of $[a,b]$, with starting\nelement $(0, P)$ and the map $(j, R) \\mapsto (j+1,\\ R + s_j)$ — legitimate\nbecause $s_j \\in [a,b]$ for every $j \\in \\mathbb{N}$ — gives a unique family\n$(R_j)_{j \\in \\mathbb{N}}$ of partitions with $R_0 = P$ and $R_{j+1} = R_j + s_j$.\nThe **common refinement** of $P$ and $Q$ is\n\n$$P \\vee Q \\;:=\\; R_{m+1} .$$\n\n**Its point set is the union.** By induction on $j$ ([[thm-induction-principle]]),\n$\\operatorname{pts}(R_j) = \\operatorname{pts}(P) \\cup \\{\\, s_l : l < j \\,\\}$;\ntaking $j = m+1$ gives\n\n$$\\operatorname{pts}(P \\vee Q) \\;=\\; \\operatorname{pts}(P) \\cup \\operatorname{pts}(Q).$$\n\nHence $P \\vee Q$ refines both $P$ and $Q$; by the uniqueness claim above it is\nthe **only** partition with that point set, so $P \\vee Q = Q \\vee P$, and\n\n$$P' \\text{ refines } P \\quad \\Longrightarrow \\quad P \\vee P' = P' ,$$\n\nsince then $\\operatorname{pts}(P) \\cup \\operatorname{pts}(P') =\n\\operatorname{pts}(P')$.\n\n**Two size bounds, both used later.** Writing $n_R$ for the first component of a\npartition $R$:\n\n$$\\|P \\vee Q\\| \\;\\le\\; \\|P\\|, \\qquad n_{P \\vee Q} \\;\\le\\; n_P + n_Q - 1 .$$\n\nThe first is the mesh bound above applied $m+1$ times. For the second, each\ninsertion raises the index count by at most $1$, and the two insertions of\n$s_0 = a$ and $s_m = b$ raise it by $0$, since $a$ and $b$ already lie in\n$\\operatorname{pts}(P)$ and hence in $\\operatorname{pts}(R_j)$ for every $j$; so\nat most $m - 1$ of the $m+1$ insertions increase it.\n\n### The index map of a refinement\n\nLet $P' = (n',t')$ refine $P = (n,t)$. For each $i \\le n$ the point $t_i$ lies in\n$\\operatorname{pts}(P')$, so there is exactly one $\\varphi(i) \\le n'$ with\n$t'_{\\varphi(i)} = t_i$, uniqueness because $t'$ is injective on indices $\\le n'$.\nThe resulting map $\\varphi$ satisfies\n\n$$\\varphi(0) = 0, \\qquad \\varphi(n) = n', \\qquad \\varphi(i) < \\varphi(i+1) \\ \\ (i < n),$$\n\nthe first two because $t'_0 = a = t_0$ and $t'_{n'} = b = t_n$ together with\ninjectivity, and the third because $t_i < t_{i+1}$ and $t'$ is increasing on\nindices $\\le n'$. In particular $n \\le n'$. Moreover, for $i < n$ and\n$\\varphi(i) \\le j < \\varphi(i+1)$,\n\n$$I'_j \\;=\\; [\\,t'_j,\\ t'_{j+1}\\,] \\;\\subseteq\\; [\\,t_i,\\ t_{i+1}\\,] \\;=\\; I_i ,$$\n\nbecause $t_i = t'_{\\varphi(i)} \\le t'_j$ and $t'_{j+1} \\le t'_{\\varphi(i+1)} = t_{i+1}$.\n\n**The blocks are counted by telescoping.** By clause 5 of\n[[lem-finite-sum-laws]],\n$\\sum_{i<n}\\big(\\varphi(i+1) - \\varphi(i)\\big) = \\varphi(n) - \\varphi(0) = n'$,\nso, subtracting $\\sum_{i<n} 1 = n$,\n\n$$\\sum_{i<n} \\big(\\varphi(i+1) - \\varphi(i) - 1\\big) \\;=\\; n' - n ,$$\n\na sum of $n$ nonnegative integers, one for each block, which vanishes exactly at\nthe blocks consisting of a single index. This identity is the whole content of\nthe quantitative bound in [[lem-refinement-inequalities]], and it is also why\n$n \\le n'$.\n\nFinally, the lengths inside a block sum to the length of the block:\n\n$$\\sum_{j = \\varphi(i)}^{\\varphi(i+1)-1} \\Delta'_j \\;=\\; t'_{\\varphi(i+1)} - t'_{\\varphi(i)} \\;=\\; t_{i+1} - t_i \\;=\\; \\Delta_i \\qquad (i < n),$$\n\nagain by telescoping, applied to the sequence $l \\mapsto t'_{\\varphi(i)+l}$ and\nread through the index-shift convention of [[def-finite-sum]].",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-partition-and-refinement",
      "source_section": "Definition",
      "quote": "**Standing hypothesis for this page.** Throughout, $\\mathbb{R}$ is the complete\nordered field ([[def-complete-ordered-field]], [[def-ordered-field]]),\n$\\mathbb{N}$ is the set of natural numbers and **contains $0$**\n([[def-natural-numbers]], [[def-nat-order]]), $\\iota : \\mathbb{N} \\to \\mathbb{R}$\nis the canonical natural ([[def-canonical-natural]]), and $a, b$ are reals with\n\n$$a \\;<\\; b .$$\n\nIntervals and their lengths are those of [[def-interval]]; finite sums are those\nof [[def-finite-sum]], indexed as $\\sum_{i<n}$ over $i \\in \\mathbb{N}$.\n\n### Partitions\n\nA **partition of $[a,b]$** is a pair $P = (n, t)$ consisting of a natural number\n$n \\ge 1$ and a sequence $t : \\mathbb{N} \\to \\mathbb{R}$ ([[def-sequence]]) with\n\n$$t_0 = a, \\qquad t_i < t_{i+1} \\ \\text{ for every } i < n, \\qquad t_k = b \\ \\text{ for every } k \\ge n .$$\n\nThe tail convention on the third clause is bookkeeping only: it makes $t$ a\ngenuine sequence, so that the finite-sum laws of [[lem-finite-sum-laws]] apply to\nit verbatim, and it costs nothing because no index above $n$ is ever read. The\nfirst two clauses say exactly that\n\n$$a \\;=\\; t_0 \\;<\\; t_1 \\;<\\; \\dots \\;<\\; t_n \\;=\\; b ,$$\n\nthe last equality because $t_n = b$ by the third clause. In particular\n$i \\mapsto t_i$ is strictly increasing, hence injective, on\n$\\{\\, i \\in \\mathbb{N} : i \\le n \\,\\}$ ([[def-injection-surjection-bijection]]),\nand $a \\le t_i \\le b$ for every $i \\le n$.\n\nThe **point set** of $P$ is the finite set\n\n$$\\operatorname{pts}(P) \\;:=\\; \\{\\, t_i \\ : \\ i \\le n \\,\\} \\;\\subseteq\\; [a,b], \\qquad a, b \\in \\operatorname{pts}(P) .$$\n\nThe **subintervals** of $P$ are\n\n$$I_i \\;:=\\; [\\,t_i,\\ t_{i+1}\\,] \\qquad (i < n),$$\n\nand their **lengths** are $\\Delta_i := t_{i+1} - t_i$. Each $\\Delta_i > 0$, so\neach $I_i$ is a nondegenerate closed bounded interval ([[def-interval]]). There\nare $n$ of them and they are indexed from $i = 0$, not from $i = 1$: the first\nsubinterval is $[t_0, t_1] = [a, t_1]$.\n\n**The lengths sum to $b - a$.** By the telescoping law, clause 5 of\n[[lem-finite-sum-laws]],\n\n$$\\sum_{i<n} \\Delta_i \\;=\\; \\sum_{i<n} (t_{i+1} - t_i) \\;=\\; t_n - t_0 \\;=\\; b - a .$$\n\n**The mesh.** The set $\\{\\, \\Delta_i : i < n \\,\\}$ is a nonempty finite set of\nreals, nonempty because $n \\ge 1$, so it has a maximum\n([[lem-finite-set-has-max]], [[def-max-min]]). The **mesh** of $P$ is\n\n$$\\|P\\| \\;:=\\; \\max\\{\\, \\Delta_i \\ : \\ i < n \\,\\} \\;>\\; 0 ,$$\n\nand $\\Delta_i \\le \\|P\\|$ for every $i < n$.\n\n**The uniform partition.** For a natural $N \\ge 1$, the **uniform partition of\n$[a,b]$ into $N$ parts** is $U_N := (N, t)$ with\n\n$$t_i \\;:=\\; a + \\iota(i)\\,\\frac{b-a}{\\iota(N)} \\quad (i \\le N), \\qquad t_k := b \\quad (k \\ge N).$$\n\nThis is a partition: $t_0 = a$; $t_N = a + (b-a) = b$; and $t_{i+1} - t_i =\n(b-a)/\\iota(N) > 0$ for $i < N$, because $\\iota(N) > 0$ and $\\iota(i+1) =\n\\iota(i) + 1$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]). Its\nsubinterval lengths are all equal to $(b-a)/\\iota(N)$, so\n\n$$\\|U_N\\| \\;=\\; \\frac{b-a}{\\iota(N)} .$$\n\n### A partition is determined by its point set\n\n**Claim.** If $P = (n,t)$ and $P' = (n', t')$ are partitions of $[a,b]$ with\n$\\operatorname{pts}(P) = \\operatorname{pts}(P')$, then $n = n'$ and $t_i = t'_i$\nfor every $i \\le n$.\n\n*Proof.* First, $t_i = t'_i$ for every $i \\le \\min\\{n,n'\\}$, by induction on $i$\n([[thm-induction-principle]]). For $i = 0$ both equal $a$. Suppose $t_j = t'_j$\nfor all $j \\le i$ and $i + 1 \\le \\min\\{n,n'\\}$. The set\n$S := \\{\\, x \\in \\operatorname{pts}(P) : x > t_i \\,\\}$ has $t_{i+1}$ as its least\nelement: $t_{i+1} \\in S$, and any $x \\in S$ is $t_j$ for some $j \\le n$ with\n$t_j > t_i$, which forces $j > i$ because $t$ is increasing on indices $\\le n$,\nhence $j \\ge i+1$ and $x = t_j \\ge t_{i+1}$. The same argument in $P'$ makes\n$t'_{i+1}$ the least element of\n$\\{\\, x \\in \\operatorname{pts}(P') : x > t'_i \\,\\}$, which is the same set $S$,\nsince the point sets agree and $t'_i = t_i$. A set has at most one least element\n([[def-max-min]]), so $t_{i+1} = t'_{i+1}$.\n\nSecond, $n = n'$. If $n < n'$ then $t'_n = t_n = b$ by the previous paragraph,\nwhile $t'_n < t'_{n'} = b$ because $t'$ is increasing on indices $\\le n'$ and\n$n < n'$; that is impossible. Exchanging the roles of $P$ and $P'$ rules out\n$n' < n$. $\\square$\n\nSo the map $P \\mapsto \\operatorname{pts}(P)$ is injective, and a partition may be\nnamed by its point set whenever one is exhibited.\n\n### Inserting a point\n\nLet $P = (n,t)$ be a partition of $[a,b]$ and let $c \\in [a,b]$. Define a\npartition $P + c$ of $[a,b]$ as follows.\n\n- If $c \\in \\operatorname{pts}(P)$, put $P + c := P$.\n- Otherwise $c \\ne a$ and $c \\ne b$, so $a < c < b$. The set\n  $T := \\{\\, t_i : i \\le n \\text{ and } t_i < c \\,\\}$ is a nonempty finite set of\n  reals, nonempty because $t_0 = a < c$, so it has a maximum\n  ([[lem-finite-set-has-max]]); let $i_0 \\le n$ be the unique index with\n  $t_{i_0} = \\max T$, unique because $t$ is injective on indices $\\le n$. Then\n  $i_0 < n$, since $t_n = b > c$ puts $t_n \\notin T$; and\n  $$t_{i_0} \\;<\\; c \\;<\\; t_{i_0+1},$$\n  the right inequality because $t_{i_0+1} \\ne c$ (as $c \\notin \\operatorname{pts}(P)$)\n  and $t_{i_0+1} < c$ would put $t_{i_0+1} \\in T$ with $t_{i_0+1} > t_{i_0} = \\max T$.\n  Put $P + c := (n+1, s)$ with\n  $$s_i := t_i \\ (i \\le i_0), \\qquad s_{i_0+1} := c, \\qquad s_i := t_{i-1} \\ (i_0 + 2 \\le i \\le n+1), \\qquad s_k := b \\ (k \\ge n+1).$$\n\nIn both cases $P + c$ is a partition of $[a,b]$ and\n\n$$\\operatorname{pts}(P + c) \\;=\\; \\operatorname{pts}(P) \\cup \\{c\\}, \\qquad \\|P+c\\| \\;\\le\\; \\|P\\| .$$\n\nThe displayed identity is immediate from the two cases. For the mesh: in the\nfirst case nothing changes; in the second the list of subinterval lengths of\n$P + c$ is that of $P$ with $\\Delta_{i_0}$ replaced by the two numbers\n$c - t_{i_0}$ and $t_{i_0+1} - c$, each of which is smaller than\n$\\Delta_{i_0} = (c - t_{i_0}) + (t_{i_0+1} - c)$ because the other is positive.\nSo every length of $P + c$ is at most a length of $P$, and the maximum cannot\nincrease. Finally the index count grows by exactly $1$ in the second case and\nnot at all in the first.\n\n### Refinement and the common refinement\n\n$P'$ **refines** $P$, and is a **refinement** of $P$, when\n\n$$\\operatorname{pts}(P) \\;\\subseteq\\; \\operatorname{pts}(P') .$$\n\nLet $P = (n,t)$ and $Q = (m,s)$ be partitions of $[a,b]$. Applying the recursion\ntheorem ([[thm-recursion]]) to the set $\\mathbb{N} \\times \\mathcal{P}_{[a,b]}$,\nwhere $\\mathcal{P}_{[a,b]}$ is the set of partitions of $[a,b]$, with starting\nelement $(0, P)$ and the map $(j, R) \\mapsto (j+1,\\ R + s_j)$ — legitimate\nbecause $s_j \\in [a,b]$ for every $j \\in \\mathbb{N}$ — gives a unique family\n$(R_j)_{j \\in \\mathbb{N}}$ of partitions with $R_0 = P$ and $R_{j+1} = R_j + s_j$.\nThe **common refinement** of $P$ and $Q$ is\n\n$$P \\vee Q \\;:=\\; R_{m+1} .$$\n\n**Its point set is the union.** By induction on $j$ ([[thm-induction-principle]]),\n$\\operatorname{pts}(R_j) = \\operatorname{pts}(P) \\cup \\{\\, s_l : l < j \\,\\}$;\ntaking $j = m+1$ gives\n\n$$\\operatorname{pts}(P \\vee Q) \\;=\\; \\operatorname{pts}(P) \\cup \\operatorname{pts}(Q).$$\n\nHence $P \\vee Q$ refines both $P$ and $Q$; by the uniqueness claim above it is\nthe **only** partition with that point set, so $P \\vee Q = Q \\vee P$, and\n\n$$P' \\text{ refines } P \\quad \\Longrightarrow \\quad P \\vee P' = P' ,$$\n\nsince then $\\operatorname{pts}(P) \\cup \\operatorname{pts}(P') =\n\\operatorname{pts}(P')$.\n\n**Two size bounds, both used later.** Writing $n_R$ for the first component of a\npartition $R$:\n\n$$\\|P \\vee Q\\| \\;\\le\\; \\|P\\|, \\qquad n_{P \\vee Q} \\;\\le\\; n_P + n_Q - 1 .$$\n\nThe first is the mesh bound above applied $m+1$ times. For the second, each\ninsertion raises the index count by at most $1$, and the two insertions of\n$s_0 = a$ and $s_m = b$ raise it by $0$, since $a$ and $b$ already lie in\n$\\operatorname{pts}(P)$ and hence in $\\operatorname{pts}(R_j)$ for every $j$; so\nat most $m - 1$ of the $m+1$ insertions increase it.\n\n### The index map of a refinement\n\nLet $P' = (n',t')$ refine $P = (n,t)$. For each $i \\le n$ the point $t_i$ lies in\n$\\operatorname{pts}(P')$, so there is exactly one $\\varphi(i) \\le n'$ with\n$t'_{\\varphi(i)} = t_i$, uniqueness because $t'$ is injective on indices $\\le n'$.\nThe resulting map $\\varphi$ satisfies\n\n$$\\varphi(0) = 0, \\qquad \\varphi(n) = n', \\qquad \\varphi(i) < \\varphi(i+1) \\ \\ (i < n),$$\n\nthe first two because $t'_0 = a = t_0$ and $t'_{n'} = b = t_n$ together with\ninjectivity, and the third because $t_i < t_{i+1}$ and $t'$ is increasing on\nindices $\\le n'$. In particular $n \\le n'$. Moreover, for $i < n$ and\n$\\varphi(i) \\le j < \\varphi(i+1)$,\n\n$$I'_j \\;=\\; [\\,t'_j,\\ t'_{j+1}\\,] \\;\\subseteq\\; [\\,t_i,\\ t_{i+1}\\,] \\;=\\; I_i ,$$\n\nbecause $t_i = t'_{\\varphi(i)} \\le t'_j$ and $t'_{j+1} \\le t'_{\\varphi(i+1)} = t_{i+1}$.\n\n**The blocks are counted by telescoping.** By clause 5 of\n[[lem-finite-sum-laws]],\n$\\sum_{i<n}\\big(\\varphi(i+1) - \\varphi(i)\\big) = \\varphi(n) - \\varphi(0) = n'$,\nso, subtracting $\\sum_{i<n} 1 = n$,\n\n$$\\sum_{i<n} \\big(\\varphi(i+1) - \\varphi(i) - 1\\big) \\;=\\; n' - n ,$$\n\na sum of $n$ nonnegative integers, one for each block, which vanishes exactly at\nthe blocks consisting of a single index. This identity is the whole content of\nthe quantitative bound in [[lem-refinement-inequalities]], and it is also why\n$n \\le n'$.\n\nFinally, the lengths inside a block sum to the length of the block:\n\n$$\\sum_{j = \\varphi(i)}^{\\varphi(i+1)-1} \\Delta'_j \\;=\\; t'_{\\varphi(i+1)} - t'_{\\varphi(i)} \\;=\\; t_{i+1} - t_i \\;=\\; \\Delta_i \\qquad (i < n),$$\n\nagain by telescoping, applied to the sequence $l \\mapsto t'_{\\varphi(i)+l}$ and\nread through the index-shift convention of [[def-finite-sum]].",
      "uses": [
        "7.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-darboux-sums",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be **bounded**\n([[def-bounded-set]]), so that there is a real $M \\ge 0$ with $|f(x)| \\le M$ for\nevery $x \\in [a,b]$, and let $P = (n,t)$ be a partition of $[a,b]$ with\nsubintervals $I_i = [t_i, t_{i+1}]$ and lengths $\\Delta_i = t_{i+1} - t_i$ for\n$i < n$ ([[def-partition-and-refinement]]).\n\n### The two extreme values on a subinterval\n\nFor $i < n$ put\n\n$$m_i \\;:=\\; \\inf f[I_i], \\qquad M_i \\;:=\\; \\sup f[I_i], \\qquad f[I_i] \\;=\\; \\{\\, f(x) : x \\in I_i \\,\\} .$$\n\n**Both exist.** The set $f[I_i]$ is nonempty, because $t_i < t_{i+1}$ makes $I_i$\nnonempty ([[def-interval]]), and it is bounded, because $|f(x)| \\le M$ for every\n$x$ ([[def-bounded-set]]). A nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]); each is unique, so the notations\n$\\inf f[I_i]$ and $\\sup f[I_i]$ name single real numbers ([[lem-sup-unique]]).\n\n**They bracket the values, and each other.** For $x \\in I_i$,\n\n$$-M \\;\\le\\; m_i \\;\\le\\; f(x) \\;\\le\\; M_i \\;\\le\\; M ,$$\n\nthe outer inequalities because $-M$ is a lower bound and $M$ an upper bound of\n$f[I_i]$, and the middle ones by the definitions of infimum and supremum. In\nparticular $m_i \\le M_i$ and $M_i - m_i \\le 2M$.\n\nThe dependence of $m_i$ and $M_i$ on $f$ and on $P$ is suppressed in the\nnotation, as is customary; where two partitions are in play the sums below carry\nthe partition and the extreme values are written out.\n\n### The two Darboux sums\n\n$$L(f,P) \\;:=\\; \\sum_{i<n} m_i \\,\\Delta_i, \\qquad U(f,P) \\;:=\\; \\sum_{i<n} M_i \\,\\Delta_i ,$$\n\nthe finite sums of [[def-finite-sum]], indexed by $i \\in \\mathbb{N}$ with\n$i < n$. Both are real numbers, being finite sums of reals, and\n\n$$L(f,P) \\;\\le\\; U(f,P) ,$$\n\nby monotonicity of finite sums, clause 4 of [[lem-finite-sum-laws]], since\n$m_i \\Delta_i \\le M_i \\Delta_i$ for every $i < n$: multiplying $m_i \\le M_i$ by\n$\\Delta_i > 0$ preserves the inequality ([[def-ordered-field]]).\n\n### The gap on a subinterval is the oscillation there\n\nFor every $i < n$,\n\n$$M_i - m_i \\;=\\; \\omega_f(I_i) \\;=\\; \\sup\\{\\, |f(x) - f(y)| \\ : \\ x, y \\in I_i \\,\\} ,$$\n\nthe oscillation of $f$ on the set $I_i$ ([[def-oscillation]]). The supremum is a\nreal number here rather than an extended one, because $f$ is bounded\n([[def-oscillation]], [[def-extended-reals]]). The identity is proved in two\ninequalities.\n\n*The oscillation is at most the gap.* For $x, y \\in I_i$ both $f(x)$ and $f(y)$\nlie in $[m_i, M_i]$, so $f(x) - f(y) \\le M_i - m_i$ and\n$f(y) - f(x) \\le M_i - m_i$, whence $|f(x) - f(y)| \\le M_i - m_i$\n([[lem-of-abs-value]]). So $M_i - m_i$ is an upper bound of the set whose\nsupremum is $\\omega_f(I_i)$.\n\n*The gap is at most the oscillation.* Let $\\varepsilon > 0$ be real. By the\n$\\varepsilon$-characterisations of the supremum and the infimum\n([[lem-sup-epsilon]], [[lem-inf-epsilon]]) there are $x, y \\in I_i$ with\n$f(x) > M_i - \\varepsilon/2$ and $f(y) < m_i + \\varepsilon/2$; then\n\n$$|f(x) - f(y)| \\;\\ge\\; f(x) - f(y) \\;>\\; (M_i - m_i) - \\varepsilon ,$$\n\nso $\\omega_f(I_i) > (M_i - m_i) - \\varepsilon$. As $\\varepsilon > 0$ was\narbitrary, $\\omega_f(I_i) \\ge M_i - m_i$: otherwise\n$\\varepsilon := (M_i - m_i) - \\omega_f(I_i)$ would be positive and give\n$\\omega_f(I_i) > \\omega_f(I_i)$.\n\nThis identity is what connects the Darboux machinery to the pointwise\noscillation of [[def-oscillation]], and it is the hinge of\n[[thm-lebesgue-criterion]].",
      "uses": [
        "2.1",
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "2.1",
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-sup-monotone",
      "source_section": "Statement",
      "quote": "Let $S$ and $T$ be subsets of $\\mathbb{R}$ with $\\emptyset \\ne S \\subseteq T$,\nand suppose $T$ is bounded above. Then $S$ is nonempty and bounded above, both\n$\\sup S$ and $\\sup T$ exist, and\n\n$$\\sup S \\le \\sup T.$$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:\n\n- $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for\n  every $s \\in S$;\n- $\\ell' \\le \\ell$ for every lower bound $\\ell'$ of $S$.\n\nWritten out in one line:\n\n$$\\ell \\text{ is an infimum of } S \\iff \\big[(\\forall s \\in S)\\, \\ell \\le s\\big] \\text{ and } \\big[(\\forall \\ell' \\in \\mathbb{R})\\, \\big((\\forall s \\in S)\\, \\ell' \\le s\\big) \\Rightarrow \\ell' \\le \\ell\\big].$$\n\nAn infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write\n$\\inf S$ for it.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-infimum-property",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below. Then $S$ has a\ngreatest lower bound in $\\mathbb{R}$ ([[def-infimum]]), and it is given by\n\n$$\\inf S = -\\sup(-S), \\qquad \\text{where } -S = \\{-s : s \\in S\\}.$$\n\nIn particular the complete ordered field $\\mathbb{R}$ has the\ngreatest-lower-bound property, which is therefore not an extra axiom: it is a\nconsequence of the least-upper-bound property.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "1.2",
        "3.1",
        "4.1",
        "5.1",
        "5.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "1.2",
        "3.1",
        "4.1",
        "5.1",
        "5.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "3.1",
        "4.1",
        "5.1",
        "5.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "3.1",
        "4.1",
        "5.1",
        "5.2"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "3.1",
        "4.1",
        "5.1",
        "5.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "3.1",
        "4.1",
        "5.1",
        "5.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "3.1",
        "4.1",
        "5.1",
        "5.2"
      ]
    },
    {
      "fact": "L8",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "4.1",
        "5.1",
        "5.2",
        "6.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "4.1",
        "5.1",
        "5.2",
        "6.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "4.1",
        "5.1",
        "5.2",
        "6.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "lem-refinement-inequalities-step-1-1",
      "claim": "Fix the index map $\\varphi$ of [L1] and, for $k \\le n$, put $A_k := \\sum_{j<\\varphi(k)} M'_j\\Delta'_j$, $B_k := \\sum_{i<k} M_i\\Delta_i$, $A^{-}_k := \\sum_{j<\\varphi(k)} m'_j\\Delta'_j$ and $B^{-}_k := \\sum_{i<k} m_i\\Delta_i$; let $Q(k)$ be the conjunction $B_k - 2M\\|P\\|(\\varphi(k)-k) \\le A_k \\le B_k$ and $B^{-}_k \\le A^{-}_k \\le B^{-}_k + 2M\\|P\\|(\\varphi(k)-k)$. The proof is an induction on $k$ using [L6]. [given, L1, L6, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L6"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-1-2",
      "claim": "**Base, $k = 0$.** All four sums are empty, hence $0$, and $\\varphi(0) - 0 = 0$, so $Q(0)$ reads $0 \\le 0 \\le 0$ twice. [base, L1, L5]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L5"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-1-3",
      "claim": "**Induction hypothesis.** Fix $k < n$ and assume $Q(k)$. [ih, given]",
      "step": "1.3",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-2-1",
      "claim": "Put $\\beta := \\sum_{j=\\varphi(k)}^{\\varphi(k+1)-1} M'_j\\Delta'_j$ and $\\gamma := \\sum_{j=\\varphi(k)}^{\\varphi(k+1)-1} m'_j\\Delta'_j$. For $\\varphi(k) \\le j < \\varphi(k+1)$ one has $I'_j \\subseteq I_k$, hence $f[I'_j] \\subseteq f[I_k]$, hence $m_k \\le m'_j \\le M'_j \\le M_k$ by [L4] and [L3]; also $|M'_j| \\le M$ and $|m'_j| \\le M$ by [L3]. [step 1.1, L1, L3, L4]",
      "step": "2.1",
      "inputs": [
        "L4",
        "L3",
        "1.1",
        "L1"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-3-1",
      "claim": "Since $\\Delta'_j > 0$ and the lengths in the block sum to $\\Delta_k$ by [L1], monotonicity and scaling of finite sums ([L5]) give $m_k\\Delta_k \\le \\gamma \\le \\beta \\le M_k\\Delta_k$ and $-M\\Delta_k \\le \\gamma \\le \\beta \\le M\\Delta_k$. [step 2.1, L1, L5, L7]",
      "step": "3.1",
      "inputs": [
        "L1",
        "L5",
        "2.1",
        "L7"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-4-1",
      "claim": "Both $M_k\\Delta_k - \\beta$ and $\\gamma - m_k\\Delta_k$ lie in $[\\,0,\\ 2M\\|P\\|(\\varphi(k+1)-\\varphi(k)-1)\\,]$. Nonnegativity is step 3.1. If $\\varphi(k+1) = \\varphi(k)+1$ the block is the single index $j = \\varphi(k)$, and then $I'_j = I_k$ by [L1], so $M'_j = M_k$, $m'_j = m_k$, $\\Delta'_j = \\Delta_k$ and both quantities are $0$. Otherwise $\\varphi(k+1) - \\varphi(k) - 1 \\ge 1$, and by step 3.1 and [L3] each quantity is at most $M\\Delta_k + M\\Delta_k = 2M\\Delta_k \\le 2M\\|P\\|$, hence at most $2M\\|P\\|(\\varphi(k+1)-\\varphi(k)-1)$. [step 2.1, step 3.1, L1, L3, L5, L7, L8]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L1",
        "L3",
        "2.1",
        "L5",
        "L7",
        "L8"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-5-1",
      "claim": "**The upper half of $Q(k+1)$.** By the splitting law [L5], $A_{k+1} = A_k + \\beta$ and $B_{k+1} = B_k + M_k\\Delta_k$. From step 1.3 and step 3.1, $A_{k+1} \\le B_k + M_k\\Delta_k = B_{k+1}$; and from step 1.3 and step 4.1, $A_{k+1} \\ge B_k - 2M\\|P\\|(\\varphi(k)-k) + M_k\\Delta_k - 2M\\|P\\|(\\varphi(k+1)-\\varphi(k)-1) = B_{k+1} - 2M\\|P\\|(\\varphi(k+1)-(k+1))$. [step 1.3, step 3.1, step 4.1, L5, L7, L8]",
      "step": "5.1",
      "inputs": [
        "L5",
        "1.3",
        "3.1",
        "4.1",
        "L7",
        "L8"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-5-2",
      "claim": "**The lower half of $Q(k+1)$.** Likewise $A^{-}_{k+1} = A^{-}_k + \\gamma$ and $B^{-}_{k+1} = B^{-}_k + m_k\\Delta_k$, so step 1.3 with step 3.1 gives $A^{-}_{k+1} \\ge B^{-}_{k+1}$, and step 1.3 with step 4.1 gives $A^{-}_{k+1} \\le B^{-}_k + 2M\\|P\\|(\\varphi(k)-k) + m_k\\Delta_k + 2M\\|P\\|(\\varphi(k+1)-\\varphi(k)-1) = B^{-}_{k+1} + 2M\\|P\\|(\\varphi(k+1)-(k+1))$. So $Q(k+1)$ holds. [step 1.3, step 3.1, step 4.1, L5, L7, L8]",
      "step": "5.2",
      "inputs": [
        "1.3",
        "3.1",
        "4.1",
        "L5",
        "L7",
        "L8"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-6-1",
      "claim": "By [L6] with steps 1.2, 1.3, 5.1 and 5.2, $Q(k)$ holds for every $k \\le n$. Taking $k = n$ and using $\\varphi(n) = n'$ from [L1]: $A_n = U(f,P')$, $B_n = U(f,P)$, $A^{-}_n = L(f,P')$ and $B^{-}_n = L(f,P)$, so $U(f,P) - 2M\\|P\\|(n'-n) \\le U(f,P') \\le U(f,P)$ and $L(f,P) \\le L(f,P') \\le L(f,P) + 2M\\|P\\|(n'-n)$. With $L(f,P') \\le U(f,P')$ from [L3] this is claim 1, and it is claim 3. [step 1.2, step 1.3, step 5.1, step 5.2, L1, L3, L6, L8]",
      "step": "6.1",
      "inputs": [
        "L6",
        "1.2",
        "1.3",
        "5.1",
        "5.2",
        "L1",
        "L3",
        "L8"
      ]
    },
    {
      "id": "lem-refinement-inequalities-step-7-1",
      "claim": "**Claim 2.** Let $P$ and $Q$ be arbitrary partitions of $[a,b]$ and let $R := P \\vee Q$, which refines both by [L2]. Applying step 6.1 to the pair $(P,R)$ and to the pair $(Q,R)$ gives $L(f,P) \\le L(f,R) \\le U(f,R) \\le U(f,Q)$, the middle inequality by [L3]. All three claims are now established, the first and third in step 6.1 from the completed induction and the second here. [step 6.1, L2, L3, L6, discharge-induction] ∎",
      "step": "7.1",
      "inputs": [
        "L2",
        "6.1",
        "L3",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 1.2 explicitly treats or excludes the empty/vacuous case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.2 explicitly includes the zero-valued, vanishing, or zero-index case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 explicitly includes the unit, singleton, or first-index case."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement explicitly fixes a nondegenerate interval or assumes strict endpoint order."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 7.1 explicitly keeps endpoints/interior points within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 supplies each displayed witness by formula or by the cited existence premise before using it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-partition-and-refinement",
    "declared_target": "def-partition-and-refinement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-darboux-sums",
    "declared_target": "def-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "lem-sup-monotone",
    "declared_target": "lem-sup-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-infimum",
    "declared_target": "def-infimum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "thm-infimum-property",
    "declared_target": "thm-infimum-property",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-refinement-inequalities",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (19)

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
````

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-darboux-integral`

````markdown
---
id: def-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals of a bounded $f$ on $[a,b]$ as $\\sup_P L(f,P)$ and $\\inf_P U(f,P)$, Darboux integrability as their equality, and the notation $\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-sums, lem-refinement-inequalities, def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-interval]
justified_by: []
aliases: [def-riemann-integrable, def-lower-and-upper-integral]
landmark: true
short: "Darboux integral $\\int_a^b f$"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Write $\mathcal{P}$ for the set of all partitions of
$[a,b]$ ([[def-partition-and-refinement]]) and put

$$\mathcal{L} \;:=\; \{\, L(f,P) \ : \ P \in \mathcal{P} \,\}, \qquad \mathcal{U} \;:=\; \{\, U(f,P) \ : \ P \in \mathcal{P} \,\}$$

for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).

### Both extrema exist

**$\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$
for $k \ge 1$ is a partition of $[a,b]$, since $a < b$. So $\mathcal{L}$ and
$\mathcal{U}$ are nonempty.

**$\mathcal{L}$ is bounded above and $\mathcal{U}$ is bounded below.** Fix any
$Q \in \mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],
$L(f,P) \le U(f,Q)$ for every $P \in \mathcal{P}$, so $U(f,Q)$ is an upper bound
of $\mathcal{L}$; and $L(f,Q) \le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower
bound of $\mathcal{U}$.

Hence a nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).
The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real
numbers

$$\underline{\int_a^b} f \;:=\; \sup \mathcal{L} \;=\; \sup_{P} L(f,P), \qquad \overline{\int_a^b} f \;:=\; \inf \mathcal{U} \;=\; \inf_{P} U(f,P) .$$

### The lower integral never exceeds the upper one

$$\underline{\int_a^b} f \;\le\; \overline{\int_a^b} f .$$

Indeed, for each fixed $Q \in \mathcal{P}$ the number $U(f,Q)$ is an upper bound
of $\mathcal{L}$, so the least upper bound satisfies
$\underline{\int_a^b} f \le U(f,Q)$. As $Q$ was arbitrary, $\underline{\int_a^b}f$
is a lower bound of $\mathcal{U}$, and the greatest lower bound satisfies
$\underline{\int_a^b} f \le \overline{\int_a^b} f$ ([[def-infimum]]).

Moreover, for **every** partition $P$,

$$L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) ,$$

the outer inequalities because a member of a set is at most its supremum and at
least its infimum.

### Integrability

$f$ is **Darboux integrable on $[a,b]$**, and on this page simply
**integrable**, when

$$\underline{\int_a^b} f \;=\; \overline{\int_a^b} f ,$$

and then the common value is written

$$\int_a^b f \qquad \text{or} \qquad \int_a^b f(x)\,\mathrm{d}x ,$$

the **integral of $f$ over $[a,b]$**. It is a single well-determined real
number, being the common value of two numbers each of which is unique
([[lem-sup-unique]]). Without the displayed equality the symbol $\int_a^b f$ is
not defined and is never written.

**The inequality above is the whole difficulty.** By the previous paragraph
integrability is *never* a question of one integral exceeding the other, only of
the gap $\overline{\int_a^b} f - \underline{\int_a^b} f \ge 0$ being $0$; and by
[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be
found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled
completely, in terms of the discontinuities of $f$, by
[[thm-lebesgue-criterion]].

**"Riemann integrable" means the same thing here.** The definition above is
Darboux's. Riemann's own definition, in terms of tagged partitions of small
mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same
class of functions with the same integral by [[thm-darboux-equals-riemann]].
Until that theorem is proved the two phrases are kept apart; after it they are
used interchangeably, as they are throughout the literature.

## Remarks

- **The supremum is over all partitions, and nothing is selected.** Both
  $\mathcal{L}$ and $\mathcal{U}$ are sets determined by $f$ and $[a,b]$ alone,
  and $\sup$ and $\inf$ are canonical, so no choice principle is involved in
  forming either integral. Where a choice does enter on this page is recorded in
  [[rem-riemann-integral-choice-ledger]].

- **Why the lower integral is a supremum and not an infimum.** Refining a
  partition can only increase a lower sum and decrease an upper sum
  ([[lem-refinement-inequalities]]), so the lower sums push up towards the
  integral and the upper sums push down towards it. Taking $\inf \mathcal{L}$
  would return the sum over the coarsest partition and would carry no
  information about $f$ beyond its infimum on $[a,b]$.

- **A bounded $f$ always has both integrals; only their equality can fail.** The
  Dirichlet function on $[0,1]$ has lower integral $0$ and upper integral $1$
  ([[fs-bounded-implies-riemann-integrable]]), which is the standard witness that
  the definition above is not vacuous in either direction.
````

### `def-darboux-sums`

````markdown
---
id: def-darboux-sums
kind: definition
title: "For bounded $f$ on $[a,b]$ and a partition $P$: the infimum $m_i$ and supremum $M_i$ of $f$ on the $i$-th subinterval, and the lower and upper Darboux sums $L(f,P) = \\sum_i m_i \\Delta_i$ and $U(f,P) = \\sum_i M_i \\Delta_i$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, def-finite-sum, lem-finite-sum-laws, def-interval, lem-sup-unique, lem-sup-epsilon, lem-inf-epsilon, def-oscillation, def-extended-reals, lem-of-abs-value]
justified_by: []
aliases: [def-lower-and-upper-darboux-sum]
landmark: true
short: "Darboux sums $L(f,P)$, $U(f,P)$"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be **bounded**
([[def-bounded-set]]), so that there is a real $M \ge 0$ with $|f(x)| \le M$ for
every $x \in [a,b]$, and let $P = (n,t)$ be a partition of $[a,b]$ with
subintervals $I_i = [t_i, t_{i+1}]$ and lengths $\Delta_i = t_{i+1} - t_i$ for
$i < n$ ([[def-partition-and-refinement]]).

### The two extreme values on a subinterval

For $i < n$ put

$$m_i \;:=\; \inf f[I_i], \qquad M_i \;:=\; \sup f[I_i], \qquad f[I_i] \;=\; \{\, f(x) : x \in I_i \,\} .$$

**Both exist.** The set $f[I_i]$ is nonempty, because $t_i < t_{i+1}$ makes $I_i$
nonempty ([[def-interval]]), and it is bounded, because $|f(x)| \le M$ for every
$x$ ([[def-bounded-set]]). A nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]); each is unique, so the notations
$\inf f[I_i]$ and $\sup f[I_i]$ name single real numbers ([[lem-sup-unique]]).

**They bracket the values, and each other.** For $x \in I_i$,

$$-M \;\le\; m_i \;\le\; f(x) \;\le\; M_i \;\le\; M ,$$

the outer inequalities because $-M$ is a lower bound and $M$ an upper bound of
$f[I_i]$, and the middle ones by the definitions of infimum and supremum. In
particular $m_i \le M_i$ and $M_i - m_i \le 2M$.

The dependence of $m_i$ and $M_i$ on $f$ and on $P$ is suppressed in the
notation, as is customary; where two partitions are in play the sums below carry
the partition and the extreme values are written out.

### The two Darboux sums

$$L(f,P) \;:=\; \sum_{i<n} m_i \,\Delta_i, \qquad U(f,P) \;:=\; \sum_{i<n} M_i \,\Delta_i ,$$

the finite sums of [[def-finite-sum]], indexed by $i \in \mathbb{N}$ with
$i < n$. Both are real numbers, being finite sums of reals, and

$$L(f,P) \;\le\; U(f,P) ,$$

by monotonicity of finite sums, clause 4 of [[lem-finite-sum-laws]], since
$m_i \Delta_i \le M_i \Delta_i$ for every $i < n$: multiplying $m_i \le M_i$ by
$\Delta_i > 0$ preserves the inequality ([[def-ordered-field]]).

### The gap on a subinterval is the oscillation there

For every $i < n$,

$$M_i - m_i \;=\; \omega_f(I_i) \;=\; \sup\{\, |f(x) - f(y)| \ : \ x, y \in I_i \,\} ,$$

the oscillation of $f$ on the set $I_i$ ([[def-oscillation]]). The supremum is a
real number here rather than an extended one, because $f$ is bounded
([[def-oscillation]], [[def-extended-reals]]). The identity is proved in two
inequalities.

*The oscillation is at most the gap.* For $x, y \in I_i$ both $f(x)$ and $f(y)$
lie in $[m_i, M_i]$, so $f(x) - f(y) \le M_i - m_i$ and
$f(y) - f(x) \le M_i - m_i$, whence $|f(x) - f(y)| \le M_i - m_i$
([[lem-of-abs-value]]). So $M_i - m_i$ is an upper bound of the set whose
supremum is $\omega_f(I_i)$.

*The gap is at most the oscillation.* Let $\varepsilon > 0$ be real. By the
$\varepsilon$-characterisations of the supremum and the infimum
([[lem-sup-epsilon]], [[lem-inf-epsilon]]) there are $x, y \in I_i$ with
$f(x) > M_i - \varepsilon/2$ and $f(y) < m_i + \varepsilon/2$; then

$$|f(x) - f(y)| \;\ge\; f(x) - f(y) \;>\; (M_i - m_i) - \varepsilon ,$$

so $\omega_f(I_i) > (M_i - m_i) - \varepsilon$. As $\varepsilon > 0$ was
arbitrary, $\omega_f(I_i) \ge M_i - m_i$: otherwise
$\varepsilon := (M_i - m_i) - \omega_f(I_i)$ would be positive and give
$\omega_f(I_i) > \omega_f(I_i)$.

This identity is what connects the Darboux machinery to the pointwise
oscillation of [[def-oscillation]], and it is the hinge of
[[thm-lebesgue-criterion]].

## Remarks

- **Boundedness is a hypothesis of the definition, not of the theorems.** Without
  it $f[I_i]$ may fail to have a supremum in $\mathbb{R}$ and $U(f,P)$ is not
  defined at all. Every statement on this page that mentions $L$ or $U$ therefore
  carries "bounded $f$" in its hypotheses, and none of them is a restriction that
  could be lifted: an unbounded function has no Darboux sums to compare.

- **Why the infimum and the supremum, and not a value of $f$.** Replacing $m_i$
  by $f(\xi_i)$ for a point $\xi_i \in I_i$ gives the Riemann sums of
  [[def-tagged-partition-and-riemann-sum]], which depend on a choice of points
  and are not extremal. The Darboux sums are canonical functions of $f$ and $P$
  alone, which is what makes the supremum and infimum over all partitions in
  [[def-darboux-integral]] well posed without any selection.

- **The empty sum does not occur.** A partition has $n \ge 1$
  ([[def-partition-and-refinement]]), so $L(f,P)$ and $U(f,P)$ are sums of at
  least one term. The first term is $m_0 \Delta_0$, over the subinterval
  $[a, t_1]$; the indexing starts at $i = 0$ throughout this page.
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-infimum`

````markdown
---
id: def-infimum
kind: definition
title: "Greatest lower bound (infimum)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-set]
justified_by: [lem-sup-unique]
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

## Remarks

- This is the exact dual of the least upper bound (supremum) of
  [[def-complete-ordered-field]]: reverse every inequality and swap "least" for
  "greatest". The two notions are related by reflection through $0$
  ([[lem-reflection]]).
- Existence is deliberately *not* part of the definition. That every nonempty
  subset of $\mathbb{R}$ which is bounded below actually has an infimum is a
  theorem, [[thm-infimum-property]], derived from the least-upper-bound property;
  it is not an axiom and it is not free.
- As with a supremum, an infimum need not belong to $S$; when it does, it is the
  minimum of $S$ ([[def-max-min]]).
- The usable form of the definition in later arguments is the epsilon
  characterisation [[lem-inf-epsilon]]: $\ell = \inf S$ exactly when $\ell$ is a
  lower bound that cannot be raised by any positive amount without losing that
  property.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
````

### `def-partition-and-refinement`

````markdown
---
id: def-partition-and-refinement
kind: definition
title: "Partition of $[a,b]$ as a finite strictly increasing list $a = t_0 < t_1 < \\dots < t_n = b$, its subintervals and their lengths, its mesh, refinement, and the common refinement of two partitions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-finite-sum, lem-finite-sum-laws, def-max-min, lem-finite-set-has-max, def-natural-numbers, def-nat-order, def-complete-ordered-field, def-ordered-field, def-sequence, def-injection-surjection-bijection, thm-recursion, thm-induction-principle, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: [def-partition-of-an-interval, def-mesh-of-a-partition]
landmark: true
short: "partition, mesh, refinement"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Partition of an interval (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_an_interval"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

**Standing hypothesis for this page.** Throughout, $\mathbb{R}$ is the complete
ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]),
$\mathbb{N}$ is the set of natural numbers and **contains $0$**
([[def-natural-numbers]], [[def-nat-order]]), $\iota : \mathbb{N} \to \mathbb{R}$
is the canonical natural ([[def-canonical-natural]]), and $a, b$ are reals with

$$a \;<\; b .$$

Intervals and their lengths are those of [[def-interval]]; finite sums are those
of [[def-finite-sum]], indexed as $\sum_{i<n}$ over $i \in \mathbb{N}$.

### Partitions

A **partition of $[a,b]$** is a pair $P = (n, t)$ consisting of a natural number
$n \ge 1$ and a sequence $t : \mathbb{N} \to \mathbb{R}$ ([[def-sequence]]) with

$$t_0 = a, \qquad t_i < t_{i+1} \ \text{ for every } i < n, \qquad t_k = b \ \text{ for every } k \ge n .$$

The tail convention on the third clause is bookkeeping only: it makes $t$ a
genuine sequence, so that the finite-sum laws of [[lem-finite-sum-laws]] apply to
it verbatim, and it costs nothing because no index above $n$ is ever read. The
first two clauses say exactly that

$$a \;=\; t_0 \;<\; t_1 \;<\; \dots \;<\; t_n \;=\; b ,$$

the last equality because $t_n = b$ by the third clause. In particular
$i \mapsto t_i$ is strictly increasing, hence injective, on
$\{\, i \in \mathbb{N} : i \le n \,\}$ ([[def-injection-surjection-bijection]]),
and $a \le t_i \le b$ for every $i \le n$.

The **point set** of $P$ is the finite set

$$\operatorname{pts}(P) \;:=\; \{\, t_i \ : \ i \le n \,\} \;\subseteq\; [a,b], \qquad a, b \in \operatorname{pts}(P) .$$

The **subintervals** of $P$ are

$$I_i \;:=\; [\,t_i,\ t_{i+1}\,] \qquad (i < n),$$

and their **lengths** are $\Delta_i := t_{i+1} - t_i$. Each $\Delta_i > 0$, so
each $I_i$ is a nondegenerate closed bounded interval ([[def-interval]]). There
are $n$ of them and they are indexed from $i = 0$, not from $i = 1$: the first
subinterval is $[t_0, t_1] = [a, t_1]$.

**The lengths sum to $b - a$.** By the telescoping law, clause 5 of
[[lem-finite-sum-laws]],

$$\sum_{i<n} \Delta_i \;=\; \sum_{i<n} (t_{i+1} - t_i) \;=\; t_n - t_0 \;=\; b - a .$$

**The mesh.** The set $\{\, \Delta_i : i < n \,\}$ is a nonempty finite set of
reals, nonempty because $n \ge 1$, so it has a maximum
([[lem-finite-set-has-max]], [[def-max-min]]). The **mesh** of $P$ is

$$\|P\| \;:=\; \max\{\, \Delta_i \ : \ i < n \,\} \;>\; 0 ,$$

and $\Delta_i \le \|P\|$ for every $i < n$.

**The uniform partition.** For a natural $N \ge 1$, the **uniform partition of
$[a,b]$ into $N$ parts** is $U_N := (N, t)$ with

$$t_i \;:=\; a + \iota(i)\,\frac{b-a}{\iota(N)} \quad (i \le N), \qquad t_k := b \quad (k \ge N).$$

This is a partition: $t_0 = a$; $t_N = a + (b-a) = b$; and $t_{i+1} - t_i =
(b-a)/\iota(N) > 0$ for $i < N$, because $\iota(N) > 0$ and $\iota(i+1) =
\iota(i) + 1$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]). Its
subinterval lengths are all equal to $(b-a)/\iota(N)$, so

$$\|U_N\| \;=\; \frac{b-a}{\iota(N)} .$$

### A partition is determined by its point set

**Claim.** If $P = (n,t)$ and $P' = (n', t')$ are partitions of $[a,b]$ with
$\operatorname{pts}(P) = \operatorname{pts}(P')$, then $n = n'$ and $t_i = t'_i$
for every $i \le n$.

*Proof.* First, $t_i = t'_i$ for every $i \le \min\{n,n'\}$, by induction on $i$
([[thm-induction-principle]]). For $i = 0$ both equal $a$. Suppose $t_j = t'_j$
for all $j \le i$ and $i + 1 \le \min\{n,n'\}$. The set
$S := \{\, x \in \operatorname{pts}(P) : x > t_i \,\}$ has $t_{i+1}$ as its least
element: $t_{i+1} \in S$, and any $x \in S$ is $t_j$ for some $j \le n$ with
$t_j > t_i$, which forces $j > i$ because $t$ is increasing on indices $\le n$,
hence $j \ge i+1$ and $x = t_j \ge t_{i+1}$. The same argument in $P'$ makes
$t'_{i+1}$ the least element of
$\{\, x \in \operatorname{pts}(P') : x > t'_i \,\}$, which is the same set $S$,
since the point sets agree and $t'_i = t_i$. A set has at most one least element
([[def-max-min]]), so $t_{i+1} = t'_{i+1}$.

Second, $n = n'$. If $n < n'$ then $t'_n = t_n = b$ by the previous paragraph,
while $t'_n < t'_{n'} = b$ because $t'$ is increasing on indices $\le n'$ and
$n < n'$; that is impossible. Exchanging the roles of $P$ and $P'$ rules out
$n' < n$. $\square$

So the map $P \mapsto \operatorname{pts}(P)$ is injective, and a partition may be
named by its point set whenever one is exhibited.

### Inserting a point

Let $P = (n,t)$ be a partition of $[a,b]$ and let $c \in [a,b]$. Define a
partition $P + c$ of $[a,b]$ as follows.

- If $c \in \operatorname{pts}(P)$, put $P + c := P$.
- Otherwise $c \ne a$ and $c \ne b$, so $a < c < b$. The set
  $T := \{\, t_i : i \le n \text{ and } t_i < c \,\}$ is a nonempty finite set of
  reals, nonempty because $t_0 = a < c$, so it has a maximum
  ([[lem-finite-set-has-max]]); let $i_0 \le n$ be the unique index with
  $t_{i_0} = \max T$, unique because $t$ is injective on indices $\le n$. Then
  $i_0 < n$, since $t_n = b > c$ puts $t_n \notin T$; and
  $$t_{i_0} \;<\; c \;<\; t_{i_0+1},$$
  the right inequality because $t_{i_0+1} \ne c$ (as $c \notin \operatorname{pts}(P)$)
  and $t_{i_0+1} < c$ would put $t_{i_0+1} \in T$ with $t_{i_0+1} > t_{i_0} = \max T$.
  Put $P + c := (n+1, s)$ with
  $$s_i := t_i \ (i \le i_0), \qquad s_{i_0+1} := c, \qquad s_i := t_{i-1} \ (i_0 + 2 \le i \le n+1), \qquad s_k := b \ (k \ge n+1).$$

In both cases $P + c$ is a partition of $[a,b]$ and

$$\operatorname{pts}(P + c) \;=\; \operatorname{pts}(P) \cup \{c\}, \qquad \|P+c\| \;\le\; \|P\| .$$

The displayed identity is immediate from the two cases. For the mesh: in the
first case nothing changes; in the second the list of subinterval lengths of
$P + c$ is that of $P$ with $\Delta_{i_0}$ replaced by the two numbers
$c - t_{i_0}$ and $t_{i_0+1} - c$, each of which is smaller than
$\Delta_{i_0} = (c - t_{i_0}) + (t_{i_0+1} - c)$ because the other is positive.
So every length of $P + c$ is at most a length of $P$, and the maximum cannot
increase. Finally the index count grows by exactly $1$ in the second case and
not at all in the first.

### Refinement and the common refinement

$P'$ **refines** $P$, and is a **refinement** of $P$, when

$$\operatorname{pts}(P) \;\subseteq\; \operatorname{pts}(P') .$$

Let $P = (n,t)$ and $Q = (m,s)$ be partitions of $[a,b]$. Applying the recursion
theorem ([[thm-recursion]]) to the set $\mathbb{N} \times \mathcal{P}_{[a,b]}$,
where $\mathcal{P}_{[a,b]}$ is the set of partitions of $[a,b]$, with starting
element $(0, P)$ and the map $(j, R) \mapsto (j+1,\ R + s_j)$ — legitimate
because $s_j \in [a,b]$ for every $j \in \mathbb{N}$ — gives a unique family
$(R_j)_{j \in \mathbb{N}}$ of partitions with $R_0 = P$ and $R_{j+1} = R_j + s_j$.
The **common refinement** of $P$ and $Q$ is

$$P \vee Q \;:=\; R_{m+1} .$$

**Its point set is the union.** By induction on $j$ ([[thm-induction-principle]]),
$\operatorname{pts}(R_j) = \operatorname{pts}(P) \cup \{\, s_l : l < j \,\}$;
taking $j = m+1$ gives

$$\operatorname{pts}(P \vee Q) \;=\; \operatorname{pts}(P) \cup \operatorname{pts}(Q).$$

Hence $P \vee Q$ refines both $P$ and $Q$; by the uniqueness claim above it is
the **only** partition with that point set, so $P \vee Q = Q \vee P$, and

$$P' \text{ refines } P \quad \Longrightarrow \quad P \vee P' = P' ,$$

since then $\operatorname{pts}(P) \cup \operatorname{pts}(P') =
\operatorname{pts}(P')$.

**Two size bounds, both used later.** Writing $n_R$ for the first component of a
partition $R$:

$$\|P \vee Q\| \;\le\; \|P\|, \qquad n_{P \vee Q} \;\le\; n_P + n_Q - 1 .$$

The first is the mesh bound above applied $m+1$ times. For the second, each
insertion raises the index count by at most $1$, and the two insertions of
$s_0 = a$ and $s_m = b$ raise it by $0$, since $a$ and $b$ already lie in
$\operatorname{pts}(P)$ and hence in $\operatorname{pts}(R_j)$ for every $j$; so
at most $m - 1$ of the $m+1$ insertions increase it.

### The index map of a refinement

Let $P' = (n',t')$ refine $P = (n,t)$. For each $i \le n$ the point $t_i$ lies in
$\operatorname{pts}(P')$, so there is exactly one $\varphi(i) \le n'$ with
$t'_{\varphi(i)} = t_i$, uniqueness because $t'$ is injective on indices $\le n'$.
The resulting map $\varphi$ satisfies

$$\varphi(0) = 0, \qquad \varphi(n) = n', \qquad \varphi(i) < \varphi(i+1) \ \ (i < n),$$

the first two because $t'_0 = a = t_0$ and $t'_{n'} = b = t_n$ together with
injectivity, and the third because $t_i < t_{i+1}$ and $t'$ is increasing on
indices $\le n'$. In particular $n \le n'$. Moreover, for $i < n$ and
$\varphi(i) \le j < \varphi(i+1)$,

$$I'_j \;=\; [\,t'_j,\ t'_{j+1}\,] \;\subseteq\; [\,t_i,\ t_{i+1}\,] \;=\; I_i ,$$

because $t_i = t'_{\varphi(i)} \le t'_j$ and $t'_{j+1} \le t'_{\varphi(i+1)} = t_{i+1}$.

**The blocks are counted by telescoping.** By clause 5 of
[[lem-finite-sum-laws]],
$\sum_{i<n}\big(\varphi(i+1) - \varphi(i)\big) = \varphi(n) - \varphi(0) = n'$,
so, subtracting $\sum_{i<n} 1 = n$,

$$\sum_{i<n} \big(\varphi(i+1) - \varphi(i) - 1\big) \;=\; n' - n ,$$

a sum of $n$ nonnegative integers, one for each block, which vanishes exactly at
the blocks consisting of a single index. This identity is the whole content of
the quantitative bound in [[lem-refinement-inequalities]], and it is also why
$n \le n'$.

Finally, the lengths inside a block sum to the length of the block:

$$\sum_{j = \varphi(i)}^{\varphi(i+1)-1} \Delta'_j \;=\; t'_{\varphi(i+1)} - t'_{\varphi(i)} \;=\; t_{i+1} - t_i \;=\; \Delta_i \qquad (i < n),$$

again by telescoping, applied to the sequence $l \mapsto t'_{\varphi(i)+l}$ and
read through the index-shift convention of [[def-finite-sum]].

## Remarks

- **Why $a < b$ is a standing hypothesis and not a case.** With $a = b$ the
  displayed chain $a = t_0 < \dots < t_n = b$ is unsatisfiable for $n \ge 1$, and
  admitting $n = 0$ would give a partition with no subintervals, an empty mesh
  set and no maximum. Every statement on this page is about a nondegenerate
  closed bounded interval, and the convention $\int_a^a f := 0$ is not adopted
  here because nothing below needs it.

- **The subintervals overlap at their shared endpoints, and that is harmless.**
  $I_i \cap I_{i+1} = \{t_{i+1}\}$, so the union $\bigcup_{i<n} I_i = [a,b]$ is
  not disjoint. Every quantity attached to a partition below is a sum over $i<n$
  of a number times $\Delta_i$, and a single point contributes length $0$, so no
  statement on this page is sensitive to the double counting of the $n-1$
  interior points.

- **Refinement is a relation between point sets, not between lists.** Defining it
  as "$P'$ is obtained from $P$ by inserting points" would be the same relation,
  by the uniqueness claim above, but it would make every proof carry an
  insertion order. The index map $\varphi$ recovers the list-level picture when
  it is wanted, and it is what [[lem-refinement-inequalities]] actually uses.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `lem-sup-monotone`

````markdown
---
id: lem-sup-monotone
kind: lemma
title: "Monotonicity of the supremum under inclusion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sup-unique, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S$ and $T$ be subsets of $\mathbb{R}$ with $\emptyset \ne S \subseteq T$,
and suppose $T$ is bounded above. Then $S$ is nonempty and bounded above, both
$\sup S$ and $\sup T$ exist, and

$$\sup S \le \sup T.$$

## Facts & Assumptions

**Given:** Sets $S, T \subseteq \mathbb{R}$ with $S \ne \emptyset$, $S \subseteq T$, and $T$ bounded above.

[L1] Supremum and the least-upper-bound property: $u = \sup X$ means $u$ is an upper bound of $X$ and $u \le u'$ for every upper bound $u'$ of $X$; every nonempty $X \subseteq \mathbb{R}$ that is bounded above has such a $u$ ([[def-complete-ordered-field]]).

[L2] A least upper bound is unique, so $\sup X$ denotes a single real number ([[lem-sup-unique]]).

## Proof

**Proof technique:** direct.

1.1 Since $T$ is bounded above, fix an upper bound $u$ of $T$, so $t \le u$ for every $t \in T$. [given, choose]

1.2 By hypothesis $S$ is nonempty and $S \subseteq T$, so $T$ is nonempty as well. [given]

2.1 Every $s \in S$ lies in $T$ and therefore satisfies $s \le u$; hence $u$ is an upper bound of $S$ and $S$ is bounded above. [step 1.1, step 1.2, L1]

3.1 Both $S$ and $T$ are nonempty and bounded above, so by the least-upper-bound property $\sup S$ and $\sup T$ exist, each uniquely. [step 1.2, step 2.1, L1, L2]

4.1 As $\sup T$ is an upper bound of $T$, every $t \in T$ satisfies $t \le \sup T$; since $S \subseteq T$, every $s \in S$ satisfies $s \le \sup T$, so $\sup T$ is an upper bound of $S$. [step 3.1, step 1.2, L1]

5.1 The number $\sup S$ is the least of the upper bounds of $S$, and $\sup T$ is one of them, hence $\sup S \le \sup T$. [step 4.1, step 3.1, L1] ∎

## Remarks

- The hypothesis that the larger set is bounded above cannot be weakened to the smaller one being bounded above: $\sup T$ has to exist for the inequality to mean anything.
- The dual statement, $\inf T \le \inf S$ for $\emptyset \ne S \subseteq T$ with $T$ bounded below, follows by applying this lemma to $\emptyset \ne -S \subseteq -T$, which gives $\sup(-S) \le \sup(-T)$, and then negating and using $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
````

### `thm-darboux-equals-riemann`

````markdown
---
id: thm-darboux-equals-riemann
kind: theorem
title: "The Darboux and Riemann definitions agree: a bounded $f$ on $[a,b]$ is Darboux integrable with integral $I$ if and only if for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that $|S(f,P,\\xi) - I| < \\varepsilon$ for every tagged partition of mesh below $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-partition-and-refinement, def-darboux-sums, def-darboux-integral, def-tagged-partition-and-riemann-sum, thm-riemann-criterion, lem-refinement-inequalities, lem-sup-epsilon, lem-inf-epsilon, lem-finite-sum-laws, def-finite-sum, def-bounded-set, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, lem-finite-choice, def-choice-function, lem-of-abs-value, def-interval, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive]
justified_by: []
aliases: [thm-riemann-and-darboux-integrals-agree]
landmark: true
short: "Darboux $=$ Riemann"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]) and let $I \in \mathbb{R}$. The following are equivalent.

1. **(Darboux)** $f$ is Darboux integrable on $[a,b]$ with
   $\int_a^b f = I$ ([[def-darboux-integral]]).
2. **(Riemann)** For every real $\varepsilon > 0$ there is a real $\delta > 0$
   such that
   $$\bigl|\,S(f,P,\xi) - I\,\bigr| \;<\; \varepsilon$$
   for **every** tagged partition $(P,\xi)$ of $[a,b]$ with $\|P\| < \delta$
   ([[def-tagged-partition-and-riemann-sum]], [[def-partition-and-refinement]]).

**The quantifier over tagged partitions is universal, and that is the content.**
Condition 2 constrains every tagged partition of small mesh at once, tags
included; it is not a statement about one sequence of tagged partitions, and it
cannot be weakened to one. The companion page of this pair exhibits a
non-integrable function whose Riemann sums are constant along such a sequence.

**Boundedness is a hypothesis of both conditions as stated here.** Condition 1
presupposes it, since the Darboux sums of an unbounded function do not exist
([[def-darboux-sums]]); condition 2 makes sense for unbounded $f$ as well, and
in fact implies boundedness, but that implication is not proved here and is not
used: every application on this page starts from a bounded $f$.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$, a real $M \ge 0$ with $|f(x)| \le M$ for every $x \in [a,b]$, and a real $I$. Put $M_{+} := M + 1$, so $M_{+} > 0$ and $|f(x)| \le M_{+}$ for every $x$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, the subintervals $I_i = [t_i,t_{i+1}]$ are nonempty, $\Delta_i = t_{i+1} - t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, and $\|P\| = \max\{\Delta_i : i < n\}$. The uniform partition $U_N$ into $N \ge 1$ parts has $\|U_N\| = (b-a)/\iota(N)$. The common refinement $P \vee P_0$ refines both, and $n_{P \vee P_0} \le n_P + n_{P_0} - 1$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$; $L(f,P) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(f,P)$; $f$ is integrable exactly when the two integrals coincide, and then $\int_a^b f$ is their common value ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] $S(f,P,\xi) = \sum_{i<n}f(\xi_i)\Delta_i$ for a tagging $\xi$ of $P$, and $L(f,P) \le S(f,P,\xi) \le U(f,P)$ when $f$ is bounded ([[def-tagged-partition-and-riemann-sum]]).

[L4] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L5] If $P'$ refines $P$ then $L(f,P) \le L(f,P')$, $U(f,P') \le U(f,P)$, and moreover $U(f,P) - U(f,P') \le 2M_{+}\,\iota(n'-n)\,\|P\|$ and $L(f,P') - L(f,P) \le 2M_{+}\,\iota(n'-n)\,\|P\|$ ([[lem-refinement-inequalities]]).

[L6] $\varepsilon$-characterisations: if $u = \sup S$ with $S$ nonempty then for every real $\eta > 0$ there is $s \in S$ with $s > u - \eta$; dually for the infimum ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L7] A family of nonempty sets **indexed by a natural number** $n$ has a choice function, and this is a theorem of ZF; the family used below is indexed by $i < n$, which is exactly that listed form. [[lem-finite-choice]] states it in that form and expressly declines to identify it with "every finite family of nonempty sets has a choice function", no definition of finiteness being available where it is proved ([[lem-finite-choice]], [[def-choice-function]]).

[L8] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; $\iota$ is nonnegative, additive and nondecreasing on $\mathbb{N}$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L9] Finite sums: additivity, scaling, monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L10] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $|x| < c$ exactly when $-c < x < c$ for $c > 0$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **Condition 2 implies condition 1.** Assume condition 2 and let a real $\varepsilon > 0$ be given. Fix $\delta > 0$ as in condition 2 for this $\varepsilon$, and put $\theta := \varepsilon/(b-a) > 0$ by [L10]. [given, L10, choose]

1.2 **Condition 1 implies condition 2; this half of the proof is steps 1.2, 2.2, 2.3, 3.3, 4.2, 5.2 and 6.2, and its symbols are its own.** Assume $f$ is integrable with $\int_a^b f = I$ and let a real $\eta > 0$ be given. By [L4] fix a partition $P_0 = (n_0, t^0)$ with $U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$. [given, L4, L10, choose]

2.1 A partition of mesh below $\delta$ exists: by [L8] fix $N \ge 1$ with $1/\iota(N) < \delta/(b-a)$ and take $P := U_N$, so $\|P\| = (b-a)/\iota(N) < \delta$ by [L1] and [L10]. Write $P = (n,t)$. [step 1.1, L1, L8, L10, choose]

2.2 By [L2] and integrability, $L(f,P_0) \le \underline{\int_a^b} f = I = \overline{\int_a^b} f \le U(f,P_0)$. Hence $U(f,P_0) - I \le U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$ and $I - L(f,P_0) \le U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$, that is $U(f,P_0) < I + \eta \cdot 2^{-1}$ and $L(f,P_0) > I - \eta \cdot 2^{-1}$. [step 1.2, L2, L10]

2.3 Put $\delta_0 := \eta \cdot \bigl(8\,M_{+}\,\iota(n_0)\bigr)^{-1}$, a positive real since $M_{+} > 0$ and $\iota(n_0) > 0$ by [L8] and $n_0 \ge 1$ by [L1]. [step 1.2, L1, L8, L10, construct]

3.1 For each $i < n$ the set $X_i := \{\, x \in I_i : f(x) > M_i - \theta \,\}$ is nonempty by [L6], since $M_i = \sup f[I_i]$ and $f[I_i]$ is nonempty by [L1]. By [L7] the finite family $\{X_i : i < n\}$ has a choice function $g$; put $\xi_i := g(X_i)$ for $i < n$ and $\xi_k := b$ for $k \ge n$, a tagging of $P$. [step 2.1, L1, L2, L6, L7, choose]

3.2 Likewise the sets $Y_i := \{\, x \in I_i : f(x) < m_i + \theta \,\}$ are nonempty by [L6], and [L7] supplies a tagging $\zeta$ of $P$ with $\zeta_i \in Y_i$ for $i < n$. [step 2.1, L1, L2, L6, L7, choose]

3.3 Let $(Q,\upsilon)$ be any tagged partition of $[a,b]$ with $\|Q\| < \delta_0$, and write $Q = (n_Q,u)$ and $R := Q \vee P_0$, with $R = (n_R, r)$. By [L1], $R$ refines both $Q$ and $P_0$, and $n_R - n_Q \le n_0 - 1$, so $\iota(n_R - n_Q) \le \iota(n_0)$ by [L8]. [step 2.3, L1, L8, given]

4.1 $S(f,P,\xi) \ge U(f,P) - \varepsilon$: by step 3.1, $f(\xi_i) \ge M_i - \theta$ for $i < n$, so multiplying by $\Delta_i > 0$ and summing gives $S(f,P,\xi) \ge \sum_{i<n}(M_i - \theta)\Delta_i = U(f,P) - \theta\sum_{i<n}\Delta_i = U(f,P) - \theta(b-a) = U(f,P) - \varepsilon$, by [L9], [L1] and [L3]. Symmetrically $S(f,P,\zeta) \le L(f,P) + \varepsilon$. [step 3.1, step 3.2, L1, L3, L9, L10]

4.2 By [L5] applied to the refinement $R$ of $Q$, $U(f,Q) - U(f,R) \le 2M_{+}\iota(n_R-n_Q)\|Q\| \le 2M_{+}\iota(n_0)\delta_0 = \eta \cdot 4^{-1}$, and likewise $L(f,R) - L(f,Q) \le \eta \cdot 4^{-1}$. [step 2.3, step 3.3, L5, L8, L10]

5.1 By condition 2 both $|S(f,P,\xi) - I| < \varepsilon$ and $|S(f,P,\zeta) - I| < \varepsilon$, since $\|P\| < \delta$. Hence $U(f,P) \le S(f,P,\xi) + \varepsilon < I + 2\varepsilon$ and $L(f,P) \ge S(f,P,\zeta) - \varepsilon > I - 2\varepsilon$, by step 4.1 and [L10]. [step 1.1, step 2.1, step 4.1, L10]

5.2 By [L5] applied to the refinement $R$ of $P_0$, $U(f,R) \le U(f,P_0)$ and $L(f,R) \ge L(f,P_0)$. Combining with step 4.2 and step 2.2: $U(f,Q) \le U(f,R) + \eta \cdot 4^{-1} \le U(f,P_0) + \eta \cdot 4^{-1} < I + \eta \cdot 2^{-1} + \eta \cdot 4^{-1}$, and symmetrically $L(f,Q) > I - \eta \cdot 2^{-1} - \eta \cdot 4^{-1}$. [step 2.2, step 3.3, step 4.2, L5, L10]

6.1 By [L2], $\overline{\int_a^b} f \le U(f,P) < I + 2\varepsilon$ and $\underline{\int_a^b} f \ge L(f,P) > I - 2\varepsilon$, and since $\underline{\int_a^b} f \le \overline{\int_a^b} f$ by [L2], both integrals lie strictly between $I - 2\varepsilon$ and $I + 2\varepsilon$; in particular $\bigl|\overline{\int_a^b} f - I\bigr| \le 2\varepsilon$ and $\bigl|\underline{\int_a^b} f - I\bigr| \le 2\varepsilon$. [step 5.1, L2, L10]

6.2 By [L3], $L(f,Q) \le S(f,Q,\upsilon) \le U(f,Q)$, so step 5.2 gives $I - \eta \cdot 2^{-1} - \eta \cdot 4^{-1} < S(f,Q,\upsilon) < I + \eta \cdot 2^{-1} + \eta \cdot 4^{-1}$, whence $|S(f,Q,\upsilon) - I| < \eta \cdot 2^{-1} + \eta \cdot 4^{-1} < \eta$ by [L10]. Since $(Q,\upsilon)$ was an arbitrary tagged partition of mesh below $\delta_0$, condition 2 holds with this $\delta_0$. [step 5.2, L3, L10]

7.1 Step 6.1 holds for **every** real $\varepsilon > 0$. If $\overline{\int_a^b} f \ne I$, taking $\varepsilon := \bigl|\overline{\int_a^b} f - I\bigr| \cdot 4^{-1} > 0$ would give $\bigl|\overline{\int_a^b} f - I\bigr| \le \bigl|\overline{\int_a^b} f - I\bigr| \cdot 2^{-1}$, which is false for a positive quantity; so $\overline{\int_a^b} f = I$, and the same argument gives $\underline{\int_a^b} f = I$. Hence $f$ is integrable with $\int_a^b f = I$ by [L2], which is condition 1. [step 6.1, L2, L10]

8.1 Steps 1.1, 2.1, 3.1, 3.2, 4.1, 5.1, 6.1 and 7.1 prove that condition 2 implies condition 1; steps 1.2, 2.2, 2.3, 3.3, 4.2, 5.2 and 6.2 prove the converse. The two halves share no symbol, the first working with $\varepsilon, \delta, P, \xi, \zeta, \theta$ and the second with $\eta, \delta_0, P_0, Q, \upsilon, R$, and together they give the stated equivalence. [step 7.1, step 6.2] ∎

## Remarks

- **What the Riemann condition costs in choice: nothing beyond ZF.** The only selection made anywhere above is in steps 3.1 and 3.2, where a tag is picked in each of the $n$ subintervals of one fixed partition. That family is listed by the index $i < n$, and a family of nonempty sets listed by a natural number has a choice function outright ([[lem-finite-choice]]), with no appeal to any choice axiom. Every other existential in the proof is instantiated once. This is recorded in [[rem-riemann-integral-choice-ledger]].

- **Why the mesh of the coarse partition is the right quantity.** Step 4.2 is the only place where the mesh hypothesis is spent, and it is spent through the quantitative clause of [[lem-refinement-inequalities]]. The symbols there are those of the second half: adding the at most $n_0 - 1$ interior points of $P_0$ to the arbitrary partition $Q$ can change each Darboux sum by at most $2M_{+}$ times the total length of the affected subintervals, and each of those has length below $\delta_0$, the mesh bound imposed on $Q$. The number $n_0$ is fixed **before** $\delta_0$ is chosen, in step 1.2 against step 2.3, which is why the argument is not circular.

- **The two conditions are not symmetric in what they presuppose.** Condition 1 names the integral as a supremum and an infimum and needs the completeness of $\mathbb{R}$ to make sense; condition 2 names it as a limit of sums and could be stated over any ordered field. What the theorem says is that on $\mathbb{R}$ the two coincide, so the numerical picture and the order-theoretic one describe the same object.

- **The value $I$ is not a free parameter after the fact.** If condition 2 holds for $I$ and for $I'$ then $|I - I'| < 2\varepsilon$ for every $\varepsilon > 0$, by evaluating both at one tagged partition of small enough mesh, so $I = I'$. The integral is therefore determined by condition 2 alone, as it is by condition 1.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-infimum-property`

````markdown
---
id: thm-infimum-property
kind: theorem
title: "Every nonempty set bounded below has an infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-reflection, def-infimum, lem-sup-unique, def-complete-ordered-field,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: true
short: "greatest-lower-bound property"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT 18.100A, Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, and its reflection $-S = \{-s : s \in S\}$.

[L1] The least-upper-bound property of $\mathbb{R}$: every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound in $\mathbb{R}$, namely an upper bound that is $\le$ every upper bound ([[def-complete-ordered-field]]).

[L2] Reflection: $-(-S) = S$; $S$ is nonempty exactly when $-S$ is; $u$ is an upper bound of a set $X$ exactly when $-u$ is a lower bound of $-X$; and $\ell$ is a lower bound of $X$ exactly when $-\ell$ is an upper bound of $-X$ ([[lem-reflection]]).

[L3] Greatest lower bound (infimum): $\ell$ is one for $S$ when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L4] A least upper bound and a greatest lower bound are unique when they exist, so the notations $\sup$ and $\inf$ are unambiguous ([[lem-sup-unique]]).

[L5] Negation reverses the order, elementwise: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a \le b$ if and only if $-b \le -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns $-b < -a$ back into $a < b$, while $a = b$ holds exactly when $-a = -b$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $S \ne \emptyset$ and $S$ is bounded below; fix a lower bound $\ell_0$ of $S$, so $\ell_0 \le s$ for every $s \in S$. [given, choose]

1.2 Let $\ell'$ be an arbitrary lower bound of $S$; then $-\ell'$ is an upper bound of $-S$. [assume-hyp, L2]

2.1 Since $S$ is nonempty, so is $-S$, and since $\ell_0$ is a lower bound of $S$, its negative $-\ell_0$ is an upper bound of $-S$; hence $-S$ is a nonempty subset of $\mathbb{R}$ that is bounded above. [step 1.1, L2]

3.1 By the least-upper-bound property, $-S$ has a least upper bound in $\mathbb{R}$; write $u := \sup(-S)$, which is well defined by uniqueness. [step 2.1, L1, L4]

4.1 Define $\ell := -u$. [step 3.1, construct]

4.2 The element $u$ is the least of the upper bounds of $-S$ and $-\ell'$ is one of them, hence $u \le -\ell'$. [step 1.2, step 3.1, L1]

5.1 Apply the reflection fact to the set $-S$: since $u$ is an upper bound of $-S$, its negative $-u$ is a lower bound of $-(-S)$, and $-(-S) = S$; so $\ell = -u$ is a lower bound of $S$. [step 4.1, step 3.1, L2]

5.2 Negating the inequality $u \le -\ell'$ reverses it, giving $-(-\ell') \le -u$, that is $\ell' \le \ell$. [step 4.2, step 4.1, L5]

6.1 Thus $\ell$ is a lower bound of $S$ satisfying $\ell' \le \ell$ for every lower bound $\ell'$ of $S$, so $\ell$ is a greatest lower bound of $S$; it is the only one, so $\inf S$ exists and $\inf S = \ell = -\sup(-S)$. [step 5.1, step 5.2, L3, L4] ∎

## Remarks

- The theorem is not a restatement of the least-upper-bound property: it is proved from it, by transporting the problem across the order-reversing bijection $x \mapsto -x$ of [[lem-reflection]]. Nothing about $\mathbb{R}$ beyond the complete-ordered-field axioms is used.
- The hypotheses are both needed. The empty set is bounded below by every real and has no greatest lower bound, and a set unbounded below has no lower bound at all; the dual failures for suprema are recorded in [[fs-every-set-has-sup]].
- The identity $\inf S = -\sup(-S)$ is the standard device for turning any statement about suprema into its dual; [[lem-inf-epsilon]] is the first application on this page.
````

