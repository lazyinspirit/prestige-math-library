---
id: lem-root-group-expansion-of-a-weight-vector
kind: lemma
title: "Expansion of a root-group translate of a weight vector"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 26
deps: [def-axiom-of-choice, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-roots-and-root-groups-of-a-split-reductive-group, def-weight-and-dominant-weight-of-a-rational-representation, thm-root-subgroups-of-a-split-reductive-group, lem-finite-dimensional-subcomodules-contain-elements, thm-increasing-basis-wedges-form-a-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22 (22.14), printed p. 467"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Lemma 72"
---
## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(V,r)$ be a
rational representation of a split reductive group $(G,T)$, let $v\in V_\lambda$
be a weight vector, and let $\alpha\in\Phi$ with root-group isomorphism
$u_\alpha:\mathbf G_a\to U_\alpha$
([[thm-root-subgroups-of-a-split-reductive-group]]). These coordinates satisfy
$t\,u_\alpha(c)\,t^{-1}=u_\alpha(\alpha(t)c)$ over every $k$-algebra.
Then there are vectors
$v_i\in V_{\lambda+i\alpha}$ ($i\ge1$), only finitely many nonzero, such that
$$u_\alpha(c)\cdot v=v+\sum_{i\ge1}c^i v_i$$
for every $c$ (and every $k$-algebra after base change). In particular the orbit
map $c\mapsto u_\alpha(c)\cdot v$ is polynomial with constant term $v$ and
higher coefficients in the stated weight spaces.

## Facts & Assumptions

**Given:** A split reductive group $(G,T)$ with root $\alpha\in\Phi$, the root-group isomorphism $u_\alpha:\mathbf G_a\to U_\alpha$, a rational representation $(V,r)$ and a weight vector $v\in V_\lambda$ ([[def-weight-and-dominant-weight-of-a-rational-representation]]).

[F1] *Finite-dimensional orbit.* The vector $v$ lies in a finite-dimensional subcomodule $W\subseteq V$; the action of $U_\alpha$ preserves $W$, so $u_\alpha(c)\cdot v\in W$ for all $c$ ([[lem-finite-dimensional-subcomodules-contain-elements]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F2] *Rational action is polynomial.* For a finite-dimensional rational representation $W$ of $\mathbf G_a$ the matrix coefficients of $c\mapsto r(u_\alpha(c))$ are polynomial functions of $c$; hence $c\mapsto u_\alpha(c)\cdot v$ is given by a polynomial in $c$ with values in $W$, and a basis of $W$ exhibits it as $u_\alpha(c)\cdot v=\sum_{i\ge0}c^iv_i$ with $v_i\in W$, only finitely many nonzero ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F3] *Conjugation formula.* For $t\in T(R)$ and $c\in R$ one has $t\,u_\alpha(c)\,t^{-1}=u_\alpha(\alpha(t)c)$ ([[thm-root-subgroups-of-a-split-reductive-group]], [[def-roots-and-root-groups-of-a-split-reductive-group]]). To justify the formula from the supplied $T$-stability and Lie weight, work with the universal torus point over $A=k[x_1^{\pm1},\dots,x_r^{\pm1}]$, a domain. Conjugation induces a polynomial automorphism of $A[c]$ fixing $c=0$; its polynomial inverse and the degree-of-composition identity over a domain force it to be $c\mapsto a(t)c$, with $a(t)$ a unit. Its differential at $c=0$ is the adjoint character $\alpha(t)$, hence $a(t)=\alpha(t)$. This universal identity specializes to every $R$, including nonreduced base algebras.

[F4] *Weight vectors.* $t\cdot v=\lambda(t)v$ for all $t\in T(R)$, and the weight spaces $V_\chi$ are the eigenspaces of the $T$-action ([[def-weight-and-dominant-weight-of-a-rational-representation]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2] there is a finite expansion $u_\alpha(c)\cdot v=\sum_{i\ge0}c^iv_i$ with $v_i\in W$ and only finitely many nonzero. Setting $c=0$ gives $v_0=v$. [F1, F2, given]

2.1 For $t\in T(R)$ one has $t\cdot(u_\alpha(c)\cdot v)=(t\,u_\alpha(c)\,t^{-1})\cdot(t\cdot v)=u_\alpha(\alpha(t)c)\cdot(\lambda(t)v)=\lambda(t)\sum_{i\ge0}\alpha(t)^ic^iv_i$ using [F3] and [F4]. [F3, F4, step 1.1]

3.1 On the other hand $t\cdot(u_\alpha(c)\cdot v)=\sum_{i\ge0}c^i(t\cdot v_i)$ by linearity of the action over $R[c]$. Comparing coefficients of $c^i$ in the two polynomial expressions for all $R$-points $t$ shows $t\cdot v_i=\lambda(t)\alpha(t)^iv_i$ for every $i$, that is, $v_i\in V_{\lambda+i\alpha}$: the character $\chi_i$ with $t\cdot v_i=\chi_i(t)v_i$ satisfies $\chi_i(t)=\lambda(t)\alpha(t)^i$ for all $t$ and all $R$. Together with step 1.1 this gives the asserted expansion. [F4, step 1.1, step 2.1]

4.1 Since $v_0=v$ and $v_i\in V_{\lambda+i\alpha}$ for $i\ge1$ with only finitely many nonzero, the orbit map $c\mapsto u_\alpha(c)\cdot v$ is polynomial with constant term $v$ and higher coefficients in the stated weight spaces. [step 1.1, step 3.1] ∎

## Remarks

- The base-change clause of the statement is included because the computation is carried out for an arbitrary $k$-algebra $R$ of values of $c$ and points $t\in T(R)$; the expansion is the same polynomial for every $R$.
- If $v_i=0$ for all $i\ge1$ the vector $v$ is fixed by $U_\alpha$; the vanishing of all higher coefficients is what makes a primitive vector fixed by every positive root group.
