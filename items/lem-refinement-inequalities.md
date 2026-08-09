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
