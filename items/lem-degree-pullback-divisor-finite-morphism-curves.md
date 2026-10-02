---
id: lem-degree-pullback-divisor-finite-morphism-curves
kind: lemma
title: "Fibres, pullbacks and degrees of divisors under a finite morphism of curves"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-dvr-is-a-pid
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-extension-degree-and-finite-extension
  - def-flat-morphism-schemes
  - def-nonconstant-morphism-curves-degree
  - def-order-codimension-one-rational-function
  - def-pullback-cartier-divisor
  - def-ramification-index-curve-map
  - lem-curve-closed-subsets-finite
  - lem-fibre-degree-sum-ramification-residue
  - lem-integral-finite-type-scheme-function-field
  - lem-pullback-cartier-divisor-line-bundle
  - thm-cartier-to-weil-divisor-normal-scheme
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-finite-morphism-integral-closed
  - thm-local-ring-smooth-curve-dvr
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the DVR and finite-morphism
suppliers. Let $f:C\to D$ be a nonconstant morphism of smooth proper
geometrically integral curves over a field $k$, with $n=\deg(f)$. Then $f$ is
finite and flat, so the pullback $f^*E$ of a Cartier (equivalently Weil)
divisor $E$ on $D$ is defined; for a closed point $q$ of $D$ one has
$$f^*[q]=\sum_{p\in f^{-1}(q)}e_p\,[p]$$
as a divisor on $C$, where $e_p$ is the ramification index of $f$ at $p$; and
for every divisor $E$ on $D$ one has $\deg_k(f^*E)=n\deg_k(E)$. Consequently,
for every invertible $\mathcal O_D$-module $M$ one has
$\deg(f^*M)=n\deg(M)$.

## Facts & Assumptions

**Given:** A field $k$; a nonconstant $k$-morphism $f:C\to D$ of smooth proper geometrically integral curves; $n=\deg(f)$; a closed point $q$ of $D$; a divisor $E$ on $D$; an invertible $\mathcal O_D$-module $M$.

[F1] On a smooth proper geometrically integral curve the closed points have
residue fields finite over $k$ and a divisor is a finite $\mathbb Z$-linear combination
of closed points, with degree $\deg_k D=\sum_x n_x[\kappa(x):k]$ an additive
function of the divisor. ([[def-degree-divisor-proper-curve]],
[[def-divisor-smooth-proper-curve]])

[F2] Under the Axiom of Choice, a nonconstant $k$-morphism $f:C\to D$ of
proper integral curves is surjective and finite; for smooth proper
geometrically integral curves the degree $\deg(f)=[k(C):k(D)]=n$ is a positive
integer, and the comorphism makes $k(C)$ a finite extension of $k(D)$.
([[thm-nonconstant-morphism-proper-curves-finite-surjective]],
[[def-nonconstant-morphism-curves-degree]], [[def-axiom-of-choice]])

[F3] At a closed point of either smooth curve the local ring is a discrete
valuation ring and hence a principal ideal domain; at the generic point the
local ring is the function field. Under the Axiom of Choice, every point of
either curve is closed or generic, and each curve has a unique generic point.
([[thm-local-ring-smooth-curve-dvr]], [[cor-dvr-is-a-pid]],
[[lem-curve-closed-subsets-finite]],
[[lem-integral-finite-type-scheme-function-field]])

[F4] For a flat morphism every Cartier divisor pulls back: on local equations
$f^*D$ is given by pulling back the equations, so $f^*(D+D')=f^*D+f^*D'$
whenever the pullbacks are defined, because sums use product equations and
pullback is multiplicative on equations. The Cartier-to-Weil cycle records at
a closed point the order of its local equation; the ramification index is
$e_p=\operatorname{ord}_p(f^*t_q)$ for a local uniformizer $t_q$ at
$q=f(p)$, independent of the chosen uniformizer.
([[def-cartier-divisor]], [[def-pullback-cartier-divisor]],
[[def-order-codimension-one-rational-function]],
[[def-ramification-index-curve-map]],
[[thm-cartier-to-weil-divisor-normal-scheme]],
[[thm-cartier-weil-divisors-curves-agree]])

[F5] Under the Axiom of Choice, for a nonconstant morphism $f:C\to D$ of
smooth proper geometrically integral curves and a closed point $q$ of $D$ one has
$\sum_{p\in f^{-1}(q)}e_p[\kappa(p):\kappa(q)]=n$, the fibre being finite; for
a tower of finite field extensions the degrees multiply,
$[\kappa(p):k]=[\kappa(p):\kappa(q)][\kappa(q):k]$.
([[lem-fibre-degree-sum-ramification-residue]],
[[def-extension-degree-and-finite-extension]])

[F6] The Axiom of Choice and its consequence Dependent Choice [F7, F10]
license the Cartier/Weil and line-bundle suppliers. On a smooth proper
geometrically integral curve the Cartier-to-Weil cycle map is an isomorphism
and the canonical map
$\operatorname{CaDiv}(C)/\operatorname{Prin}_C(C)\to\operatorname{Pic}(C)$,
$[D]\mapsto[\mathcal O_C(D)]$, is an isomorphism; consequently every
invertible sheaf is isomorphic to $\mathcal O_C(D)$ for a divisor $D$ well
defined modulo linear equivalence. When $f^*D$ is defined one has
$\mathcal O_C(f^*D)\cong f^*\mathcal O_D(D)$.
([[thm-cartier-weil-divisors-curves-agree]],
[[lem-pullback-cartier-divisor-line-bundle]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F8] Over a principal ideal domain, every torsion-free module is flat; this
criterion has no finite-generation hypothesis.
([[thm-over-a-pid-flat-is-equivalent-to-torsion-free]])

[F9] A finite morphism is a closed map; under the Axiom of Choice this follows
from universal closedness of finite morphisms.
([[thm-finite-morphism-integral-closed]])

[F10] The Axiom of Choice implies Dependent Choice, which is the choice
principle required for the Cartier-to-Weil cycle construction in [F4] and
[F6]. ([[thm-choice-implies-dependent-implies-countable-choice]])

[F11] A morphism of schemes is flat exactly when the induced module at every
source point is flat over the target local ring.
([[def-flat-morphism-schemes]])

[F12] On a normal proper curve every principal Weil divisor has $k$-degree zero, under AC and its consequence DC. This applies to the smooth curves here, whose local rings are DVRs or fields and hence normal. ([[thm-principal-divisor-degree-zero-proper-curve]])

## Proof

**Proof technique:** direct; establish flatness from the DVR structure of the
local rings, compute the pullback of a single closed point, and extend by
linearity to divisors and invertible sheaves.

1.1 By [F2] the morphism $f$ is surjective and finite and $n=[k(C):k(D)]\ge1$; the local rings of closed points on $C$ and $D$ are DVRs, the generic local rings are their function fields, and every point is generic or closed by [F3]. Divisors and their degrees are as in [F1]. [F1, F2, F3, F7, given]

1.2 (Flatness at a closed point.) Let $p\in C$ be closed and put $q=f(p)$. Since $f$ is finite [F2], it is a closed map by [F9]; hence $\{q\}=f(\{p\})$ is closed. The map $\mathcal O_{D,q}\to\mathcal O_{C,p}$ is the restriction of the injective function-field map $k(D)\hookrightarrow k(C)$ from [F2], and is therefore injective. As $\mathcal O_{C,p}$ is a domain, it is torsion-free as an $\mathcal O_{D,q}$-module. The source local ring is a DVR and hence a PID by [F3], so [F8] makes this module flat. No finite-generation assertion about the individual stalk is needed. [F2, F3, F7, F8, F9, given]

2.1 Dominance sends the generic point $\eta_C$ to $\eta_D$, so the stalk map is the field extension $k(D)\hookrightarrow k(C)$ by [F2]; its target is a flat $k(D)$-module. By [F3], every point of $C$ is either generic or closed, so this and step 1.2 cover every point. The stalkwise definition [F11] of flatness therefore makes $f$ flat. [F2, F3, F7, F11, step 1.2, given]

3.1 Because $f$ is flat, every Cartier divisor on $D$ pulls back to a Cartier divisor on $C$, and pullback is additive [F4]; since Cartier and Weil divisors agree on the smooth curves $C,D$ [F6], the pullback $f^*E$ is defined as a divisor on $C$ and satisfies $f^*(E+E')=f^*E+f^*E'$ for divisors $E,E'$ on $D$. [F4, F6, F7, F10, step 2.1]

4.1 (Pullback of a point.) In the Cartier representative of $[q]$, choose a neighbourhood $U$ of $q$ with a local equation $t$ whose germ is a uniformizer of $\mathcal O_{D,q}$, shrinking $U$ so its zero locus there is $q$; on $D\setminus\{q\}$ the local equation is $1$ [F4, F6]. These charts give $[q]$. The pullback uses equations $f^\#t$ over $f^{-1}U$ and $1$ over $f^{-1}(D\setminus\{q\})$ [F4]. Since $f(\eta_C)=\eta_D\ne q$, the fibre is a proper closed subset of $C$; [F3] says each of its points is closed. At each such $p$, the order of $f^\#t$ is $e_p$ by [F4]. At a closed point outside the fibre the pulled-back local equation is $1$, of order $0$. The Cartier-to-Weil cycle reads these local orders as coefficients [F4, F10], and the fibre is finite by [F2], so $f^*[q]=\sum_{p\in f^{-1}(q)}e_p[p]$. [F2, F3, F4, F6, F7, F10, step 3.1, given]

5.1 (Degree of the pullback of a point.) Using [F1] to evaluate the degree of the divisor displayed in step 4.1 and the tower law of [F5] for the finite extensions $\kappa(p)/\kappa(q)/k$, one has $\deg_k(f^*[q])=\sum_{p\in f^{-1}(q)}e_p[\kappa(p):k]=\sum_{p\in f^{-1}(q)}e_p[\kappa(p):\kappa(q)][\kappa(q):k]=n[\kappa(q):k]=n\deg_k([q])$, the third equality being the fibre-degree sum of [F5] and the last [F1]. [F1, F5, F7, step 4.1, given]

6.1 (Arbitrary divisors.) Write $E=\sum_{i=1}^m m_i[q_i]$ with closed points $q_i$ and nonzero integers $m_i$, a finite sum by [F1]; additivity of pullback [F4] together with step 3.1 gives $f^*E=\sum_im_if^*[q_i]$, and additivity of $\deg_k$ [F1] together with step 5.1 gives $\deg_k(f^*E)=\sum_im_i\deg_k(f^*[q_i])=n\sum_im_i\deg_k([q_i])=n\deg_k(E)$. [F1, F4, step 5.1, step 3.1, given]

7.1 (Invertible sheaves and their degrees.) Define $\deg(M)=\deg_k(E)$ when $M\cong\mathcal O_D(E)$. This is well-defined: [F6] says that two such divisors differ by a principal divisor, whose degree is zero by [F12]; the same reasoning applies on $C$. Let $M$ be an invertible $\mathcal O_D$-module; by [F6] there is a divisor $E$ on $D$ with $M\cong\mathcal O_D(E)$ and $\deg(M)=\deg_k(E)$, and $f^*M\cong f^*\mathcal O_D(E)\cong\mathcal O_C(f^*E)$ by [F6], so $\deg(f^*M)=\deg_k(f^*E)=n\deg_k(E)=n\deg(M)$ by step 6.1. [F6, F7, F10, F12, step 6.1, given]

8.1 The Axiom of Choice [F7] enters through the finite-morphism, curve-point, DVR and divisorial suppliers used above; [F10] supplies Dependent Choice where the Cartier-to-Weil cycle is used. Together steps 1.2, 2.1, 3.1, 5.1 and 6.1 prove all the claims. [F3, F7, F9, F10, step 2.1, step 4.1, step 6.1, step 7.1] ∎
