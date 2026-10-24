---
id: lem-qftx-bv-master-equation-brst-nilpotence
kind: lemma
title: Classical Master Equation and Nilpotence of the BV Differential
status: draft
origin: session
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-bv-antibracket-master-action
  - lem-qftx-bv-canonical-action-generates-brst-differential
  - lem-qftx-nonabelian-brst-nilpotence
dependency_roles:
  def-qftx-bv-antibracket-master-action: mathematical-premise
  lem-qftx-bv-canonical-action-generates-brst-differential: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields
        and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228"
      locator: "§§4.2–4.3 and 4.6: shifted Jacobi identity, classical master equation,
        and the derivation of BRST nilpotence from the master equation."
    - title: "Jian Qiu and Maxim Zabzine, Introduction to Graded Geometry,
        Batalin-Vilkovisky Formalism and their Applications"
      url: "https://arxiv.org/pdf/1105.2680"
      locator: "§§4.2–4.4, PDF pp. 16–26: the finite-dimensional odd
        Poisson/Gerstenhaber bracket and its graded Jacobi identity."
verification:
  precheck: pending
---

## Statement

Let $\mathcal B$ be the graded-commutative canonical field/antifield algebra of the preceding definition: $|\Phi^A|=\epsilon_A$, $\operatorname{gh}(\Phi^A)=g_A$, $|\Phi_A^*|=\epsilon_A+1$, and $\operatorname{gh}(\Phi_A^*)=-1-g_A$. Its canonical antibracket is odd, has ghost number $+1$, and satisfies the shifted skew and Jacobi identities stated there. Assume the center of $\mathcal B$ contains no nonzero element of ghost number one. In the finite-dimensional coordinate algebra this follows because a central element has zero derivative with respect to every field and antifield coordinate and is therefore a numerical constant; for a formal local-functional domain it is an explicit hypothesis. For any even $S_{\mathrm{BV}}\in\mathcal B$ of ghost number zero, define $sF:=(S_{\mathrm{BV}},F)$. Then $s^2=0$ on $\mathcal B$ if and only if the classical master equation $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$ holds.

In the local-field case of the preceding definition, let $U\subseteq\mathbb R^n$ be nonempty and open, let $\mathfrak g$ be a finite-dimensional real Lie algebra, and let $\rho$ be the stated parity-preserving representation on the graded matter space. Take the minimal fields $A,\psi,c$ and their antifields, with $\delta_\lambda A_\mu=\partial_\mu\lambda+[A_\mu,\lambda]$ and $\delta_\lambda\psi=-\rho(\lambda)\psi$ for every admitted smooth $\lambda:U\to\mathfrak g$. Assume $[\delta_\lambda,\delta_\mu]=\delta_{[\lambda,\mu]}$ without equations of motion, where $[\lambda,\mu](x):=[\lambda(x),\mu(x)]_{\mathfrak g}$, and that $\delta_\lambda\Phi\equiv0$ for every field configuration implies $\lambda\equiv0$. Let $S_0[A,\psi]$ be a local functional with well-defined variational derivatives, invariant under these transformations. Choose a functional domain and support or boundary conditions for which the antibracket, integrations by parts, and gauge-variation identity are well-defined and boundary terms vanish. For $s_0A_\mu=\partial_\mu c+[A_\mu,c]$, $s_0c=-\tfrac12[c,c]$, and $s_0\psi=-\rho(c)\psi$, form the minimal action $S_{\mathrm{BV}}=S_0+\int_U d^nx\,\sum_A(-1)^{\epsilon_A}\Phi_A^*s_0\Phi^A$ in the order specified in the definition. Then this minimal action satisfies the classical master equation $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$.

## Statement references

[[def-qftx-bv-antibracket-master-action|Canonical BV algebra and master-action convention]]

[Gomis, París, and Samuel, §§4.2–4.3 and 4.6](https://arxiv.org/pdf/hep-th/9412228)

[Qiu and Zabzine, §§4.2–4.4](https://arxiv.org/pdf/1105.2680)

## Facts & Assumptions

**Given:** The canonical BV algebra, its odd antibracket, and an even ghost-number-zero element $S_{\mathrm{BV}}$.

[A1] The chosen domain has no nonzero central elements of ghost number one; this follows from canonical finite-dimensional coordinates and is separately assumed for any formal local-functional extension. [[def-qftx-bv-antibracket-master-action]]

[F1] [[def-qftx-bv-antibracket-master-action]]: the antibracket has ghost number $+1$, satisfies shifted graded skew-symmetry and shifted Jacobi, and the BV differential convention is $sF=(S_{\mathrm{BV}},F)$.

[A2] [[def-qftx-bv-antibracket-master-action]]: in the minimal local-field setup, the gauge action is irreducible and off-shell closed, $S_0$ is invariant, and the functional domain admits the stated integrations by parts with vanishing boundary terms.

[F2] [[def-qftx-bv-antibracket-master-action]]: the candidate action is $S_{\mathrm{BV}}=S_0+S_1$ with $S_1=\int_U d^nx\,\sum_A(-1)^{\epsilon_A}\Phi_A^*s_0\Phi^A$ in the displayed order.

[F3] [[lem-qftx-bv-canonical-action-generates-brst-differential]]: the antibracket action of $S_1$ on each minimal field and ghost coordinate is $(S_1,\Phi^A)=s_0\Phi^A$.

[F4] [[lem-qftx-nonabelian-brst-nilpotence]]: the specified $s_0$ squares to zero on the minimal fields, ghost, and every finite-jet generator.

## Proof

1.1 For homogeneous $F$ of parity $|F|$, the shifted Jacobi identity with entries $S_{\mathrm{BV}},S_{\mathrm{BV}},F$ gives $((S_{\mathrm{BV}},S_{\mathrm{BV}}),F)+2(-1)^{|F|}((S_{\mathrm{BV}},F),S_{\mathrm{BV}})=0$. Shifted skew-symmetry gives $((S_{\mathrm{BV}},F),S_{\mathrm{BV}})=(-1)^{|F|+1}(S_{\mathrm{BV}},(S_{\mathrm{BV}},F))$. Combining these identities yields $s^2F=(S_{\mathrm{BV}},(S_{\mathrm{BV}},F))=\tfrac12((S_{\mathrm{BV}},S_{\mathrm{BV}}),F)$. [F1, algebra]

1.2 Write $S_1=\int_U d^nx\,\sum_A(-1)^{\epsilon_A}\Phi_A^*s_0\Phi^A$. Since $S_0$ is antifield-independent, $(S_0,S_0)=0$. The displayed antifield signs and left/right derivative convention give $(S_0,S_1)=s_0S_0$, with $s_0$ acting only on $A,\psi$ here. Gauge invariance says the first variation of $S_0$ vanishes for every admitted even parameter $\lambda$; its coefficientwise Noether identity therefore remains zero after replacing $\lambda$ by the formal ghost $c$, so $(S_0,S_1)=0$. The boundary hypothesis justifies the variational derivatives and integrations by parts in this identity. Both $S_0$ and $S_1$ are even, so shifted skew-symmetry gives $(S_1,S_0)=(S_0,S_1)=0$. [A2, F2, algebra]

2.1 If $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$, step 1.1 gives $s^2F=0$ for every $F\in\mathcal B$. This is the forward implication. [step 1.1, algebra]

2.2 Conversely, if $s^2F=0$ for every $F$, step 1.1 implies $((S_{\mathrm{BV}},S_{\mathrm{BV}}),F)=0$ for every $F$, so $(S_{\mathrm{BV}},S_{\mathrm{BV}})$ is central. Its ghost number is $0+0+1=1$ by [F1], and [A1] therefore forces $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$. This proves the reverse implication. [F1, A1, step 1.1]

2.3 By [F3], $qF:=(S_1,F)$ agrees with $s_0$ on each minimal field and ghost, and therefore on every finite-jet expression in them. Applying the identity of step 1.1 with $S_1$ in place of $S_{\mathrm{BV}}$ gives $((S_1,S_1),\Phi^A)=2s_0^2\Phi^A=0$ by [F4]. The canonical bracket formula gives $((S_1,S_1),\Phi^A)=-\delta_r(S_1,S_1)/\delta\Phi_A^*$. Since $(S_1,S_1)$ is linear in antifields, these variational derivatives determine it modulo boundary terms and yield $(S_1,S_1)=-2\int_U d^nx\,\sum_A\Phi_A^*s_0^2\Phi^A$. It vanishes by [F4]. [F1, F3, F4, step 1.1, algebra]

3.1 Expanding $(S_0+S_1,S_0+S_1)$, the pure $S_0$ term and both cross terms vanish by step 1.2, while the pure $S_1$ term vanishes by step 2.3. Thus the defined minimal action satisfies the classical master equation under the stated gauge-invariance, off-shell-closure, and domain hypotheses. [A2, F2, step 1.2, step 2.3, algebra] ∎

