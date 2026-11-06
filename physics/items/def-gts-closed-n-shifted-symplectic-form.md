---
id: def-gts-closed-n-shifted-symplectic-form
kind: definition
title: Closed n-shifted symplectic form
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
deps:
- def-gts-derived-artin-stack-and-cotangent-complex
- def-derived-scheme-and-cotangent-complex
- def-axiom-of-choice
- thm-dold-kan-equivalence-for-simplicial-modules
dependency_roles:
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-derived-scheme-and-cotangent-complex: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-dold-kan-equivalence-for-simplicial-modules: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
    url: https://arxiv.org/pdf/1111.3209
    locator: Definition 1.2 and Proposition 1.3 with proof, Corollary 1.4 (PDF pp. 14–16); Definitions 1.7–1.8 (pp. 17–18); Definitions 1.12–1.13 and Proposition 1.14 with proof through Lemma 1.15 (pp. 20–23); Definition 1.18 (p. 24).
  - title: Damien Calaque and Stefano Ronchi, Shifted Symplectic Geometry by Examples
    url: https://arxiv.org/pdf/2510.04625
    locator: Definitions 3.13–3.14 (PDF pp. 26–27); Definition 4.5 and the preceding descent setup (PDF p. 31). These named definitions use a regraded de Rham convention.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a characteristic-zero field $k$, the connective derived-affine model of
[[def-derived-scheme-and-cotangent-complex]], and a derived Artin stack $F$
with cotangent complex $L_{F/k}$. Assume AC for the cotangent-complex
construction inherited from [[def-derived-scheme-and-cotangent-complex]]. In
the affine calculation, a **nonpositive
commutative dg $k$-algebra** $A=\bigoplus_{i\le0}A^i$ is a unital associative
cochain algebra with degree-$+1$ differential satisfying $d_A^2=0$,
$ab=(-1)^{|a||b|}ba$, and
$d_A(ab)=d_A(a)b+(-1)^{|a|}a d_A(b)$. A morphism preserves unit,
multiplication, grading, and differential. This is the graded-commutative
convention used in $\mathrm{DR}$. On a cofibrant such algebra form the
derived de Rham algebra
$$\mathrm{DR}(A/k)=\operatorname{Sym}^{\mathbf L}_A(L_{A/k}[1]).$$
Its weight-$p$ component is $\bigwedge^p_A L_{A/k}[p]$. It has the internal
cochain differential of degree $+1$ and a mixed de Rham differential
$\epsilon$ of degree $-1$ and weight $+1$, with $d\epsilon+\epsilon d=0$
and $\epsilon^2=0$. For a derived stack, $\mathrm{DR}(F/k)$ is the homotopy
limit of these graded mixed complexes over all derived affine maps into $F$;
the construction uses derived cotangent complexes and is independent of
cofibrant resolution.

For a graded mixed complex $E$, its Hodge-completed weighted negative-cyclic
complex in weight $p$ has cochain degree $j$ term
$$\mathrm{NC}^{w}(E)(p)^j=\prod_{r\ge0}E^{j-2r}(p+r).$$
For $m=(m_r)_{r\ge0}$ of degree $j$, its differential is
$$(D m)_r=d m_r+\epsilon m_{r-1},\qquad m_{-1}=0.$$
Both summands belong to $E^{j+1-2r}(p+r)$, and $D^2=0$ follows from
$d^2=\epsilon^2=d\epsilon+\epsilon d=0$. This is the total differential in
$\operatorname{RHom}_{k[\epsilon]}(k(p),E)$; the completion is a product
over all higher weights, not a direct sum. For any cochain complex $E$ of
$k$-vector spaces, let $\tau_{\le0}E$ be its good truncation: it agrees with
$E$ in degrees below $0$, has $\ker(d:E^0\to E^1)$ in degree $0$, and is zero
in positive degrees. Define $|E|$ to be the underlying simplicial set of the
simplicial $k$-vector space obtained by applying the Dold–Kan correspondence
to the nonnegative chain complex $C_n=(\tau_{\le0}E)^{-n}$, $n\ge0$, with
differential inherited from $E$ ([[thm-dold-kan-equivalence-for-simplicial-modules]]).
Define the space of degree-$n$ $p$-forms and the space of closed degree-$n$
$p$-forms by
$$\mathcal A^p(F,n)=\operatorname{Map}_{\mathrm{QCoh}(F)} (\mathcal O_F,\bigwedge^p L_{F/k}[n]),\qquad \mathcal A^{p,\mathrm{cl}}(F,n)= \left|\mathrm{NC}^{w}(\mathrm{DR}(F/k))(p)[n-p]\right|.$$
The natural projection $\mathrm{NC}^{w}(E)(p)\to E(p)$ gives the underlying
form map $\mathcal A^{p,\mathrm{cl}}(F,n)\to\mathcal A^p(F,n)$.

For $p=2$, assume explicitly that $L_{F/k}$ is perfect in $\mathrm{QCoh}(F)$.
This hypothesis makes $T_{F/k}:=R\operatorname{Hom}_{\mathcal O_F}
(L_{F/k},\mathcal O_F)$ its dual and identifies a 2-form $\omega$ of degree
$n$ with its adjoint morphism
$$\Theta_\omega:T_{F/k}\longrightarrow L_{F/k}[n].$$
It is **nondegenerate** when this map is a quasi-isomorphism. An
**$n$-shifted symplectic structure** is a closed 2-form of degree $n$ whose
underlying form is nondegenerate. A pointwise or merely internally closed
pairing without a lift to $\mathcal A^{2,\mathrm{cl}}(F,n)$ is not an
$n$-shifted symplectic structure.

## Definition references

[[def-gts-derived-artin-stack-and-cotangent-complex]]

[[def-derived-scheme-and-cotangent-complex]]

[[thm-dold-kan-equivalence-for-simplicial-modules]]
