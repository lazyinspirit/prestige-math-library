---
id: thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial
kind: theorem
title: "Khovanov-Rozansky homology categorifies the HOMFLYPT polynomial"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps: [def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series, def-homflypt-polynomial-from-the-hecke-markov-trace, def-the-homflypt-coefficient-ring, thm-the-homflypt-skein-relation, thm-the-hecke-trace-construction-is-an-oriented-link-invariant, def-axiom-of-choice, def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-positive-and-negative-khovanov-rozansky-crossing-complexes, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type, lem-khovanov-rozansky-braid-oriented-kink-shifts, thm-markings-do-not-change-the-khovanov-rozansky-complex, thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a, thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three, lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation, thm-markovs-closed-braid-equivalence-theorem, thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift, thm-alexanders-closed-braid-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), formulas (2)-(5), (12)-(14), (20), (28)-(30), Theorems 1-2 and the proof of Theorem 2, printed pp. 1388-1389, 1393-1396, 1397-1398 and 1423-1424"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), the normalized series and formula (7), printed p. 10, and section 2, subsection 7, printed pp. 35-36; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the stated
Hilbert-Serre rationality, the Alexander/Markov passage to oriented links,
and the Hecke comparison. Let $D$ have a nonempty braid closure, so $s(D)\ge1$.
Let $C_{\mathrm{v2}}(D)$ be the complex of
[[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], and let
$C_{\mathrm{pub}}^{\mathrm{raw}}(D)$ be the complex formed from the published
half-integer crossing cones (12)-(13) of Khovanov-Rozansky II. If $s(D)$ is
the number of strands in the braid whose closure is $D$, define the published
grading-corrected complex by
$$C_{\mathrm{pub}}(D):=C_{\mathrm{pub}}^{\mathrm{raw}}(D)\{s(D)/2,s(D)/2\}[s(D)/2].$$
Put $e=|D|_+-|D|_-$ and $r=(s(D)-e)/2$. The source-cone regrading is
$$C_{\mathrm{pub}}(D)=C_{\mathrm{v2}}(D)\{r,r\}[r].$$
Write $H^j_{k,l}(D)$ for the trigraded cohomology of $C_{\mathrm{pub}}(D)$ and
put
$$\langle D\rangle_{\mathrm{pub}}:=\sum_{j,k,l}(-1)^{j+k}t^{2k}q^{k+l}\dim_{\mathbb Q}H^j_{k,l}(D).$$
Also write $\langle D\rangle_{\mathrm{v2}}$ for the Euler characteristic of
the uncorrected integer-graded cohomology of $C_{\mathrm{v2}}(D)$.

Then:

**(1) Published normalization.** Every $H^j_{k,l}(D)$ is finite dimensional. The published grading correction
makes the termwise-cohomology complex $CH_{\mathrm{pub}}(D)$, with its inner
parity labels forgotten, invariant under braid Markov moves. If inner parity
is retained, the invariant factorization complex is instead
$\Pi^{\lfloor r\rfloor}C_{\mathrm{pub}}(D)$. Its Euler characteristic satisfies
$\langle D\rangle_{\mathrm{pub}}=F(D)/(1-t^2)$, where $F$ is the multiplicative
HOMFLYPT function: the unique oriented-link invariant with
$F(L_1\sqcup L_2)=F(L_1)F(L_2)$, skein relation
$tF(L_+)-t^{-1}F(L_-)=-(q-q^{-1})F(L_0)$ and
$F(\text{unknot})=\frac{t^{-1}-t}{q-q^{-1}}$.

**(2) arXiv v2 normalization.** In the integer grading of
[[def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series]] the same
data are normalized by the series $\widetilde F$ of that item:
$$\widetilde F(D)=\sqrt\alpha^{\,|D|_+-|D|_--s(D)+1}\langle D\rangle_{\mathrm{v2}},\qquad \alpha=-t^{-1}q^{-1}.$$
It is invariant under all Markov moves and has unknot value
$\alpha/(1-q^{-2})$. Precisely, under $t_{\mathrm{v2}}=-t^2q$,
$q_{\mathrm{v2}}=q$ and the choice $\sqrt\alpha=(tq)^{-1}$,
$$F(D)=(1-t^2)tq\,\widetilde F(D)(-t^2q,q).$$
This is the v2 form of the same HOMFLYPT function. The v2
section 1, section 7, and formula (7) displays have a recorded
$q\leftrightarrow q^{-1}$ sign discrepancy in the elimination step; the
published formulas (3), (4), and (28)-(30) are mutually consistent.

**(3) AC-conditional comparison with the Hecke-Markov normalization.** Assume
the Axiom of Choice for the Hecke-trace oriented-link-invariance theorem
([[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]]). Let $R$ be the
coefficient ring of [[def-the-homflypt-coefficient-ring]], put
$T=\mathbb Z[q^{\pm1},t^{\pm1},(q-q^{-1})^{-1},(t^2-1)^{-1}]$, let
$\delta=\frac{t^{-1}-t}{q-q^{-1}}$, and let $P$ be the Hecke-Markov invariant
of [[def-homflypt-polynomial-from-the-hecke-markov-trace]]. The assignments
$v\mapsto q^{-2}$, $s\mapsto q^{-1}$, $u\mapsto t^{-1}q$,
$z\mapsto\frac{(q^2-1)t^2}{q^2(1-t^2)}$ satisfy $s^2=v$ and $vzu^2=z+1-v$,
hence define a ring homomorphism $\varphi\colon R\to T$ with
$\varphi(l)=t^{-1}$, $\varphi(m)=q^{-1}-q$ and $\varphi(\alpha)=\delta$. Under
$\varphi$ the skein relation $l^{-1}P(L_+)-lP(L_-)=mP(L_0)$ of
[[thm-the-homflypt-skein-relation]] becomes exactly the relation of (1); and
the unknot normalization gives $F=\delta\cdot\varphi(P)$, where
$\delta=\frac{t^{-1}-t}{q-q^{-1}}$; hence
$$\langle D\rangle_{\mathrm{pub}}=\frac{\delta}{1-t^2}\,\varphi\bigl(P(\widehat D)\bigr).$$

Caveats: half-integer shifts extend the indexing of the component modules and
outer complex; they do not themselves reverse inner parity. The source
suppresses that parity (printed p. 1391), whereas it is explicit in this page's
factorization category. The published formula (5) prints the opposite unknot
sign, $(t-t^{-1})/(q-q^{-1})$; our $F$ uses the sign forced by formula (3),
the computed unknot Euler series (printed p. 1424), and the unlink computation
below. The Hecke comparison is made in the published normalization; the v2
series uses the specified integer-grading and square-root conventions; $\varphi$ is not
asserted to be injective. The local crossing, stabilization and unlink calculations are choice-free.
AC is used for rationality through the normalized Euler Definition, and for
Alexander/Markov oriented-link descent in parts (1)-(2), as well as the
Hecke-trace supplier in part (3). The zero-strand raw complex is separately
$C_{\mathrm{v2}}(\varnothing)=C_{\mathrm{pub}}(\varnothing)=\mathbb Q[a]$; its
v2 Euler is $(1-t^2)^{-1}$ and its published-weight Euler is
$(1-t^4q^2)^{-1}$. Neither raw empty value is asserted to be a HOMFLYPT
empty-link normalization.

## Facts & Assumptions

**Given:** AC, a nonempty braid closure $D$, the v2 complex $C_{\mathrm{v2}}(D)$, the published raw and corrected complexes $C_{\mathrm{pub}}^{\mathrm{raw}}(D)$ and $C_{\mathrm{pub}}(D)$, and the normalized series $\widetilde F$ of the definition item.

[F1] $C_{\mathrm{v2}}(D)$ is the integer-graded complex of [[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], with finite tensor products of local factorizations and termwise cohomology on which $a$ acts trivially. Its Euler characteristic is $\langle D\rangle_{\mathrm{v2}}=\sum_{j,k,l}(-1)^jt^kq^l\dim_{\mathbb Q}H^j_{k,l}(D)$ ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]).

[F2] $\widetilde F(D)=\sqrt\alpha^{\,|D|_+-|D|_--s(D)+1}\langle D\rangle_{\mathrm{v2}}$ with $\alpha=-t^{-1}q^{-1}$ in $T_0=\mathbb Z[q^{\pm1},t^{\pm1},\alpha^{\pm1/2},(1-q^2)^{-1}]$, and the exponent is unchanged by a positive stabilization and decreases by $2$ under a negative stabilization ([[def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series]]).

[F3] Each resolution graph has finitely many rows and variables; after contractible rows and eliminable internal variables are removed, its cohomology is computed by a finite Koszul complex over a polynomial ring in finitely many remaining mark variables, and $a$ acts trivially ([[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]). Each fixed bidegree of such a complex is finite dimensional.

[F4] In the v2 integer grading the type IA kink has inner parity reversal $\Pi$ in addition to the shift $\{1,1\}[1]$, and type IB has neither ([[lem-khovanov-rozansky-braid-oriented-kink-shifts]]). In the published grading, the braid-closure correction is $\{s(D)/2,s(D)/2\}[s(D)/2]$ and the Reidemeister I shift for the corresponding one-strand closure is $\{1/2,1/2\}[1/2]$ (published formulas (14) and (20)); These local shifts, rather than an invocation of the source Theorem 1, supply the stabilization calculation below.

[F5] Marking changes alter $C(D)$ only by chain homotopy equivalences with no grading shift ([[thm-markings-do-not-change-the-khovanov-rozansky-complex]]).

[F6] The braid-like Reidemeister IIa move gives an isomorphism of complexes with no shift ([[thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a]]).

[F7] The braid-like Reidemeister III move with coherent orientations gives an isomorphism of complexes with no shift ([[thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three]]).

[F8] Conjugation of braid words gives an isomorphism of complexes with no shift, hence unchanged trigraded cohomology ([[lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation]]).

[F9] In the v2 grading, the positive crossing is the cone of $\chi_0$ with source shift $\{0,2\}$ and the negative crossing is the cone of $\chi_1$ with overall shift $\{0,-2\}$; the maps have bidegrees $(0,2)$ and $(0,0)$ ([[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]). The published cones use the half-integer shifts (12)-(13) of the cited source.

[F10] Assume AC. The Hecke-Markov construction defines an oriented-link invariant $P$ with $P(\text{unknot})=1$; it has coefficient ring $R$ with units $v,z,s,u$ satisfying $s^2=v$ and $vzu^2=z+1-v$, together with $l=us$, $m=s-s^{-1}$, and $\alpha=(uz)^{-1}$. Its skein relation is $l^{-1}P(L_+)-lP(L_-)=mP(L_0)$ ([[def-axiom-of-choice]], [[def-the-homflypt-coefficient-ring]], [[def-homflypt-polynomial-from-the-hecke-markov-trace]], [[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]], [[thm-the-homflypt-skein-relation]]).

[F11] Under AC, ambient-isotopic braid closures are connected by a finite sequence of Markov moves. Braid homology is invariant under those moves up to the stated shifts; distant crossings commute by the disjoint-factor signed flip ([[thm-markovs-closed-braid-equivalence-theorem]], [[thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]]).

[F12] Under AC, every oriented link is the closure of a braid; its proof uses a finite reduction of the common oriented Seifert-circle picture followed by reading a height-zero diagram as a braid ([[thm-alexanders-closed-braid-theorem]]).

## Proof

**Proof technique:** explicit regrading of crossing cones, local Markov calculations, unlink evaluation and finite descending-diagram skein induction.

1.1 *Finiteness.* Retain the finitely many mark variables not removed by linear exclusion; a closed circle, for example, retains its polynomial variable. After separating the universal $(a,0)$ row, [F3] gives a finite Koszul complex over this finite-variable polynomial ring. The generators have finitely many first internal degrees, and all polynomial variables have second degree $2$, so every fixed bidegree is finite dimensional. The crossing cube is finite; kernels and quotients preserve this degreewise finiteness. The localized rational-series conclusion follows from [F2], whose Hilbert-Serre argument is explicitly AC-qualified. [F1, F2, F3]

1.2 *The exact crossing regrading.* Let $e=|D|_+-|D|_-$, $s=s(D)$ and $r=(s-e)/2$. In a positive published cone the $\Gamma_0$ term has shift $\{-1/2,3/2\}$ in degree $-1/2$ and the $\Gamma_1$ term shift $\{-1/2,-1/2\}$ in degree $1/2$. These are the v2 positive cone shifted by $\{-1/2,-1/2\}[-1/2]$. In the negative cone both published terms have shift $\{1/2,-3/2\}$ in degrees $-1/2,1/2$, so it is the v2 negative cone shifted by $\{1/2,1/2\}[1/2]$. Tensoring gives $C_{\mathrm{pub}}^{\mathrm{raw}}(D)=C_{\mathrm{v2}}(D)\{-e/2,-e/2\}[-e/2]$, and therefore $$C_{\mathrm{pub}}(D)=C_{\mathrm{v2}}(D)\{r,r\}[r].$$ The equality is read through the canonical totalization identifications; any tensor-shift differential sign is transported by those identifications. [F1, F9, algebra]

2.1 *Both stabilizations and oriented-link descent.* A positive stabilization increases $s,e$ by $1$, hence leaves $r$ unchanged, and its v2 type IB complex has no shift by [F4]. A negative stabilization increases $s$ by $1$ and decreases $e$ by $1$, hence replaces $r$ by $r+1$. The type IA relation of [F4] is $C_{\mathrm{v2}}(D_{\mathrm{straight}})\simeq\Pi C_{\mathrm{v2}}(D_{\mathrm{negative\ curl}})\{1,1\}[1]$, so the stabilized v2 complex is $\Pi C_{\mathrm{v2}}(D)\{-1,-1\}[-1]$. Its published correction $\{r+1,r+1\}[r+1]$ cancels the trigrading shift, leaving $\Pi$. Since $r$ increases by one, $\lfloor r\rfloor$ also increases by one, so $\Pi^{\lfloor r\rfloor}C_{\mathrm{pub}}(D)$ has no residual parity reversal. Taking termwise cohomology and forgetting its parity also removes $\Pi$. Inverse moves reverse these equivalences. Conjugation, markings, inverse cancellations and adjacent braid relations preserve the complex by [F5]-[F8]; distant crossings commute by the disjoint-factor signed flip of [F11]. Braid relations, inverse cancellations and conjugations keep $s,e$ and hence $\lfloor r\rfloor$ fixed. Thus both the parity-corrected factorization complex and $CH_{\mathrm{pub}}(D)$ with parity forgotten are invariant under every Markov move. Under AC, [F11] supplies a finite Markov sequence for two ambient-isotopic closures, proving oriented-link descent. [F4, F5, F6, F7, F8, F11, step 1.2, algebra]

2.2 *The published weight and the two cone relations.* A homogeneous class of $C$ of degree $(j,k,l)$ has degree $(j-n,k+n_1,l+n_2)$ in $C\{n_1,n_2\}[n]$. Its published weight is therefore multiplied by $(-1)^{n_1-n}t^{2n_1}q^{n_1+n_2}$, whenever $n_1-n$ is integral; it is this difference, rather than the sum, that applies to half-integer cones. Applying the explicit shifts of step 1.2 gives $$\langle D\sigma_i\rangle_{\mathrm{pub}}=t^{-1}q^{-1}\langle De_i\rangle_{\mathrm{pub}}-t^{-1}q\langle D\rangle_{\mathrm{pub}},$$ $$\langle D\sigma_i^{-1}\rangle_{\mathrm{pub}}=tq^{-1}\langle De_i\rangle_{\mathrm{pub}}-tq^{-1}\langle D\rangle_{\mathrm{pub}}.$$ The strand correction is common to all four diagrams. Also $j+k$ is integral: the common shift $\{r,r\}[r]$ changes this sum by $r-r=0$ from its integer-graded v2 value. [F1, F9, step 1.2, algebra]

3.1 *Skein elimination.* Multiplying the positive relation by $tq$ gives $\langle De_i\rangle_{\mathrm{pub}}=tq\langle D\sigma_i\rangle_{\mathrm{pub}}+q^2\langle D\rangle_{\mathrm{pub}}$. Substitution in the negative relation yields $$t\langle D\sigma_i\rangle_{\mathrm{pub}}-t^{-1}\langle D\sigma_i^{-1}\rangle_{\mathrm{pub}}=-(q-q^{-1})\langle D\rangle_{\mathrm{pub}}.$$ To apply this relation to a general oriented skein triple, smooth all its crossings: the three diagrams have the same oriented Seifert circles, with only one crossing strip distinguished. Apply the finite reducing algorithm of [F12] to that common picture, choosing its finitely many reducing arcs away from the distinguished strip. Endpoints can be moved along the circle arcs and each reducing arc perturbed away from the distinguished point; shrink the local strip disk as needed. Each such reduction is the identical ReidemeisterII move outside that disk in all three diagrams. The resulting common height-zero picture is read as three braid closures differing at the distinguished crossing/smoothing. Link invariance from step 2.1 transports the braid relation back to the original triple. Consequently $G=(1-t^2)\langle-\rangle_{\mathrm{pub}}$ has the asserted oriented-link skein relation. [F12, step 2.1, step 2.2, algebra]

3.2 *All unlink values.* For the crossingless $m$-strand closure, $m\ge1$, the factorization is the tensor product of $m$ circle rows $(a,0)$. Subtract the first row from each remaining row: it becomes one $(a,0)$ row and $m-1$ zero rows. The cohomology of the first row is $\mathbb Q[x_1,\ldots,x_m]\{-1,1\}$; each zero row contributes $\mathbb Q\oplus\mathbb Q\{-1,1\}$. The outer v2 degree is zero, and the published correction is $\{m/2,m/2\}[m/2]$. Thus $$\langle\operatorname{unlink}_m\rangle_{\mathrm{pub}}=\frac{-t^{m-2}q^m(1-t^{-2})^{m-1}}{(1-q^2)^m}=\frac{t^{-m}(1-t^2)^{m-1}}{(q-q^{-1})^m}.$$ Therefore $G(\operatorname{unlink}_m)=\delta^m$, where $\delta=(t^{-1}-t)/(q-q^{-1})$. For $m=1$ this gives the published unknot series $t^{-1}/(q-q^{-1})$ and $G(\bigcirc)=\delta$. [F3, step 1.2, step 2.2, algebra]

4.1 *Finite skein uniqueness and multiplicativity.* Fix an ordering and basepoint on each component of a finite regular oriented diagram, away from the crossings. Traverse components in that order, starting at their basepoints; a crossing is bad if its first encounter is on the underpassing branch. Switching the first bad crossing reduces the number of bad crossings by one without changing the others, whereas oriented smoothing reduces the total crossing number. The skein relation expresses the value at this diagram as a unit multiple of the switched-diagram value plus a multiple of the smoothed-diagram value. Induction on the lexicographic pair (crossing number, number of bad crossings) therefore terminates. A diagram with no bad crossing is descending: pull its traversed arcs successively above the remaining arcs, starting at the first component, to isotope it to disjoint unknotted circles. Their prescribed values $\delta^m$ determine every value. This proves uniqueness among oriented-link invariants with the skein relation and these unlink values. To check multiplicativity, apply the same induction to a diagram of $L_1$ in a ball disjoint from a fixed $L_2$; then to $L_2$. It reduces both $G(L_1\sqcup L_2)$ and $G(L_1)G(L_2)$ to the identical unlink products $\delta^{m_1+m_2}$. Thus $G$ is the multiplicative HOMFLYPT function $F$, proving (1). [step 3.1, step 3.2, algebra]

5.1 *The v2 normalization and its precise relation to the published one.* In integer grading, $\langle C\{u,v\}[n]\rangle_{\mathrm{v2}}=(-1)^nt^uq^v\langle C\rangle_{\mathrm{v2}}$. Positive stabilization has factor $1$; negative stabilization has factor $-t^{-1}q^{-1}=\alpha$ by step 2.1. Its exponent $e-s+1$ decreases by $2$, whereas the positive stabilization leaves that exponent unchanged, so $\widetilde F$ is invariant under both moves. The v2 unknot value is the circle tower $t^{-1}q/(1-q^2)=\alpha/(1-q^{-2})$ from [F2]. Under the variable substitution $t_{\mathrm{v2}}=-t^2q$ and $q_{\mathrm{v2}}=q$, choose $\sqrt\alpha=(tq)^{-1}$; then step 1.2 and the published weight give $$\langle D\rangle_{\mathrm{pub}}=(tq)^{s-e}\langle D\rangle_{\mathrm{v2}}(-t^2q,q)=tq\,\widetilde F(D)(-t^2q,q).$$ Hence $F(D)=(1-t^2)tq\,\widetilde F(D)(-t^2q,q)$: this is the explicit sense in which the v2 normalization is the same HOMFLYPT invariant after regrading. The local v2 cone relations are $\langle D\sigma_i\rangle=\langle De_i\rangle-q^2\langle D\rangle$ and $\langle D\sigma_i^{-1}\rangle=q^{-2}(\langle De_i\rangle-\langle D\rangle)$, giving $q^{-1}\langle D\sigma_i\rangle-q\langle D\sigma_i^{-1}\rangle=(q^{-1}-q)\langle D\rangle$ by direct elimination. This records the consistent sign independently of the discrepant v2 source display. Oriented-link descent again uses AC via [F11], proving (2). [F2, F4, F9, F11, step 1.2, step 2.1, step 3.2, step 4.1, algebra]

6.1 *The Hecke coefficient homomorphism.* The assignments in (3) obey $(q^{-1})^2=q^{-2}$ and $$q^{-2}\frac{(q^2-1)t^2}{q^2(1-t^2)}t^{-2}q^2=\frac{q^2-1}{q^2(1-t^2)}=\frac{(q^2-1)t^2}{q^2(1-t^2)}+1-q^{-2}.$$ All assigned units are units in $T$, so they define $\varphi:R\to T$. It has $\varphi(l)=t^{-1}$, $\varphi(m)=q^{-1}-q$ and $\varphi(\alpha)=\delta$ by the displayed definitions of [F10]. Thus $\psi=\varphi(P)$ is an oriented-link invariant with the same skein relation and unknot value $1$. Apply its skein relation at a small kink on an unlink: both crossing choices are isotopic to that unlink, and the smoothing adds one unknotted component. Since $q-q^{-1}$ is a unit in $T$, this gives $\psi(\operatorname{unlink}_{m+1})=\delta\psi(\operatorname{unlink}_m)$, hence $\psi(\operatorname{unlink}_m)=\delta^{m-1}$. The invariant $\delta\psi$ therefore has the unlink values $\delta^m$ and the skein relation of $F$. Finite uniqueness from step 4.1 gives $F=\delta\varphi(P)$ and $\langle D\rangle_{\mathrm{pub}}=\delta\varphi(P(\widehat D))/(1-t^2)$. This comparison also uses the explicit AC assumption of the Hecke supplier [F10], proving (3). [F10, step 4.1, algebra] ∎

