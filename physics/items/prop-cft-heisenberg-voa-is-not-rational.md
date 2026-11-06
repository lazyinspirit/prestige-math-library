---
id: prop-cft-heisenberg-voa-is-not-rational
kind: proposition
title: A nonsplit logarithmic Heisenberg module obstructs rationality
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - thm-rank-one-heisenberg-vertex-operator-algebra
  - thm-rank-one-heisenberg-jordan-fock-module
  - def-rational-vertex-algebra
  - def-vertex-algebra-module
dependency_roles:
  thm-rank-one-heisenberg-vertex-operator-algebra: mathematical-premise
  thm-rank-one-heisenberg-jordan-fock-module: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "§§2.9 and 3.1–3.3: module conventions and the rank-one Heisenberg vertex algebra. These source passages provide conventions; the nonsplitting and rationality argument below is local."
    - title: "Christophe Nozaradan, Introduction to Vertex Algebras"
      url: "https://arxiv.org/pdf/0809.1380v3"
      locator: "§§2.7.3, 3.3–3.4, and 4.2–4.3: Heisenberg/free-field conventions, normal products, and the ordinary non-super vertex-algebra convention. The local proof relies on the exact pinned module suppliers listed in deps."
    - title: "Dražen Adamović and Antun Milas, Lattice construction of logarithmic modules for certain vertex algebras"
      url: "https://arxiv.org/pdf/0902.3417v2"
      locator: "§§1–2 and 5: source context for logarithmic modules and the triplet example; the paper is not used as a logical supplier for this Heisenberg claim."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V=P$ be the rank-one Heisenberg conformal vertex algebra of central charge $1$, with $P=\mathbb C[x_1,x_2,\ldots]$, $\deg x_r=r$, and $V_0=\mathbb C\mathbf1$. Put $E=\mathbb C e_0\oplus\mathbb C e_1$, $Ne_0=0$, $Ne_1=e_0$, and $A=I_E+N$. On $F=P\otimes E$, let $a_{-r}$ act by multiplication by $x_r$, let $a_r$ act by $r\partial_{x_r}$ for $r\ge1$, and let $a_0=I_P\otimes A$. Extend these modes to the state fields by the normal-ordered divided-derivative formula for the rank-one Heisenberg vertex algebra. Then $F$ contains the admissible submodule $M_0=P\otimes\mathbb C e_0$ and the quotient $F/M_0$ is admissible, but the short exact sequence $0\to M_0\to F\to F/M_0\to0$ does not split as a sequence of admissible $V$-modules. Consequently $V$ is not rational in the admissible-module convention.

## Statement references

[[thm-rank-one-heisenberg-vertex-operator-algebra]]

[[thm-rank-one-heisenberg-jordan-fock-module]]

[[def-rational-vertex-algebra]]

## Facts & Assumptions

**Given:** The pinned rank-one Heisenberg conformal vertex algebra, the oscillator module $F(E,A)$ with the displayed $E,N,A$, and rationality defined as complete reducibility of admissible modules.

[F1] [[thm-rank-one-heisenberg-vertex-operator-algebra]]: the normal-ordered fields are the state fields of the CFT-type rank-one Heisenberg VOA; the polynomial weight spaces $P_d$ are finite dimensional and $P_0=\mathbb C\mathbf1$.

[F2] [[thm-rank-one-heisenberg-jordan-fock-module]]: the full module-Jacobi construction gives an admissible grading $F=\bigoplus_{d\ge0}P_d\otimes E$, with $a_0=I+N$ and $L_F(0)|_{P_d\otimes E}=(d+\tfrac12)I+N$.

[F3] [[def-vertex-algebra-module]]: a submodule is stable under every state mode, and module homomorphisms commute with every state field. The normal-ordered Heisenberg state fields are generated from the current $a(z)$ and its divided derivatives.

[F4] [[def-rational-vertex-algebra]]: rationality means every admissible module is an internal direct sum of simple admissible submodules, with the specified grading inherited by each summand.

## Proof

1.1 The space $M_0=P\otimes\mathbb C e_0$ is stable under every current mode: multiplication and differentiation act only on $P$, while $a_0$ acts as the identity on $\mathbb C e_0$. Each state field of $V$ is a normal-ordered product of divided derivatives of this current, so every coefficient of every state field also preserves $M_0$. Hence $M_0$ is a $V$-submodule. The state modes descend to $F/M_0$ and its module identities descend from those on $F$. The induced grading and the restriction grading on $M_0$ satisfy the same admissible mode-shift rule in [F2], so both are admissible. [given, F1, F2, F3, algebra]

2.1 The module $M_0$ is simple. Let $0\ne f\otimes e_0\in M_0$, and choose a monomial $x^\beta=\prod_r x_r^{\beta_r}$ of maximal ordinary total degree among the monomials of $f$ with nonzero coefficient. Applying $\prod_r a_r^{\beta_r}$ differentiates by $\prod_r(r\partial_{x_r})^{\beta_r}$. Every term of lower total degree is killed; among terms of the same total degree, only $x^\beta$ survives, since a distinct exponent vector of the same total degree cannot dominate $\beta$ coordinatewise. The result is a nonzero multiple of $1\otimes e_0$. The negative modes $a_{-r}$ then generate every monomial times $e_0$, so every nonzero submodule is all of $M_0$. [F1, F2, F3, step 1.1, algebra]

3.1 If $V$ were rational, write $F=\bigoplus_{i\in I}S_i$ as a direct sum of simple admissible submodules. A nonzero vector of $M_0$ has nonzero projection to some $S_j$, because every vector in a direct sum has finite support. The coordinate projection $\pi_j:F\to S_j$ is a graded module homomorphism. Its restriction to $M_0$ is nonzero; simplicity of $M_0$ makes that restriction injective, and simplicity of $S_j$ makes its image all of $S_j$. Thus $\pi_j|_{M_0}$ is an isomorphism. The map $r=(\pi_j|_{M_0})^{-1}\pi_j:F\to M_0$ is a graded module retraction, so $U=\ker r$ is a graded module complement and $F=M_0\oplus U$. [F3, F4, step 2.1, algebra]

4.1 By [F2], the generalized $L_F(0)$-eigenspace of weight $\tfrac12$ in $F$ is exactly $E=P_0\otimes E$, and in $F/M_0$ it is $E/\mathbb C e_0$, which is one dimensional. Since $U$ is a module complement, the quotient map restricts to an $L_F(0)$-intertwining isomorphism from $U$ onto $F/M_0$; it therefore maps the generalized weight-$\tfrac12$ subspace of $U$ isomorphically onto $E/\mathbb C e_0$. Thus $U\cap E$ would be a one-dimensional line complementary to $\mathbb C e_0$. [F2, F3, step 3.1, algebra]

5.1 Write a nonzero vector on that line as $v=c e_0+d e_1$ with $d\ne0$. Since $U$ is a $V$-submodule, it is stable under the current zero mode, but $a_0v=(I+N)v=v+d e_0$ is not in $\mathbb C v$: membership would imply $e_0\in\mathbb C v$, contrary to $d\ne0$. This contradicts stability of $U\cap E$. Therefore the sequence in the Statement has no admissible module complement. [given, F2, F3, step 4.1, algebra]

6.1 The contradiction in step 5.1 rules out the rationality assumption used in step 3.1. By the definition [F4], $V$ is not rational. This conclusion is a mathematical deduction from the pinned formal VOA/module definitions; it does not assert a physical realization. [F4, step 3.1, step 5.1] ∎
