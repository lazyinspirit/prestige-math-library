---
id: thm-gitik-every-limit-ordinal-has-cofinality-omega
kind: theorem
title: Every limit ordinal has cofinality omega in Gitik's model
status: published
origin: pipeline
deps:
  - thm-gitik-symmetric-submodel-satisfies-zf
  - def-gitik-strongly-compact-filter-system-and-class-forcing
  - def-gitik-finite-support-symmetric-submodel
  - def-cofinality
  - thm-cofinality-basics
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Schürz, Gitik's model, abstract, coordinate forcing on pages 3–7 and final theorem"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
    - title: "Dimitriou, Symmetric Models, Lemma 2.38, pages 69–70"
      url: https://d-nb.info/1020630655/34
---

## Statement

In $N_G$, every nonzero limit ordinal $\lambda$ has a cofinal map
$\omega\to\lambda$. Consequently
$N_G\models\operatorname{cf}(\lambda)=\omega$ for every such $\lambda$.

## Facts & Assumptions

**Given:** The completed Gitik symmetric model $N_G$.

[F1] [[thm-gitik-symmetric-submodel-satisfies-zf]]: $N_G$ is a transitive ZF
model containing the ground model.

[F2] [[def-gitik-strongly-compact-filter-system-and-class-forcing]]: At every
regular coordinate $\delta$, trunks have finite one-to-one $\delta$-sections,
support extension is available, and successors are selected from uniform
filters on $\delta$.

[F3] [[def-gitik-finite-support-symmetric-submodel]]: A name fixed by the
pointwise stabilizer of one coordinate and having HS subnames belongs to
$N_G$.

[F4] [[def-cofinality]] and [[thm-cofinality-basics]]: The ground cofinality of
a limit ordinal is an infinite regular cardinal and has a strictly increasing
cofinal witness; no finite subset is cofinal in a limit ordinal.

## Proof

1.1 Fix an infinite regular ground cardinal $\delta$. Use the canonical name whose value is the union of the $\delta$-sections of conditions in $G$: a pair $\langle n,\xi\rangle$ enters the named graph exactly under conditions with $p(\delta)(n)=\xi$. Directedness makes this union a one-to-one partial map. For every $n<\omega$, support extension and finitely many legal successors give a dense class of conditions whose $\delta$-section contains $n$. For every $\xi<\delta$, uniformity makes each relevant successor set unbounded, so pruning above $\xi$ and taking the next $\delta$-successor is dense. Thus the value $g_\delta:\omega\to\delta$ is total and cofinal, but need not be onto. Every automorphism in $H_{\{\delta\}}$ fixes the $\delta$-section and permutes the witnessing conditions only outside that coordinate. Its graph entries use only check names, so the name is hereditarily symmetric with support $\{\delta\}$. F3 therefore puts $g_\delta$ in $N_G$. [F2, F3]

2.1 Let $\lambda$ be a nonzero limit ordinal. In the ground model put $\delta=\operatorname{cf}^M(\lambda)$ and take the strictly increasing cofinal map $h:\delta\to\lambda$ supplied by F4. Its check name is fixed by every automorphism and hereditarily symmetric, so F3 puts $h$ in $N_G$. If $\delta=\omega$, it is already the required witness. If $\delta>\omega$, then $\delta$ is an infinite regular ground cardinal, so step 1.1 gives $g_\delta\in N_G$ and ZF in F1 forms $c=h\circ g_\delta:\omega\to\lambda$. Given $\xi<\lambda$, choose $\eta<\delta$ with $\xi\le h(\eta)$ and then $n<\omega$ with $\eta\le g_\delta(n)$. Monotonicity of $h$ gives $\xi\le c(n)$, so $c$ is cofinal. This proves the claimed omega upper bound in both cases without any surjectivity assertion. [F1, F2, F3, F4, step 1.1]

3.1 By F4, the cofinality of a limit ordinal is infinite. Equivalently, the empty range is not cofinal and every nonempty finite set of ordinals has a maximum still below $\lambda$, so no finite map is cofinal in $\lambda$. Step 2.1 gives a cofinal map of length $\omega$; since $\omega$ is the least infinite ordinal, the least cofinal length is exactly $\omega$. The construction and this verification take place inside the transitive ZF model $N_G$. [F1, F4, step 2.1] ∎
