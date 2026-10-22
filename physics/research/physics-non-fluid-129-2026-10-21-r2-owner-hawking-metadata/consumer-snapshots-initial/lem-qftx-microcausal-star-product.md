---
id: lem-qftx-microcausal-star-product
kind: lemma
title: Hadamard contractions preserve microcausal polynomial functionals
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-qftx-distributions-on-smooth-manifolds
  - def-qftx-wavefront-hadamard
  - def-qftx-polynomial-microcausal-functionals
  - thm-qftx-wavefront-product
  - def-countable-choice
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  def-qftx-polynomial-microcausal-functionals: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Section 5
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Section 5.1–5.2, equations (52)–(64), microcausal wavefront exclusion and the Hadamard contraction product.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–13, Sections 2.1–2.2, criterion M1 and the future-directed Hadamard covector relation.
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $\hbar$ be a formal indeterminate. Let $W\in\mathcal D'(M\times M)$ be a scalar Hadamard bisolution. For $F,G\in\mathcal F_{\mu c}^{\mathrm{poly}}(M)$, let $\deg F$ be the largest degree with nonzero coefficient kernel, with $\deg 0=0$, and define, coefficientwise in $\hbar$,
$$ F\star_W G =\sum_{r=0}^{\min(\deg F,\deg G)} \frac{\hbar^r}{r!} \left\langle F^{(r)}(\phi)\otimes G^{(r)}(\phi),\,W^{\otimes r}\right\rangle. $$
Each term is formed by the distribution product on the $r$ contracted variable pairs and proper pushforward over those pairs, as in [[thm-qftx-wavefront-product]], integrating with the metric density $\mu_g$ in each contracted variable. The sum is finite and defines a member of $\mathcal F_{\mu c}^{\mathrm{poly}}(M)\llbracket\hbar\rrbracket$. If $K\in C^\infty(M\times M)$ is symmetric, then
$$ \Gamma_KF(\phi)=\left\langle F^{(2)}(\phi),\chi K\mu_g^{\otimes2}\right\rangle $$
is also a compactly supported polynomial microcausal functional and lowers polynomial degree by two; here $\chi$ is any compactly supported cutoff equal to one near $\operatorname{supp}F^{(2)}(\phi)$.

## Statement references

[[def-qftx-polynomial-microcausal-functionals]]

[[thm-qftx-wavefront-product]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the globally hyperbolic Lorentzian manifold of [[def-qftx-wavefront-hadamard]], a Hadamard bisolution $W$, and $F,G\in\mathcal F_{\mu c}^{\mathrm{poly}}(M)$.

[A1] Assume only the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Every functional derivative has compact support and its wavefront set avoids the all-future and all-past causal covector cones, including zero entries ([[def-qftx-polynomial-microcausal-functionals]]).

[F2] A Hadamard kernel has wavefront set consisting of pairs $(x,k;y,-\ell)$ with $k,\ell$ future null and related by null-geodesic cotangent transport ([[def-qftx-wavefront-hadamard]]).

[F3] Tensor products, distribution products, their wavefront bounds, and proper pushforwards obey the localized Fourier estimates stated in [[thm-qftx-wavefront-product]].

## Proof

**Given:** [A1], $W$, $F$, and $G$ as stated.

1.1 Fix a contraction order $r\ge1$, a field $\phi$, and put $A=F^{(r)}(\phi)\otimes G^{(r)}(\phi)$ and $B=W^{\otimes r}$. By [F3], each wavefront component of $B$ is either zero or a Hadamard pair $(k_i,-\ell_i)$ with both $k_i,\ell_i$ future null. If a nonzero covector of $\operatorname{WF}(A)$ cancelled one of $B$, then in the $F$ block every contracted entry would be past null or zero and in the $G$ block every contracted entry would be future null or zero. Both full tuples would lie in the forbidden cones of [F1], contrary to microcausality. Hence $\operatorname{WF}(A)$ has no covector opposite to $\operatorname{WF}(B)$, and [F3] defines $A\cdot B$. Its support is compact because it is contained in $\operatorname{supp}A$. [A1, F1, F2, F3, given, algebra]

2.1 Push the product distribution forward over the $r$ contracted pairs, integrating against $\mu_g^{\otimes2r}$. The projection is proper on its compact support, so [F3] makes the result a compactly supported distribution in the remaining variables. Differentiating this finite expression in $\phi$ uses the polynomial product rule: for any order $s$, each term assigns a subset of the $s$ labeled directions to $F$ and the rest to $G$, producing contractions of $F^{(r+a)}(\phi)$ and $G^{(r+s-a)}(\phi)$ with the same $W^{\otimes r}$. This defines every output derivative as a finite sum of the same proper pushforwards. Since the polynomial degrees are finite, all contractions with $r>\min(\deg F,\deg G)$ vanish and the displayed sum is finite. [F1, F3, step 1.1, construct]

3.1 Fix an output derivative order $s\ge1$ and one term from step 2.1, with $a$ external directions assigned to $F$ and $s-a$ to $G$. Put $A=F^{(r+a)}(\phi)\otimes G^{(r+s-a)}(\phi)$ and $B=W^{\otimes r}$. Suppose a nonzero wavefront covector of the pushed-forward term were entirely future causal. By [F3] it lifts to a covector of $A\cdot B$ with zero covectors in all contracted directions. The product wavefront bound in [F3] has three cases. A contribution from $\operatorname{WF}(A)$ alone would give an all-future nonzero tuple in one of the two functional derivatives, forbidden by [F1]; a contribution from $\operatorname{WF}(B)$ alone has zero external covectors and cannot give the nonzero output. In a sum contribution from $\operatorname{WF}(A)+\operatorname{WF}(B)$, the vertical zero condition makes each contracted $F$ entry past null or zero and each contracted $G$ entry future null or zero. The external entries of both blocks are the assumed future output entries. The full $G$ tuple is therefore nonzero and all future, forbidden by [F1]. If the output covector were all past, the same vertical equations make the full $F$ tuple nonzero and all past. Thus every output derivative kernel avoids both forbidden cones. The case $r=0$ is covered by the $\operatorname{WF}(A)$-alone case. [A1, F1, F2, F3, step 2.1]

4.1 If $K$ is smooth, multiplying $F^{(2)}(\phi)$ by $K$ is allowed by the smooth-factor case of [F3] and adds no wavefront directions. Pairing the result against the cutoff metric density $\chi\mu_g^{\otimes2}$ is defined because the distribution has compact support. For each output derivative, the corresponding wavefront covectors of $F$ have zero entries in the two contracted slots; if the output had an all-future or all-past nonzero covector, adjoining those zeros would put $F^{(s+2)}(\phi)$ in a forbidden cone from [F1]. Hence $\Gamma_KF$ is microcausal. Its degree is at most $\deg F-2$ because two functional derivative slots were contracted; constants and degree-one functionals give zero. [F1, F3, given, algebra] ∎
