---
id: thm-bergman-kernel-biholomorphic-transformation
kind: theorem
title: Transformation law of the Bergman kernel under a biholomorphism
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
proof_strategy: direct
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - cor-complex-jacobian-determinant-is-multiplicative
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-bergman-space-and-kernel
  - def-biholomorphic-map-several-complex-variables
  - def-bounded-linear-operator
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-countable-choice
  - def-hilbert-space-adjoint
  - def-holomorphic-map-and-complex-jacobian
  - lem-real-jacobian-determinant-of-a-complex-linear-map
  - rem-complex-euclidean-space-dictionary
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - thm-bergman-reproducing-projection-and-extremal
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-chain-rule-for-holomorphic-maps-in-several-variables
  - thm-componentwise-holomorphy-in-several-complex-variables
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, display (1.2), printed p. 2 (PDF p. 2): the unitary pullback
        g↦(g∘F)Jac F and the transformation law
        K_Ω(z,w)=K_D(F(z),F(w))Jac F(z)\overline{Jac F(w)}.
        Błocki assumes bounded domains throughout §1 unless stated otherwise.
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Exercise 5.2.7, printed p. 164 (PDF p. 163): asks for the
        transformation law under a biholomorphism but supplies no proof.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $m\ge1$, let $\Omega,\Omega'\subseteq\mathbb C^m$ be domains, and let $F:\Omega\to\Omega'$ be a biholomorphism. Write $J_F(z):=\det_{\mathbb C}DF(z)$. Then $J_F(z)\ne0$ for every $z\in\Omega$, and

$$K_\Omega(z,w)=J_F(z)\,K_{\Omega'}(F(z),F(w))\,\overline{J_F(w)}\qquad(z,w\in\Omega).$$

The pullback $U_F:A^2(\Omega')\to A^2(\Omega)$, defined on the unique holomorphic representatives by $U_Fg:=(g\circ F)J_F$, is a unitary isomorphism (a surjective linear isometry), with

$$U_F^*K_\Omega(\cdot,z)=\overline{J_F(z)}K_{\Omega'}(\cdot,F(z)).$$

## Facts & Assumptions

[A1] The only choice principle assumed is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Under it, the Bergman spaces are Hilbert spaces of unique holomorphic representatives with first-variable-linear inner products, Riesz sections, and reproducing kernels; the real change-of-variables supplier and Hilbert-adjoint definition also use only $\mathrm{AC}_\omega$ ([[def-bergman-space-and-kernel]], [[thm-bergman-reproducing-projection-and-extremal]], [[cor-c-one-change-of-variables-for-l-one-functions]], [[def-hilbert-space-adjoint]]).

[F1] A biholomorphism and its inverse are holomorphic maps. Their components are holomorphic scalar functions, hence smooth in real coordinates, so under $\mathbb C^m\cong\mathbb R^{2m}$ both are real $C^1$ maps and $F$ is a $C^1$ diffeomorphism ([[def-biholomorphic-map-several-complex-variables]], [[thm-componentwise-holomorphy-in-several-complex-variables]], [[cor-holomorphic-functions-in-several-variables-are-smooth]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[rem-complex-euclidean-space-dictionary]]).

[F2] The entries of the complex Jacobian matrix are the component derivatives $\partial_{z_k}F_j$, which are holomorphic; its determinant is a finite sum of products of these entries, so $J_F$ is holomorphic. Composition of holomorphic maps is holomorphic ([[def-holomorphic-map-and-complex-jacobian]], [[thm-componentwise-holomorphy-in-several-complex-variables]], [[cor-holomorphic-functions-in-several-variables-are-smooth]], [[prop-algebra-of-holomorphic-functions-in-several-variables]], [[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[F3] The complex Jacobian determinant is multiplicative under composition. Applying this to $F^{-1}\circ F=\operatorname{id}$ gives $J_{F^{-1}}(F(z))J_F(z)=1$, hence $J_F(z)\ne0$ ([[cor-complex-jacobian-determinant-is-multiplicative]]).

[F4] For a $\mathbb C$-linear map with complex determinant $J$, the real determinant under $\mathbb C^m\cong\mathbb R^{2m}$ is $|J|^2$ ([[lem-real-jacobian-determinant-of-a-complex-linear-map]]).

[F5] For the real $C^1$ diffeomorphism underlying $F$, Lebesgue change of variables gives $\int_{\Omega'}q(\zeta)\,d\lambda_{2m}(\zeta)=\int_\Omega q(F(z))|\det_{\mathbb R}DF(z)|\,d\lambda_{2m}(z)$ for every complex $q\in L^1(\Omega')$. The Bergman measures are restrictions of this Lebesgue measure ([[cor-c-one-change-of-variables-for-l-one-functions]], [[def-bergman-space-and-kernel]], [[rem-complex-euclidean-space-dictionary]]).

[F6] The Bergman section $k_z=K_\Omega(\cdot,z)$ satisfies $f(z)=\langle f,k_z\rangle$; the pairing is linear in its first variable ([[def-bergman-space-and-kernel]], [[thm-bergman-reproducing-projection-and-extremal]]).

[F7] For a bounded linear operator $T:H\to K$ between Hilbert spaces, its adjoint is characterized by $\langle Tx,y\rangle_K=\langle x,T^*y\rangle_H$. An isometry is bounded with bound $1$ ([[def-hilbert-space-adjoint]], [[def-bounded-linear-operator]]).

[F8] If $g,h\in A^2(\Omega')$, then $g\overline h\in L^1(\Omega')$ by Cauchy–Schwarz ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct, using the weighted pullback and the reproducing property.

**Given:** $\mathrm{AC}_\omega$, domains $\Omega,\Omega'\subseteq\mathbb C^m$, and a biholomorphism $F:\Omega\to\Omega'$.

1.1 By [F1], $F$ and $F^{-1}$ are smooth as real maps under the Euclidean identification, so $F$ is a real $C^1$ diffeomorphism between the corresponding open subsets of $\mathbb R^{2m}$. [A1, F1, given]

1.2 Applying [F3] to $F^{-1}\circ F=\operatorname{id}_\Omega$ gives $J_{F^{-1}}(F(z))J_F(z)=1$ for every $z\in\Omega$. Thus $J_F(z)\ne0$. [F3, given]

2.1 By [F2], $J_F$ is holomorphic, and the chain rule makes $g\circ F$ holomorphic for $g\in A^2(\Omega')$; hence $(g\circ F)J_F$ is holomorphic. Applying [F4] and [F5] to $|g|^2\in L^1(\Omega')$ gives $\int_\Omega|(g\circ F)(z)J_F(z)|^2\,d\lambda_{2m}(z)=\int_{\Omega'}|g(\zeta)|^2\,d\lambda_{2m}(\zeta)<\infty$, so $U_Fg\in A^2(\Omega)$ and $\|U_Fg\|_2=\|g\|_2$. For $g,h\in A^2(\Omega')$, [F8] gives $g\overline h\in L^1(\Omega')$, and [F4]–[F5] yield $\langle U_Fg,U_Fh\rangle_\Omega=\int_\Omega g(F(z))\overline{h(F(z))}|J_F(z)|^2\,d\lambda_{2m}(z)=\int_{\Omega'}g(\zeta)\overline{h(\zeta)}\,d\lambda_{2m}(\zeta)=\langle g,h\rangle_{\Omega'}$. Pointwise linearity makes $U_F$ a linear isometry preserving the inner product. [A1, F2, F4, F5, F8, step 1.1, given]

3.1 Apply step 2.1 to $F^{-1}$ as well. For each $h\in A^2(\Omega)$, $g:=(h\circ F^{-1})J_{F^{-1}}$ lies in $A^2(\Omega')$, and [F3] gives $U_Fg=h$. Thus $U_F$ is onto with inverse $U_{F^{-1}}$, so it is a unitary isomorphism. For every $y\in A^2(\Omega)$, inner-product preservation and surjectivity give $\langle U_Fg,y\rangle_\Omega=\langle g,U_F^{-1}y\rangle_{\Omega'}$ for all $g$; by [F7], $U_F^*=U_F^{-1}$. Finally, for $z\in\Omega$ and $g\in A^2(\Omega')$, [F6] gives $\langle g,U_F^*k_z\rangle_{\Omega'}=\langle U_Fg,k_z\rangle_\Omega=(U_Fg)(z)=J_F(z)g(F(z))=\langle g,\overline{J_F(z)}k'_{F(z)}\rangle_{\Omega'}$, where $k'_\eta:=K_{\Omega'}(\cdot,\eta)$. Nondegeneracy of the inner product yields $U_F^*k_z=\overline{J_F(z)}k'_{F(z)}$. [A1, F3, F6, F7, step 1.2, step 2.1, given]

4.1 Since $U_FU_F^*=\operatorname{id}$, step 3.1 gives $k_w=U_FU_F^*k_w=\overline{J_F(w)}\,U_Fk'_{F(w)}$. Evaluating the unique holomorphic representatives at $z$ gives $K_\Omega(z,w)=\overline{J_F(w)}J_F(z)K_{\Omega'}(F(z),F(w))$, the asserted transformation law. [F6, step 3.1] ∎
