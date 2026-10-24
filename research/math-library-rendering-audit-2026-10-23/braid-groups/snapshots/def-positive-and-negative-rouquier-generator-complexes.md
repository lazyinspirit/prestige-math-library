---
id: def-positive-and-negative-rouquier-generator-complexes
kind: definition
title: "The positive and negative Rouquier generator complexes"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-reflection-realization-and-polynomial-ring, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "§3.1.2 and §3.2.1 (PDF p. 6), §3.2.4 (PDF p. 9): the complexes $F_s$ and $F_s^{-1}$"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "§3.1, Lemma 3.8 and formula (3.3), printed pp. 541-545"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

**The setting.** Keep $R=\mathbb Q[x_1,\ldots,x_n]$ with $\deg x_i=2$, the
place-permutation action of $S_n$, the balanced roots
$\alpha_i=\varepsilon_i(x_i-x_{i+1})$ with $\varepsilon_i=(-1)^{i-1}$ and the
graded $(R,R)$-bimodules $B_i=R\otimes_{R^{s_i}}R(1)$ of
[[def-type-a-soergel-bimodule-for-a-simple-reflection]]; recall that
$1\otimes1\in B_i$ has degree $-1$ and $1\otimes\alpha_i$ has degree $1$, that
$B_i$ is generated as an $(R,R)$-bimodule by $1\otimes1$, and that $R=R^{s_i}\oplus\alpha_iR^{s_i}$ with
$s_i(\alpha_i)=-\alpha_i$
([[def-type-a-reflection-realization-and-polynomial-ring]],
[[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

**The positive generator complex.** For $1\le i\le n-1$ let $F_i$ be the
bounded cochain complex of graded $(R,R)$-bimodules
$$F_i:=\bigl[\;B_i\xrightarrow{\ \varepsilon_i\ }R(1)\;\bigr],$$
with $B_i$ in cohomological degree $0$, $R(1)$ in cohomological degree $1$ and
all other terms zero, where $\varepsilon_i:B_i\to R(1)$ is the
multiplication map $\varepsilon_i(r\otimes r')=rr'$, i.e. the degree-zero
bimodule map determined by $\varepsilon_i(1\otimes1)=1$ and
$\varepsilon_i(1\otimes\alpha_i)=\alpha_i$.

**The negative generator complex.** Let $F_i^{-1}$ be the bounded cochain
complex of graded $(R,R)$-bimodules
$$F_i^{-1}:=\bigl[\;R(-1)\xrightarrow{\ \eta_i\ }B_i\;\bigr],$$
with $R(-1)$ in cohomological degree $-1$, $B_i$ in cohomological degree $0$ and
all other terms zero, where $\eta_i:R(-1)\to B_i$ is the bimodule map
$\eta_i(1)=\alpha_i\otimes1+1\otimes\alpha_i$.

**Well-definedness of the differentials.** The map $\varepsilon_i$ descends
from the multiplication $R\otimes_{\mathbb Q}R\to R$ because
$\varepsilon_i(ra\otimes r')=rar'=\varepsilon_i(r\otimes ar')$ for $a\in R^{s_i}$
and $R$ is commutative; it is left and right $R$-linear and homogeneous of
degree zero, since $1\otimes1\mapsto1$ matches the degrees $-1$ of $B_i$ and of
the generator of $R(1)$, and $1\otimes\alpha_i\mapsto\alpha_i$ matches the
degree $1=\deg(\alpha_i)-1$ on both sides. For $\eta_i$, the bimodule map
$R\to B_i$ sending $1$ to the class of $x_i-x'_{i+1}$ is well defined: the
products $(x_i-x'_{i+1})(x_i-x'_i)$ and
$(x_i-x'_{i+1})(x_{i+1}-x'_{i+1})$ vanish in $B_i$ by the explicit computation
of GKS Lemma 3.8, while for $a\notin\{i,i+1\}$ the factor $x_a-x'_a$ is already
a defining relation of $B_i$, so the element annihilates the kernel ideal of the
multiplication $R\otimes_{\mathbb Q}R\to R$, and the assignment $1\mapsto x_i-x'_{i+1}$
extends to a well-defined $R$-bimodule map. The value of that map at $1$ times
the unit $2\varepsilon_i$ is $\eta_i(1)$, because
$$1\otimes(x_i-x_{i+1})+(x_i-x_{i+1})\otimes1=2(x_i-x'_{i+1})$$
in $B_i$ (GKS Lemma 3.8, using $x_i+x_{i+1}=x'_i+x'_{i+1}$) and
$\alpha_i=\varepsilon_i(x_i-x_{i+1})$; a unit multiple of a well-defined
bimodule map is a well-defined bimodule map, so $\eta_i$ is well defined. Its
value $\eta_i(1)$ is homogeneous of degree $1$, matching the degree of
$1\in R(-1)$, so $\eta_i$ is a degree-zero bimodule map. Both complexes are
concentrated in two adjacent cohomological
degrees, so $d^2=0$ holds trivially and each of $F_i,F_i^{-1}$ is a bounded
cochain complex of graded $(R,R)$-bimodules in the sense of
[[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]].

**Size and consequences.** The bimodules $R$, $R(1)$ and $R(-1)$ are free of
rank one on both sides and $B_i$ is free of rank two on both sides
([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]], the bases
being $\{1\otimes1,1\otimes\alpha_i\}$ on the left and
$\{1\otimes1,\alpha_i\otimes1\}$ on the right). Every term of $F_i$ and of
$F_i^{-1}$ is therefore finite free, hence finite graded projective, as a left
$R$-module and as an underlying right $R$-module. Applying
[[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]
with the commutative ring $\mathbb Q$ and $A=B=R$: the signed totalization with
$F_i$ is an exact triangulated functor on bounded complexes of finite graded
projective $R$-modules, preserves quasi-isomorphisms between bounded complexes,
and descends to the derived tensor functor $F_i\otimes_R^{\mathbf L}-$ on
$D^b(R\text{-grmod})$; the same statements hold with $F_i^{-1}$ in place of
$F_i$. The right-tensor construction $-\otimes_RF_i$ is defined separately by
signed totalization, and its derived version uses the same two-sided
freeness. Commutativity of $R$ does not assert a symmetry between tensor
products of arbitrary $(R,R)$-bimodules.

**Recorded convention.** The complex $F_i$ is the library normalization of
Rouquier's positive complex $F_s=[A\otimes_{A^s}A\to A]$, in which $A$ sits in
degree $1$ and the differential is multiplication: in the library external
shift $(r)$ with $M(r)_d=M_{d+r}$ one has $F_i=T_i(1)$ and
$F_i^{-1}\cong T_i^{-1}(-1)$ for the GKS complexes
$T_i=[B_i(-1)\to R]$, $T_i^{-1}=[R\to B_i(1)]$ of formula (3.3). The GKS negative differential sends $1$ to
$x_i-x'_{i+1}$, whereas ours is $2\varepsilon_i$ times that map.
The chain isomorphism $F_i^{-1}\to T_i^{-1}(-1)$ is multiplication by
$2\varepsilon_i$ in degree $-1$ and the identity in degree $0$.
The internal shifts cancel in inverse pairs and agree on the two sides of
each positive braid relation. The sign $\varepsilon_i$
in $\alpha_i=\varepsilon_i(x_i-x_{i+1})$, and with it the sign of $\eta_i$, is
a unit of $\mathbb Q$; the homotopy classes of the complexes do not depend on
the choice of balanced root.
