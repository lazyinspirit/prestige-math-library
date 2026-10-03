---
id: def-lkb-two-variable-covering-homomorphism
kind: definition
title: The two-variable covering homomorphism
status: draft
origin: pipeline
deps: [def-two-point-configuration-space-of-a-punctured-disk, def-based-loops-and-fundamental-group, def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 3: the homomorphism Phi: pi_1(C,c0) -> <q> + <t>, a = (b'-b)/2, Phi(alpha) = q^a t^b"
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 1.2, printed pp. 472-473: the winding-number definition of a and b, and the parity statement for b"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Definition

Let $C$ be the two-point configuration space of the punctured disk, with
basepoint $c_0=\{d_1,d_2\}$ and boundary-fixed action, of
[[def-two-point-configuration-space-of-a-punctured-disk]]. Let
$$\mathbb Z^2=\langle q\rangle\oplus\langle t\rangle$$
denote the free abelian group written multiplicatively with basis the two
letters $q,t$.

**The winding form.** Let $\alpha$ be a loop in $C$ at $c_0$
([[def-based-loops-and-fundamental-group]]). It can be written
$\alpha(s)=\{\alpha_1(s),\alpha_2(s)\}$ for continuous arcs $\alpha_1,\alpha_2$
in $D\setminus P$. The symmetric nonvanishing functions
$$W(\{x,y\})=\prod_{j=1}^{n}(x-p_j)(y-p_j),\qquad V(\{x,y\})=(x-y)^2$$
define closed loops $W\circ\alpha,V\circ\alpha$ in $\mathbb C^*$ even
when the mobile labels exchange. Define $a(\alpha)$ and $b(\alpha)$ as their
integer winding numbers, using continuous argument lifts on the compact
parameter interval. For piecewise smooth tracks this is equivalently
$$a(\alpha)=\frac{1}{2\pi i}\sum_{j=1}^{n}\left(\int_{\alpha_1}\frac{dz}{z-p_j}+\int_{\alpha_2}\frac{dz}{z-p_j}\right),\qquad b(\alpha)=\frac{1}{\pi i}\int_{\alpha_1-\alpha_2}\frac{dz}{z}.$$
The winding definition applies to arbitrary continuous loops; no differentiability
of $\alpha$ is presumed. The total puncture winding is $a$, and $b$ is the
mutual half-twist exponent, even for returning labels and odd for exchanged
labels. A loop with one mobile point going positively around a single puncture
in a small disk missing the other mobile point has $(a,b)=(1,0)$. Exchanging
the two mobile points by a positive half rotation in a small disk missing all
punctures gives $(a,b)=(0,1)$. Join these local configurations to $c_0$ by the
finite-buffer paths of the configuration-space definition; conjugating the
local loops does not alter winding numbers. Hence $\Phi$ is surjective, with
images $q$ and $t$, including when $n=1$.

**The exponent-sum form.** Ignoring the punctures turns $\alpha$ into a loop in
the space of unordered pairs of points of the disk, hence into a braid in $B_2$
([[def-braid-group-by-the-artin-presentation]]); let $b$ be its exponent of
$\sigma_1$. Adjoining the $n$ fixed punctures turns $\alpha$ into a loop of
unordered $(n+2)$-tuples in the disk; that loop is a braid in $B_{n+2}$, and
the exponent sum of that braid in the Artin generators $\sigma_1,\dots,
\sigma_{n+1}$ is written $b'$. Then $b'\equiv b\pmod 2$ and
$$a=\tfrac12(b'-b)\in\mathbb Z .$$
Equivalently, the parity statement is the relation $b'=2a+b$: each mobile–puncture difference occurs squared in the full
discriminant, while the fixed–fixed factors are constant and the mutual half-twist of the two mobile
points contributes exactly the parity of $b$.

**The homomorphism.** The **two-variable covering homomorphism** is
$$\Phi:\pi_1(C,c_0)\longrightarrow\mathbb Z^2,\qquad \Phi(\alpha)=q^{a}t^{b},\qquad a=\tfrac12\bigl(b'(\alpha)-b(\alpha)\bigr).$$
It is well defined and a homomorphism of groups: path-homotopy classes have
well-defined winding numbers and well-defined exponent sums, because the
defining relations of the Artin presentation preserve the total exponent sum, and both $a$ and $b$ are additive under concatenation of loops,
which is the product of [[def-based-loops-and-fundamental-group]]. Since the
integers $a$ and $b$ are determined by the class $[\alpha]$, the formula
defines a map; additivity of winding numbers and of exponent sums gives
$\Phi([\alpha][\beta])=\Phi([\alpha])\Phi([\beta])$. The case $n=1$ is
included, with $P=\{p_1\}$.

The cover classified by $\ker\Phi$ and the resulting LKB module are built from
this homomorphism on the same page; the variables $q$ and $t$ are the deck
generators used there.
