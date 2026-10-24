---
id: ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations
kind: example
title: The coinvariant algebra of $S_2$ and $S_3$ as graded regular representations
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-the-coinvariant-algebra-of-a-finite-weyl-group,
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle,
       lem-the-harmonic-complement-of-the-coinvariant-algebra,
       thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation,
       lem-weyl-coinvariant-hilbert-series-has-order-w-dimension,
       def-axiom-of-choice,
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 1.1: D_e = C and D_{w_0} = C[l(w_0)], the beginning of the description of the modules over the coinvariant algebra (preprint pp. 3-4)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Part 4, Section 10 and Remark 4.20(2): V(Delta_w) = C and V(L_w) = 0 unless w = w_0 (printed pp. 10-11)"
---

## Example

Assume the Axiom of Choice, inherited from the published items used. We
work over $\mathbb k=\mathbb C$ and compute the coinvariant algebra of
[[def-the-coinvariant-algebra-of-a-finite-weyl-group]] in the two smallest
cases and read off its graded decomposition, checking the general theorem
[[thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation]]; the
example is a verification in small rank and is not used as evidence for the
general statement.

**The case $W=S_2$.** Here $r=1$, the auxiliary polynomial ring is
$\mathbb k[x]$ with the transposition acting by $x\mapsto-x$, and the basic invariant is $x^2$, so
$$C=\mathbb k[x]/(x^2)$$ with $\deg x=2$ in the page normalization and
$\deg x=1$ for the classical Hilbert series. The Hilbert series is therefore
$1+t^2$ in page degrees (equivalently $1+t$ in classical degrees), agreeing
with $\prod_i(1+t^2+\cdots+t^{2(d_i-1)})$ for the single basic degree $d_1=2$
of [[lem-weyl-coinvariant-hilbert-series-has-order-w-dimension]]. The
degree-zero piece $C_0=\mathbb k$ is the trivial representation, and the
one-dimensional top piece $C_2=\mathbb k x$ is the sign representation, so $C$
is the regular representation of $S_2$ with graded multiplicities one for the
trivial and one for the sign module.

**The case $W=S_3$.** Use the auxiliary permutation model of
[[def-the-coinvariant-algebra-of-a-finite-weyl-group]]:
$$C=\mathbb k[x_1,x_2,x_3]/(e_1,e_2,e_3),\qquad e_1=x_1+x_2+x_3,\ e_2=x_1x_2+x_1x_3+x_2x_3,\ e_3=x_1x_2x_3,$$
with $S_3$ permuting the variables. In classical degrees the basic degrees are
$1,2,3$, so the Hilbert series is
$$\frac{(1-t)(1-t^2)(1-t^3)}{(1-t)^3}=(1+t)(1+t+t^2)=1+2t+2t^2+t^3,$$
and in the page normalization, where each variable has degree $2$, it becomes
$(1+t^2)(1+t^2+t^4)=1+2t^2+2t^4+t^6$. The graded pieces have dimensions
$1,2,2,1$ in degrees $0,2,4,6$.

**Graded pieces as $S_3$-modules.** Identify $C$ with the coinvariant algebra of
the two-dimensional reflection representation $\mathfrak h\subset\mathbb k^3$.
The degree-zero piece $C_0$ is the trivial module. The degree-two piece $C_2$
is spanned by the images of $x_1,x_2,x_3$ modulo $e_1$; these span a
two-dimensional space on which $S_3$ acts as the standard reflection
representation. Put $a=x_1$, $b=x_2$, $x_3=-a-b$. The relations are
$a^2+ab+b^2=0$ and $a^2b+ab^2=0$, so $b^3=0$ and
$C_6$ is spanned by the nonzero class $ab^2$ (its nonvanishing also follows
from the Hilbert series). The Vandermonde reduces to $-6ab^2$, so it spans
$C_6$ and carries the sign character. The perfect multiplication pairing
$C_2\times C_4\to C_6$ from
[[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]]
identifies $C_4$ with $C_2^*\otimes\mathrm{sign}$. The standard reflection
representation is self-dual: the invariant coordinate dot product restricts
nondegenerately to the sum-zero plane. Hence $C_4$ is standard tensor sign. Thus
$$C_0=\text{trivial},\quad C_2=\text{standard},\quad C_4=\text{standard}\otimes\text{sign},\quad C_6=\text{sign},$$
the graded lift of the regular representation, with graded multiplicities
$1$ for the trivial module, $t^6$ for the sign module and $t^2+t^4$ for the
two-dimensional standard module.

**Character check.** By
[[thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation]] the
graded character is
$$\operatorname{HTr}(C,t)(w)=\prod_{i=1}^r(1-t^{2d_i})\det(1-t^2w\mid\mathfrak h^*)^{-1}.$$
For a transposition in $S_3$ the eigenvalues on $\mathfrak h^*$ are $1,-1$, so
$\det(1-t^2w)=(1-t^2)(1+t^2)=1-t^4$ and the quotient is
$(1-t^4)(1-t^6)/(1-t^4)=1-t^6$, matching the direct sum
$1+0\cdot t^2+0\cdot t^4+(-1)t^6$. For a three-cycle the eigenvalues are the
primitive cube roots $\omega,\omega^2$, so $\det(1-t^2w)=1+t^2+t^4$ and the
quotient is $(1-t^4)(1-t^6)/(1+t^2+t^4)=(1-t^2)(1-t^4)=1-t^2-t^4+t^6$, matching
$1+(-1)t^2+(-1)t^4+t^6$. At $w=1$ the quotient is
$1+2t^2+2t^4+t^6$ and its value at $t=1$ is $6=|S_3|$. In both cases the
graded character at $t=1$ is the character of the regular representation, and
the sum of graded multiplicities times dimensions is
$1+2+2+1=6=|W|$, respectively $1+1=2=|S_2|$, as the general theorem asserts.
