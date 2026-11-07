---
id: thm-local-hilbert-symbol-cup-product-norm-criterion
kind: theorem
title: The local Hilbert symbol is the Kummer cup product and detects local norms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
- def-local-hilbert-symbol-over-field-containing-roots-of-unity
- lem-local-hilbert-symbol-is-well-defined-and-bilinear
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-absolute-galois-group-of-a-local-field
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- def-local-galois-cohomology-cup-product
- lem-local-artin-character-invariant-pairing
- def-brauer-group-as-galois-cohomology
- def-local-invariant-map-of-the-brauer-group
- thm-local-artin-reciprocity-and-norm-index
- def-axiom-of-choice
- def-dependent-choice
- def-local-artin-reciprocity-map
proof_strategy: direct
axiom_use: The cup identity is proved choice-free from the literal supplied canonical
  map/invariant data using its defining finite-character property and explicit continuous
  cochains. It makes no choice-free existence claim. The norm branch retains its original
  explicit AC/DC local Artin kernel premise.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Romyar Sharifi, Algebraic Number Theory, Chapter 9 §§9.1–9.3
    url: https://math.ucla.edu/~sharifi/notes/algnum-ch09.html
    locator: Theorem 9.1.15, Definition 9.3.2 and Proposition 9.3.11, including the
      complete cocycle comparison, lines 221–236 and 393–593.
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter III §4
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem 4.4 and Remark 4.5, printed pp.112–114.
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second
      edition, Chapter IV §5.1
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Proposition (5.1)(5), printed pp.143–144.
verification: {}
---


## Statement

Let $K$ be a complete discretely valued field with finite residue field,
let $K_s$ be a separable closure, and let $G_K=\operatorname{Gal}(K_s/K)$.
Let $K^{\mathrm{ab}}$ be the maximal abelian extension in $K_s$ and
$\widehat{K^\times}$ the profinite completion of $K^\times$. Let $n\ge1$,
assume $p\nmid n$ if $\operatorname{char}K=p>0$, and suppose
$\mu_n\subseteq K$, where $\mu_n$ denotes the group of $n$-th roots of unity in $K_s$. Let $\operatorname{rec}_K:\widehat{K^\times}\to
\operatorname{Gal}(K^{\mathrm{ab}}/K)$ be the local Artin map normalized so a uniformizer maps to arithmetic
Frobenius on every finite unramified extension. For $a,b\in K^\times$, let $\bar a$ be the image of $a$ in
$\widehat{K^\times}$, choose $\beta\in K_s$ with $\beta^n=b$, and define
$$
(a,b)_{K,n}=\frac{\operatorname{rec}_K(\bar a)(\beta)}{\beta}.
$$
For $c\in K^\times$, choose $\gamma_c\in K_s$ with $\gamma_c^n=c$;
the Kummer class $\kappa(c)\in H^1_{\mathrm{cts}}(G_K,\mu_n)$ is represented
by the continuous cocycle
$\sigma\mapsto\sigma(\gamma_c)/\gamma_c$. Here
$H^i_{\mathrm{cts}}$ denotes continuous Galois cohomology. For continuous
$1$-cocycles $x,y$, the cup cocycle is
$(x\smile y)(\sigma,\tau)=x(\sigma)\otimes\sigma y(\tau)$. Fix a primitive
root $\zeta\in\mu_n$ and let
$$
\iota_\zeta:\mu_n\otimes_{\mathbb Z}\mu_n\to\mu_n,
\quad \zeta^r\otimes\zeta^s\mapsto\zeta^{rs},
\qquad
\rho_{\zeta,n}:\tfrac1n\mathbb Z/\mathbb Z\to\mu_n,
\quad r/n+\mathbb Z\mapsto\zeta^r.
$$
Let $\operatorname{Br}(K)=H^2_{\mathrm{cts}}(G_K,K_s^\times)$ be the Brauer
group, let $\operatorname{inv}_K:\operatorname{Br}(K)\to\mathbb Q/\mathbb Z$
be the supplied canonical local invariant isomorphism, and define $\eta_{\zeta,K}$ as
the composite of the map on $H^2$ induced by $\iota_\zeta$, the map
$H^2_{\mathrm{cts}}(G_K,\mu_n)\to\operatorname{Br}(K)[n]$ induced by the
inclusion $\mu_n\hookrightarrow K_s^\times$, the invariant $\operatorname{inv}_K$,
and $\rho_{\zeta,n}$. Then
$$
(a,b)_{K,n}=\eta_{\zeta,K}\bigl(\kappa(b)\smile\kappa(a)\bigr)
\qquad(a,b\in K^\times).
$$
This cup-product identity uses the supplied reciprocity and invariant data. If
AC and DC hold and the supplied local Artin theorem says that the kernel of
$K^\times\to\operatorname{Gal}(K(\beta)/K)$ is the norm group
$N_{K(\beta)/K}(K(\beta)^\times)$, then also
$$
(a,b)_{K,n}=1
\quad\Longleftrightarrow\quad
a\in N_{K(\beta)/K}\bigl(K(\beta)^\times\bigr),
$$
where $\beta^n=b$ as chosen above and the field norm is the product of
conjugates under $\operatorname{Gal}(K(\beta)/K)$.

## Statement references

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-local-galois-cohomology-cup-product]]

[[lem-local-artin-character-invariant-pairing]]

[[def-brauer-group-as-galois-cohomology]]

[[def-local-invariant-map-of-the-brauer-group]]

[[def-class-formation]]

[[thm-local-class-formation-for-finite-residue-local-field]]

[[thm-tate-nakayama-for-class-formations]]

[[thm-local-artin-reciprocity-and-norm-index]]

[Romyar Sharifi, *Algebraic Number Theory*, Chapter 9](https://math.ucla.edu/~sharifi/notes/algnum-ch09.html)

[J. S. Milne, *Class Field Theory*, Chapter III §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV §5.1](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** Exactly the supplied field, closure, roots, canonical local Artin
map and normalized invariant in the Statement. The identity branch assumes
these objects as data; it does not instantiate their AC existence theorem.
The norm branch additionally has the original AC/DC and Artin-kernel premise.

[F1] The supplied symbol is defined by the action on an $n$-th root of its
second argument, independently of that root.
[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[F2] Under AC/DC the canonical finite local Artin map has norm kernel.
[[thm-local-artin-reciprocity-and-norm-index]]

[F3] The supplied Brauer/invariant notation has its literal cohomological
meaning from the Statement; no unqualified existence theorem is inferred.
[[def-brauer-group-as-galois-cohomology]]
[[def-local-invariant-map-of-the-brauer-group]]

[F6] The field has the stated absolute Galois group and continuous
cohomology is normalized continuous cochains with its explicit differential.
[[def-local-field-valuation-ring-uniformizer-and-residue-field]]
[[def-absolute-galois-group-of-a-local-field]]
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F7] The cup product is the normalized continuous inhomogeneous formula.
Only that cochain formula is used, not a derived connecting compatibility
clause with additional choice assumptions.
[[def-local-galois-cohomology-cup-product]]

[A1] AC/DC are used only in the original norm branch; all identity-branch
calculations below use the literally supplied data and explicit finite
cochains, without selecting an infinite family.
[[def-axiom-of-choice]] [[def-dependent-choice]]

[A2] The supplied local Artin map is canonical in the precise Definition:
for each finite-order continuous character $\chi$ it satisfies
$\operatorname{inv}_K(a\smile\delta\chi)=\chi(\operatorname{rec}_K(a))$.
This is a property of the supplied map, not an inference of that map's
choice-free existence from its unramified normalization.
[[def-local-artin-reciprocity-map]]

## Proof

**Proof technique:** apply the finite-character property of the supplied
canonical map, then compare the explicit normalized continuous cocycles.

**Given:** Exactly the original supplied data; AC/DC only in the norm branch.

1.1 For any chosen $\gamma_c^n=c$, the map
$\kappa(c)(\sigma)=\sigma(\gamma_c)/\gamma_c$ is continuous with values
in $\mu_n$, and the multiplicative cocycle identity holds by applying
$\sigma\tau$ to $\gamma_c$. Since $\mu_n\subset K$, the action on
these values is trivial. Replacing the root by $\xi\gamma_c$ with
$\xi\in\mu_n$ leaves the cocycle unchanged. This is finite algebra
with the supplied root, not a family-choice construction.
[F6, given, algebra]

1.2 Put $L=K(\gamma_b)$ and define its finite character $\chi_b$ by
$\kappa(b)(\sigma)=\zeta^r$ when $\chi_b(\sigma)=r/n+\mathbb Z$.
It is a homomorphism because the $\mu_n$ action is trivial, and its
inflation is continuous. A lift using the uniquely specified residues
$0,\ldots,n-1$ computes its Bockstein by the continuous differential;
composition with the finite quotient is exactly inflation of that
Bockstein. Thus the defining property [A2] of the supplied canonical map
gives
$$\operatorname{inv}_K(a\smile\delta\chi_b)
=\chi_b(\operatorname{rec}_K(\bar a)|_L).$$
Applying $\rho_{\zeta,n}$ gives the symbol $(a,b)_{K,n}$ by [F1].
This invokes the literal property in the Definition, not the AC-only
existence proof of the supplied map or the AC-only character lemma.
[A2, F1, F6, given, construct, algebra]

1.3 To compare that invariant with the Kummer cup product, put
$\alpha=\gamma_a$, and define the continuous exponent functions
$x,y:G_K\to\{0,\ldots,n-1\}$ uniquely by
$\kappa(a)(\sigma)=\zeta^{x_\sigma}$ and
$\kappa(b)(\sigma)=\zeta^{y_\sigma}$. They are continuous because the
Kummer cocycles have finite discrete image; the representatives are
specified, so no choice of an infinite family of lifts is used. Let
$$
q(\sigma,\tau)=\frac{y_\sigma+y_\tau-y_{\sigma\tau}}{n}\in\mathbb Z,
\qquad c(\sigma,\tau)=a^{q(\sigma,\tau)}.
$$
Here $q$ represents $\delta(\chi_b)$, and $c$ represents
$a\smile\delta(\chi_b)$ with the coefficient pairing $(a,m)\mapsto a^m$.
Write $A$ and $B$ for the two cup cocycles after applying $\iota_\zeta$
and then $\mu_n\hookrightarrow K_s^\times$:
$$
A(\sigma,\tau)=\zeta^{x_\sigma y_\tau},\qquad
B(\sigma,\tau)=\zeta^{y_\sigma x_\tau}.
$$
For the continuous normalized $1$-cochain
$t(\sigma)=\alpha^{y_\sigma}$, the multiplicative differential gives
$$
\begin{aligned}
(\delta t)(\sigma,\tau)
&=\frac{t(\sigma)\,\sigma t(\tau)}{t(\sigma\tau)}\\
&=\zeta^{x_\sigma y_\tau}
  \alpha^{y_\sigma+y_\tau-y_{\sigma\tau}}
 =A(\sigma,\tau)c(\sigma,\tau).
\end{aligned}
$$
Thus $[c]=-[A]$, rather than $[A]$. The swap sign is also proved at
cochain level with the same specified coefficient pairing: the continuous
normalized cochain $h(\sigma)=\zeta^{x_\sigma y_\sigma}$ satisfies
$$
(\delta h)(\sigma,\tau)
=\zeta^{-x_\sigma y_\tau-y_\sigma x_\tau}
=(A(\sigma,\tau)B(\sigma,\tau))^{-1}.
$$
Indeed $x_{\sigma\tau}\equiv x_\sigma+x_\tau\pmod n$ and likewise for
$y$, and the $G_K$-action on $\mu_n$ is trivial. Consequently
$\delta(th)=cB^{-1}$ and $[c]=[B]$. This is the required degree-one
sign-swap identity after $\iota_\zeta$, proved without importing a general
graded-commutativity theorem. For $n=1$ the exponent functions and $q$
are zero and all these cochains are identically $1$, so the same identities
hold. By step1.2 and the literal character property [A2], this cochain
identity gives the displayed Hilbert-symbol formula. No existence of the
supplied canonical map is proved or required in this choice-free
calculation. [A2, F3, F6, F7, step 1.1, step 1.2, algebra]

2.1 In the norm branch, assume exactly its original AC/DC and supplied
Artin-kernel premise. The equality $(a,b)_{K,n}=1$ says precisely that
$\operatorname{rec}_K(\bar a)$ fixes $\gamma_b$, hence acts trivially on
$K(\gamma_b)$. Its kernel is the norm group by that premise, also supplied
by [F2] under AC/DC. This proves the stated norm equivalence with its full
original qualification. [A1, F1, F2, step 1.1, given, algebra] ∎
