---
id: thm-gts-dominant-wall-crossing-for-operational-equivariant-invariants-of-3cy-categories
kind: theorem
title: Kuhn–Liu–Thimm dominant 3CY wall-crossing theorem
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
proof_strategy: direct
deps: [thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation, thm-invariant-ring-finite-generation-and-affine-categorical-quotient]
dependency_roles:
  thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation: mathematical-premise
  thm-invariant-ring-finite-generation-and-affine-categorical-quotient: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Kuhn, Liu and Thimm, Dominant wall-crossing for operational equivariant invariants of 3-Calabi–Yau categories"
      url: "https://arxiv.org/pdf/2512.23012v1"
      locator: "Definitions 1.2.1–1.2.5 and 1.3.7, Assumptions 1.3.2 and 1.3.8, equation (10), §§2.5–2.6 and 3–4; the weak-dominance-only endpoint of Lemma 4.1.12(ii) is corrected by the explicit detection hypothesis below."
---

## Statement

Use the complex-linear Noetherian abelian category, $T$-equivariant operational 3CY data, localized rational coefficient ring with $\kappa^{1/2}$, positive completion, scalar rigidification and Lie bracket of Kuhn–Liu–Thimm, with all the hypotheses of their Assumptions 1.3.2 and 1.3.8. Fix a nonzero effective class $\alpha$. For the initial weak stability $\tau$ set
$$R_\alpha=\{\alpha\}\cup\{\beta:0<\beta<\alpha,\ \tau(\beta)=\tau(\alpha-\beta),\ \mathcal M^{ss}_\beta(\tau)\ne\varnothing\ne\mathcal M^{ss}_{\alpha-\beta}(\tau)\},$$
and define $\widetilde R_\alpha$ by replacing $\tau$ with $\widetilde\tau$. Assume weak dominance: $\widetilde R_\alpha\subset R_\alpha$ and $\mathcal M^{ss}_\beta(\widetilde\tau)\subset\mathcal M^{ss}_\beta(\tau)$ for every $\beta\in\widetilde R_\alpha$.

Require the following finite critical detection condition **(D)**. For every $\beta\in\widetilde R_\alpha$ and every initially semistable object $E$ of class $\beta$ which is not finally semistable, there is an exact sequence $0\to E'\to E\to E''\to0$ whose endpoints are nonzero initially semistable objects of classes in $R_\alpha$ and satisfy $\widetilde\tau(E')>\widetilde\tau(E'')$. This condition concerns only the finitely many critical subobject incidence functors; it does not assume any invariant identity. The source comparison homomorphism retains exactly its original sign hypothesis; the proof normalizes its finite critical slopes without changing any auxiliary stable locus.

There exist unique framing-independent operational semistable classes with the prescribed actual framed-pair characterization for the initial critical classes and for the final classes in $\widetilde R_\alpha$. Set $B_1(z_1)=z_1$ and $B_n(z_1,\ldots,z_n)=[B_{n-1}(z_1,\ldots,z_{n-1}),z_n]$. They obey
$$z_\alpha(\widetilde\tau)=\sum_{n>0}\ \sum_{\substack{\alpha_1+\cdots+\alpha_n=\alpha\\ \tau(\alpha_i)=\tau(\alpha),\ \mathcal M^{ss}_{\alpha_i}(\tau)\ne\varnothing}} \widetilde U(\alpha_1,\ldots,\alpha_n;\tau,\widetilde\tau)\, B_n(z_{\alpha_1}(\tau),\ldots,z_{\alpha_n}(\tau))$$
in $K_T^\circ(\mathcal M_\alpha)^{\rm pl}_{\rm loc,\mathbb Q}$, with the original source bracket order and coefficients. This retains the full operational weak-stability setting, including the source's proper-fixed-locus and resolution hypotheses. It makes no numerical wall-crossing assertion without a further proved numerical integration map.


## Remarks

The extra detection hypothesis repairs a genuinely false weak-dominance-only interface; it is not an assumed wall identity. The stronger reverse-$U$ clause in the source's “dominates at $\alpha$” condition implies (D), as proved above, so the correction retains more than imposing global dominance. The global definition of weak dominance is unchanged.

The exact false source inference is the final-endpoint assertion of Lemma 4.1.12(ii), used again in §§4.3–4.4: weak dominance alone does not turn initial semistability with zero comparison value into final semistability. For a concrete counterexample take representations of the acyclic quiver $b\to s\to c$, $b\to c$, grade by $[s]=b+c$, use initial slope $(u-v)/(u+v)$ and final negative slope, and $\alpha=(1,1)$. The initial stable objects are the simple $S_s$ and the nonzero-arrow $b\to c$ representation $P$; the final stable locus contains only $S_s$. Both critical sets are $\{\alpha\}$, so weak dominance holds and $\lambda=0$ is allowed. The unit insertion supported on the open-and-closed $b+c$ dimension-vector component gives initial invariant $1$ and final invariant $0$, whereas the proposed weak-only sum has just its unchanged one-letter term. Condition (D) fails exactly because there is no proper initial critical detecting class. The full operational obstruction complexes, faithful framing, fixed-properness and source-hypothesis verification for this example are included in the detailed counterexample below; the contradiction does not identify either neighboring CY4 theorem as false.


### Source definitions checked

Section 1.2.1 permits an appropriate quotient of $K_0(\mathcal A)$.
Definition 2.3.4 requires an additive grading and the displayed
bilinear complexes; it does not require each graded piece to be
connected or require the dimension-vector grading to be injective.
The bilinear ranks, the framing rank and the actual obstruction maps
in the example below all satisfy the stated grading conditions.

Definition 1.3.7 says ONLY that
$\widetilde R_\alpha\subset R_\alpha$ and
$\mathcal M_\beta^{ss}(\widetilde\tau)
\subset\mathcal M_\beta^{ss}(\tau)$ for
$\beta\in\widetilde R_\alpha$.
It does not impose the earlier stronger condition called
"dominates at $\alpha$", involving both directions of
nonzero $U$ coefficients and HN factors.
Assumption 1.3.8(b) tests its homomorphism only on
$R_\gamma$, for each total class $\gamma$.

### An explicit operational 3CY category with the allowed grading

Let $Q$ have vertices $s,b,c$ and arrows
$$b\longrightarrow s,\qquad s\longrightarrow c,\qquad b\longrightarrow c.$$
It is acyclic. Take $\mathcal A$ to be its finite-dimensional complex
representations. This is a Noetherian complex-linear abelian
category. Put
$$K(\mathcal A)=\mathbb Z b\oplus\mathbb Z c,\qquad [s]=b+c. \tag{1}$$
Thus an ordinary dimension vector $(d_s,d_b,d_c)$ has degree
$(u,v)=(d_s+d_b,d_s+d_c)$. Every fixed degree has only finitely
many ordinary dimension vectors, and no nonzero object has
degree zero. The corresponding union of representation
stacks is an open-and-closed graded piece of the moduli
stack, with all direct sums respecting (1).

Here are actual complexes for the source's operational 3CY
definition, without importing a dg-completion theorem.
For representations $U,V$ put
$$C(U,V)= [\,\bigoplus_i\operatorname{Hom}(U_i,V_i) \xrightarrow{d} \bigoplus_{a:i\to j}\operatorname{Hom}(U_i,V_j)\,]$$
in degrees zero and one, with $d(f)_a=V_af_i-f_jU_a$.
Let $T=\mathbb C^*$ act trivially on classical representations
and put $\kappa=t$, the primitive non-square character.
Define the perfect bilinear complex
$$E(U,V)=C(U,V)\oplus \kappa^{-1}C(V,U)^\vee[-3]. \tag{2}$$
Direct-sum and scalar bilinearity are the actual matrix
decompositions. Exchanging the two summands is the specified
$\kappa$ symmetry with shift three.
The diagonal complex $C(E,E)^\vee[-1]$ is the cotangent
complex of the smooth quotient stack
$[\operatorname{Rep}_{\boldsymbol d}Q/G_{\boldsymbol d}]$,
as follows by differentiating its arrow and basis maps.
Hence
$$E(E,E)^\vee[-1] =L_{\mathcal M}\oplus \kappa L_{\mathcal M}^\vee[1] \longrightarrow L_{\mathcal M} \tag{3}$$
is the projection obstruction theory, with its actual
hyperbolic symmetry. The direct-sum obstruction-map square
holds: block projection of the matrix derivative is the
derivative of the two diagonal representation blocks.

The ordinary rank of (2) is the skew Euler form
$\chi_{ij}=\#(j\to i)-\#(i\to j)$. In the order $(s,b,c)$
its matrix is
$$\begin{pmatrix}0&1&-1\\-1&0&-1\\1&1&0\end{pmatrix}.$$
The vector $(1,-1,-1)$ is in its radical. Thus the
bilinear ranks descend to precisely (1); this is not an
arbitrary quotient incompatible with the source's ranks.

The rigidified obstruction theory is also explicit.
Split the scalar identity from the degree-zero term of
$C(E,E)$ using the invariant trace divided by the positive
total weighted dimension. Remove this scalar summand and
its paired $\kappa$-dual. All remaining Hom bundles have
trivial common-scalar action and descend to the quotient
by $G_{\boldsymbol d}/\mathbb G_m$. Their projection map
is the cotangent obstruction theory of that smooth
rigidified quotient, symmetrically completed as in (3).
The gerbe cotangent triangle and its dual give exactly
the source's symmetric compatibility. Thus the
rigidification hypothesis is supplied as a map, not
inferred from a numerical Euler form.

Use the exact framing functor
$$F(E)=E_s^{\oplus2}\oplus E_b\oplus E_c. \tag{4}$$
It is defined on all of $\mathcal A$, is faithful on
endomorphisms, induces the required vector-bundle
moduli maps, and has rank $2d_s+d_b+d_c=u+v$.
Its rank therefore descends to (1). A singleton framing
collection containing (4) meets every coverage condition.

### Two genuine slopes and the actual weak-dominance condition

Let
$$r(u,v)=u+v,\qquad \mu(u,v)=\frac{u-v}{u+v},\qquad \widetilde\mu(u,v)=-\mu(u,v). \tag{5}$$
These are genuine additive-central-charge slopes;
in particular their seesaw is strict unless the two
phases agree. They give weak stabilities $\tau$ and
$\widetilde\tau$ with
$\mu(b)=1>\mu(c)=-1$ and $\mu(s)=0$.
Use their real slope order, or the corresponding
upper-half-plane central charges; the semistability
inequalities are identical.

HN exists on this finite-length category: among the
finitely many subdimension vectors choose a maximum
slope subobject of maximum dimension, use additivity
to prove uniqueness under sums, and repeat on its
quotient. Each step decreases dimension. All stability
loci are open by the closed Grassmann incidence
conditions for invariant subspaces. The rank in (5)
is positive and additive for every exact sequence.
The genuine seesaw proves 1.3.2(e): a proper critical
semistable subobject has the same slope as its
complement, so adding that complement cannot turn a
strict lower or higher comparison into an equal one.

For EVERY total degree $\gamma=(u,v)$, the classes in
$R_\gamma$ have the same ratio as $\gamma$. The
opposite slope has exactly the same equal-ratio
classes. Consequently $\lambda_\gamma=0$ satisfies
ALL of Assumption 1.3.8(b), including its two iff
conditions. Its required large-value condition for
nonzero values is vacuous. Both stabilities have HN
and open finite-type loci, so 1.3.8(a) holds as well.

Now take $\alpha=(1,1)=s=b+c$.
The only ordinary dimension vectors of this degree
are $(1,0,0)$ and $(0,1,1)$.
On the first there is the simple object $S_s$.
On the second the only possibly nonzero arrow is
$x:b\to c$.
For $\tau$, $x\ne0$ is stable: its sole proper
subrepresentation is the lower-slope $c$.
All $x\ne0$ are isomorphic to one object $P$.
The split $x=0$ is unstable.
For $\widetilde\tau$ every representation on this
second component is unstable, because its $c$
subrepresentation has larger slope than its $b$
quotient. The simple $S_s$ remains stable.
Therefore
$$\mathcal M_\alpha^{ss}(\tau)=\{S_s,P\},\qquad \mathcal M_\alpha^{ss}(\widetilde\tau)=\{S_s\}, \tag{6}$$
with all objects on these loci stable.

The only nontrivial effective decomposition of
$\alpha$ is $b+c$, and those two slopes differ
for BOTH stabilities. Thus
$R_\alpha=\widetilde R_\alpha=\{\alpha\}$.
Equation (6) proves exactly the source's weak
dominance at $\alpha$. The stronger source
dominance-at-$\alpha$ condition is false here.

### Properness and resolution hypotheses

The fixed-degree classical representation schemes
and all the framing/star/flag schemes in this
example are closed relation loci in representations
of ACYCLIC quivers. The added framing vertices
are sources or the displayed master sink; no
oriented cycle is introduced. Their affine
invariant rings are $\mathbb C$: choose positive
integer vertex heights increasing along every
arrow. The corresponding central one-parameter
group scales each arrow coordinate with strictly
positive weight, so an invariant polynomial has
degree zero and is constant. Passing to invariant
relation quotients preserves this by the exact
Reynolds operator.

For a rational genuine King stability the quotient
is the Proj of its semi-invariant ring, whose
degree-zero ring is consequently $\mathbb C$.
Finite generation follows from the declared affine invariant-ring supplier; the numerical criterion and projective quotient are proved by the invariant-separation/DVR/Smith argument below. The same argument
allows the multiplicity-two framing arrows in
(4) and closed relation loci. Whenever stable
equals semistable this is a projective geometric
quotient with a descended ample line. Its
torus-fixed loci are projective and have the
equivariant resolution property by ample
twisting and finite-dimensional equivariant
section generation.

Here is why the extended auxiliary slopes do
not hide a nonproper stable open at a pure
zero-weight boundary. Fix one total dimension
and one auxiliary parameter value. There are
finitely many proper subdimension vectors.
Write its extended auxiliary slope as primary
old slope $\theta_{\rm old}/r$ and secondary
$w/r$, with pure objects classified by
$w/\dim V$ and the source's sign convention
$w=0\mapsto-\infty$.
Choose successively small positive rational
parameters $\eta,\epsilon,\delta$ and a nearby
rational weight vector preserving the finite
strict comparisons, and use the genuine slope
$$\frac{\theta_{\rm old}+\eta w-\eta\epsilon\,d_{\rm fr}} {r+\delta d_{\rm fr}},\qquad 0<\delta\ll\eta\epsilon\ll\eta\ll1. \tag{7}$$
All ranks in the denominator are positive on
nonzero augmented representations. Different
primary old slopes retain their order.
For equal old slopes, strict secondary orders
retain theirs. For a pure object with $w>0$
or $w<0$ the value in (7) tends to the
corresponding infinity; for $w=0$ it tends
to minus infinity. Among pure objects the
mean order is unchanged. Thus EVERY strict
source comparison of a subobject with its
quotient is retained, uniformly in this
finite dimension box.

If there are no strictly source-semistable
objects, every source-unstable object has
one strict destabilizer, which remains
destabilizing for (7). Every source-stable
object retains all its strict inequalities
and stays stable. Hence the genuine
rational stability has
semistable=stable=the source stable locus.
It has the projective quotient just
described. This argument covers precisely
all no-strict-semistable auxiliary cases
required in 1.3.8(c), including zero-weight
pure intervals. It does NOT assume that
unperturbed King semistability already
equals the source convention at such
intervals. A fixed K-degree has only
finitely many ordinary dimension vectors,
so the perturbations may be chosen for
their common finite union.

The pair and star master weights are
chosen generic in their finite boxes;
their distinguished one-dimensional
vertex and the stated small epsilon
ensure no strictly semistable objects.
Their relation loci are acyclic as above,
so the same argument proves projectivity.
For the horizontal data $\lambda=0$ all
slopes are independent of $s$ and there
are no horizontal simple walls; if its
formal master construction is retained,
choose its auxiliary negative weight
off the finite equalities and use the
same projective argument.
The classical $T$ action is trivial and
the auxiliary master torus acts through
linear arrow rescalings, so every graph
torus fixed locus used in pole cancellation
is closed in one of these projective
schemes. Their equivariant ample lines
give exactly the required resolution
property. This verifies the properness
and resolution hypotheses, rather than
assuming them for a nonproper open.

### The claimed equality is detected to be false

Both points in (6) have zero rigidified
cotangent complex and hence zero
symmetrically completed obstruction
complex. Their virtual structure sheaves
and specified determinant roots are
therefore the unit. Let $e$ be the
perfect test class equal to the unit
on the open-and-closed ordinary
dimension-vector component $(0,1,1)$,
and zero on $(1,0,0)$. It has scalar
degree zero, so evaluation descends
to the source's pl quotient.
The stable-only characterization
of the operational invariants gives
$$z_\alpha(\tau)(e)=1,\qquad z_\alpha(\widetilde\tau)(e)=0. \tag{8}$$
But the displayed original wall sum
has only its $n=1$ term:
the decomposition $b+c$ is excluded
by its unequal initial slopes,
and no longer decomposition is
effective. Its coefficient is
$\widetilde U(\alpha;\tau,\widetilde\tau)=1$.
It asserts equality of the two
invariants in (8), which is false.

The exact defective proof interface
is visible even without computing
virtual invariants. With $\lambda=0$
the source auxiliary stability
$\tau_x^1$ is identical to
$\tau_x^0$. Take $\beta=\alpha$,
the one-line tail flag and
$x>x_0(a)$. The $\tau$-stable
object $P$ with any nonzero
framing is auxiliary-stable.
It is NOT $\widetilde\tau$-
semistable. Thus the endpoint
assertion in source Lemma
4.1.12(ii) is false under
weak dominance alone.

### Necessary repair to the theorem's hypothesis

The earlier source condition "dominates at
$\alpha$" includes the two-direction HN/U
admissibility that weak dominance omits.
It excludes this example and is a concrete
established sufficient correction to test
against the reconstructed proof. The corrected local hypothesis retains weak
dominance and requires its missing destabilizer-detection condition:
for every relevant $\beta$, an initially
semistable object that is not finally
semistable has an initially semistable
critical subobject/quotient detecting
that instability. That is a genuine
geometric condition, not the theorem's
desired equality in disguise.

The corrected Statement above uses the finite detection hypothesis (D).


### Counterexample: numerical criterion and actual projective quotient

Put χ_θ(g)=∏_v det(g_v)^{−θ_v} and

 S_θ=⊕_{n≥0} C[R_d]^{G_d,χ_θ^n},   A_d=C[R_d]^{G_d}.

It is the invariant ring of R_d×A1 with z transforming by χ_θ^{-1}, graded by z-degree. The affine finite-generation supplier, or its explicit Reynolds argument for a quotient of a polynomial algebra on a finite-dimensional generating submodule, proves S_θ finitely generated; (S_θ)_0=A_d is finitely generated too. Thus Q_d=Proj S_θ is finite type, separated and PROJECTIVE OVER Spec A_d. For this relative assertion take a sufficiently divisible Veronese and its finite degree-one generators, giving a closed immersion into projective space over A_d. No claim that Q_d is proper over C is made yet.

We prove that the semistable locus defined by positive semi-invariants is exactly the numerical locus. Suppose a subrepresentation B⊂E has θ(dim B)>0. Choose a one-parameter basis action of weight 1 on B and 0 on its complement at every vertex. The limit of this action on E exists, since every arrow preserves B. Its χ_θ-weight is −θ(B). A semi-invariant f of weight χ_θ^n would satisfy f(λ(t)E)=t^{−nθ(B)}f(E); regularity at t=0 forces f(E)=0. Hence a semi-invariant-semistable object is numerically semistable.

Conversely suppose every positive-degree semi-invariant vanishes at E. All invariants on R_d×A1 take the same values at (E,1) and (E,0). The actual affine categorical quotient supplier gives a common closed orbit in their orbit closures; since z=0 is closed and invariant, it has representative (E_0,0). Choose an integral curve in the closure of G_d(E,1) through that point and with generic point in the orbit; intersecting an affine presentation with generic linear slices and normalizing gives its DVR. The generic orbit point lifts to an element g(t)∈G_d(C((t))) after a finite field extension: the fibre of the orbit map is a nonempty finite-type scheme and has a closed point over a finite extension. Complete the DVR and replace its uniformizer after that finite extension. We have g(t)(E,1) extending to (E_0,0).

For each matrix g_v(t), Smith normal form over the DVR gives

 g_v(t)=u_v(t) diag(t^{a_vj}) v_v(t),  u_v,v_v∈GL(d_v,C[[t]]).

The left unit u(t)^{-1} preserves regularity. Thus λ(t)v(t)E is regular, where λ is the displayed diagonal subgroup. In every negative-weight matrix coordinate, regularity forces the constant term of v(t)E to vanish. Therefore λ(t)v(0)E has a limit as well. The z-coordinate has valuation Σ_{v,j}θ_v a_vj>0, because it tends to zero and the determinant unit factors have valuation zero. The limiting condition means every arrow sends a source weight into weights at least as large: the increasing weight spaces F^p form subrepresentations. Shift all vertex weights by one common constant; θ(d)=0 makes this immaterial. Then

 Σ_{v,j}θ_v a_vj = Σ_p θ(dim F^p)>0.

At least one proper F^p has positive θ, contradicting numerical semistability. This proves the converse. It is the needed product-GL numerical criterion, proved with a DVR/Smith calculation rather than importing a named criterion.

For a positive semi-invariant f, the chart R_f is affine and G-stable, and (C[R_f])^G=(S_θ[f^{-1}])_0. Indeed an invariant fraction g/f^k has numerator of exactly the corresponding semi-invariant weight; Reynolds averaging gives that weight numerator when necessary. Its affine good quotient is D_+(f). The charts glue exactly as in the read projective GIT proof: their overlap ratios are invariant, and their inverse images are R_f. This gives the actual good quotient R_d^{θ-ss}→Q_d, with a unique closed orbit in each fibre. These statements use scheme equations and graded algebras, not just a set of S-equivalence classes.



For use with torus actions, a θ-stable module has closed orbit in the semistable locus. To check this without another numerical theorem, take any orbit-closure limit that is still semistable and a semi-invariant f nonzero there. In the DVR/Smith argument of §2 its character valuation is now zero. Since every proper filtration subobject of a stable object has strictly negative θ, the equality Σ_p θ(F^p)=0 forces the weight filtration to be trivial on its support. The diagonal subgroup is then the common scalar and acts trivially on the old representation. The limit is u(0)v(0)E, isomorphic to E. Thus stable orbits are closed; modulo the common scalar their stabilizers are trivial. The stable quotient is consequently the actual separated geometric stable open of Q_{δ'}.

## Facts & Assumptions

**Given:** the full source operational setup and Assumptions 1.3.2 and 1.3.8, weak dominance, and (D). In particular, the moduli stacks and their open semistable loci, exact framing functors and their faithful scalar-compatible vector bundles, the actual bilinear obstruction complexes and commuting direct-sum obstruction-map squares, the rigidified symmetric obstruction theory, positive critical rank, HN filtrations and openness, and the stated proper resolution-property torus-fixed loci of pair, flag and master spaces are data. No wall-crossing theorem, APOT comparison theorem, virtual localization theorem, universal-$U$ identity or final framed-pair existence theorem is assumed. The proof derives a zero-total normalization of the finite critical comparison function from the given $\lambda$ and $r$, without assuming that $r$ extends to the whole numerical group; its auxiliary comparisons and moduli spaces are unchanged. The source coefficient ring inverts the nonzero quantum framing integers.

The generic quotient input used to prove concentration on coherent $K$-groups is [[thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation]], at its actual published generic-scheme-quotient scope. The counterexample's affine invariant and good-quotient input is [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]; the required numerical criterion and projective quotient are constructed explicitly below. All further needed cone, torsor, Gysin, flag, residue and word arguments are constructed below.


## Proof

1.1 **Critical closure and actual framing maps.**. [given, construct, algebra]

2.1 **A projective construction of the star over a direct-sum pair space.**. [given, construct, algebra, step 1.1]

3.1 There is a precise properness reduction that works on the exact fixed-phase category and does not assume it is abelian. Write $F=F_m\oplus F_n$ and let $J_F$ be the one-line Joyce–Song pair space for this functor, with its stated critical-subobject stability. Over it the universal framing line has two component maps $v_m:V_3\to F_m(E)$ and $v_n:V_3\to F_n(E)$. Form the closed incidence space $$Z=\{(j,\ell_m,\ell_n): \operatorname{im}v_m\subset\ell_m,\quad \operatorname{im}v_n\subset\ell_n\} \subset\mathbb P_{J_F}(F_m(E)) \times_{J_F}\mathbb P_{J_F}(F_n(E)). \tag{E}$$ Twisting by the framing line makes the indicated projective bundles descend on the rigidified pair space. Each incidence condition is the zero of a map to a tautological quotient bundle; thus it is closed scheme-theoretically over arbitrary and nonreduced bases. Consequently $Z\to J_F$ is projective. It is surjective when both framing ranks are positive: where a component is nonzero its line is forced, and where it is zero any line in that positive-rank bundle can be chosen. [given, construct, algebra, step 2.1]

4.1 The space $Z$ is precisely the proposed stable star space. The lines $\ell_i$ give $V_i$, the inclusions give $s_i$, and factorization of $v_i$ through $\ell_i$ gives $a,b$. Conversely a star object gives $v=(s_ma,s_nb)$. These constructions are inverse on objects and morphisms. Here is the full stability check. Pure framing subobjects force $s_m,s_n$ nonzero and $a,b$ not both zero. The only old subobjects relevant to the stability on the fixed-phase exact category are admissible ones; their ranks and quotient ranks are positive and sum to $r(\alpha)$. For a proper such subobject containing the two component images $v_m,v_n$, include the third vertex and each nonzero component's vertex. The weight is at least $1+\varepsilon$ and its rank is at most $r(\alpha)-1$. Hence its slope is strictly larger than the total slope $(1+2\varepsilon)/r(\alpha)$, by $2\varepsilon<1/r(\alpha)$. It destabilizes. [given, construct, algebra, step 3.1]

5.1 If the combined pair is stable, no such proper admissible base subobject exists. A star subobject with proper nonzero base subobject therefore has third-vertex dimension zero. Its weight is at most $2\varepsilon$, so its slope is strictly smaller than the total slope. If its base subobject is the whole $E$, a proper star subobject omits at least one framing vertex; its weight is strictly smaller than $1+2\varepsilon$ at the same base rank, again giving strict inequality. A pure framing subobject is also impossible: a nonzero first or second vertex would map nontrivially to the base framing, and a nonzero third vertex maps into at least one of those nonzero lines. There is no zero-base kernel. Thus the star is stable. At an endpoint the same argument uses the one active component and yields exactly its individual pair stability. All inequalities are strict, so no additional strictly semistable star locus appears. [given, construct, algebra, step 4.1]

6.1 This proves the moduli-functor identification (E), including nilpotent bases, and proves that its stable star is projective over the direct-sum pair space. It does not use intersection or kernels in the fixed-phase exact category. [given, construct, algebra, step 5.1]

7.1 The construction is sometimes described as a blowup, but that stronger assertion is unnecessary and would require care: a component section need not be regular over the singular old moduli. The incidence space, rather than an unverified Rees/symmetric-algebra identification, supplies the needed projective morphism. [given, construct, algebra, step 6.1]

8.1 If $J_F^T$ is proper, then $Z^T$ is proper as a closed subspace of its projective inverse image. The same argument applies to any torus subgroup used in the pole-cancellation argument. Thus the star properness problem has been reduced to the exact direct-sum-framing pair properness input. KLT already explicitly assumes star properness and needs no such inference. In the CY4 packet, $F_m\oplus F_n$ must still be realized using a permitted framing datum or its pair properness must be proved; mere existence of its new dg-quiver completion does not prove that input. [given, construct, algebra, step 7.1]

9.1 **Actual fixed cotangent/obstruction-map comparison.**. [given, construct, algebra, step 8.1]

10.1 This supplies the geometric map input for the CY3 cone comparison, rather than only a virtual-tangent equality. Work on a common flat frame-bundle refinement so all three framing lines are trivialized; the following maps are maps of the actual relative arrow/gauge complexes and therefore descend. Their tangent differential is obtained by differentiating $g_{h(e)}\rho_e g_{t(e)}^{-1}$. [given, construct, algebra, step 9.1]

11.1 At $b=0$, the nonzero $a$ is an isomorphism $V_3\simeq V_1$. The difference between the fixed master relative complex and the relative complex of $\mathbb P(F_n(E))$ over the $m$-pair space is $$[\,\mathcal O\xrightarrow{\ a\ } \operatorname{Hom}(V_3,V_1)\,]. \tag{F}$$ It is contractible by multiplication by $a^{-1}$. The base obstruction map is the same pulled map $\phi_\alpha$ on both sides. Removing (F), and its $\kappa$-shifted dual in the symmetric completion, therefore identifies the cotangent boundary maps, not just the relative tangent ranks. The other endpoint is identical with $a,b$ interchanged. [given, construct, algebra, step 10.1]

12.1 At the mixed locus give $V_1,V_3,E_1$ character $z$ and $V_2,E_2$ character one; the external action on $b$ has character $z$. BOTH nonzero connecting arrows are consequently fixed. One must include that external character; omitting it would give the wrong fixed relative complex. [given, construct, algebra, step 11.1]

13.1 The given direct-sum obstruction-map square identifies the fixed old base complex with the two diagonal complexes. The off-diagonal Ext blocks have characters $z,z^{-1}$ and are moving. Rigidifying the old total object removes one common scalar, whereas the two individual pair conventions remove two. There is thus a relative old block-scalar parameter $v$ in addition to the third-line parameter $u$. With the second old block held fixed, the derivative on the connecting arrows is exactly $$(v,u)\longmapsto((v-u)a,-u b). \tag{G}$$ Its matrix is $\left(\begin{smallmatrix}a&-a\\0&-b\end{smallmatrix}\right)$, invertible because $a,b$ are isomorphisms of lines. The full difference complex is (G) and its shifted $\kappa$-dual. Removing these contractible complexes leaves exactly the product of the two pair relative cotangent complexes over the two diagonal base stacks. The scalar parameters in (G) also show why one cannot identify the rigidified fixed base with a product by counting just its tangent ranks. [given, construct, algebra, step 12.1]

14.1 The obstruction maps on the remaining diagonal summands agree by the GIVEN commuting direct-sum square for $\phi$. The maps on (F) and (G) are the actual arrow derivations just displayed; their contractions commute with projection to the base. Hence these are identifications of the cotangent triangles and their maps from the base obstruction theories. Choose the same lifts and symmetric nullhomotopies after the finite splitting torsors in the coherent-cone component above; its double-cone construction now identifies the fixed master theory with the product or projective-pullback theory AS MAPS. Their pulled intrinsic cone algebras are then identical. The resulting equality of virtual structure sheaves follows from that component's global cone/Koszul construction, without an assumption that equal K-classes of unrelated theories give equal cycles. [given, construct, algebra, step 13.1]

15.1 All displayed contractions commute with changes of framing bases and with restriction to a torus-fixed locus; the inverses $a^{-1},b^{-1}$ are global line-bundle isomorphisms on those loci. Thus the identifications are intrinsic and include families over nilpotent bases. The canonical determinant trivializations of these contractible complexes, paired with their duals, are the determinant identifications used for the stated symmetrized-sheaf convention. [given, construct, algebra, step 14.1]

16.1 **Forgetful identities used by the existence argument.**. [given, construct, algebra, step 15.1]

17.1 Put $A_m(x)=[x,\delta_m]$. In CY4 homology the forgetful map $f_m$ means cap with the top relative tangent Chern class and then push to the unframed stack. It is not plain pushforward. If $N_m(\alpha)=\operatorname{rk}F_m(E)$, direct evaluation gives $$f_mA_m(x)=N_m(\alpha)x. \tag{B}$$ Here is the coefficient calculation. The denominator for the framing kernel is $p(z)=z^{N_m}c_{z^{-1}}(F_m(E))$. Tensoring the framing line by its universal character substitutes $z$ in the corresponding Chern polynomial. Capping with the relative degree-$N_m-1$ Chern class therefore changes the numerator to $p'(z)$. Thus its residue is $[z^{-1}]p'(z)/p(z)=N_m$: the leading term is $N_m/z$ and all other terms have Laurent order at most $-2$. The algebraic cycle classes used here have even homological degree, so the odd-degree Koszul sign in the unrestricted homological formula does not occur. [given, construct, algebra, step 16.1]

18.1 Let $q_m$ forget the $n$-framing from a doubly framed class, with the same relative top-Chern insertion. The same calculation, now with an arbitrary singly $m$-framed class in place of $x$, gives $$q_m([u_m,\delta_n])=N_n(\alpha)u_m. \tag{C}$$ For the other term no general forgetful Lie compatibility is needed. The cross kernel between the pure $m$-frame and the $n$-framed object depends only on $F_m(E)$; it is pulled back from the unframed object and is independent of the $n$-frame. The $n$-relative top Chern insertion is likewise pulled back from the second factor. The direct-sum and forgetful maps commute, including their scalar-action isomorphisms. The projection formula therefore gives $$q_m([\delta_m,v_n])=[\delta_m,f_n(v_n)] =-A_m f_n(v_n). \tag{D}$$ Equations (B)–(D) have exactly the types in the two-framing algebra component above. In particular their right-hand sides are singly framed or unframed as displayed; no base derivation has been invented. [given, construct, algebra, step 17.1]

19.1 For the CY3 operational coefficient convention, $f_m$ is operational pushforward and the same frame kernel calculation replaces $N_m$ by the source quantum integer $[N_m]_\kappa$. After splitting the rank-$N_m$ bundle into roots, the two Laurent boundary values of the symmetrized Euler ratio differ by $\kappa^{-N_m/2}-\kappa^{N_m/2}$. Division by $\kappa^{-1/2}-\kappa^{1/2}$ gives the stated quantum integer. This coefficient is a unit in the source generic localized coefficient field; no specialization at a zero quantum integer is allowed. The argument for (D) is unchanged: the entire Euler ratio is pulled back from the same unframed factor. This computes the required operators in the source convention, but does not supply the missing virtual-structure- sheaf localization/comparison theorem. [given, construct, algebra, step 18.1]

20.1 **KLT's technical condition closes its weak-stability admissibility step.**. [given, construct, algebra, step 19.1]

21.1 At the KLT scope the following argument establishes the required admissibility; it is not an extra assumption. Fix a phase $t$. First, for any weak stability with HN, a morphism from a semistable of larger phase to a semistable of smaller phase is zero. Its nonzero image, if present, has phase at least that of the source and at most that of the target, by semistability and weak seesaw. This is impossible. The same vanishing holds against an iterated extension of smaller-phase HN factors. [given, construct, algebra, step 20.1]

22.1 Direct sums of phase-$t$ semistables are semistable of phase $t$: a larger-phase first HN factor cannot map into either summand, and a smaller-phase last HN quotient cannot receive a map from either summand. This also proves extension closure of phase-$t$ semistables by the same Hom argument. For a morphism between two such objects the image $I$ is semistable of phase $t$. Indeed its phase is $t$ by the image inequalities. Its first HN factor cannot have phase greater than $t$ because it maps into the target. Its later HN factors have phase less than $t$, so the surjection from the source to their quotient vanishes. Hence that quotient is zero and the image has just one HN factor. [given, construct, algebra, step 21.1]

23.1 Now use condition 1.3.2(e), which applies to all classes. For a map $u:E_1\to E_2$ of phase-$t$ semistables write $I=\operatorname{im}u$ and $K=\ker u$. If $K\ne0$, its phase is at most $t$. If it is strictly less, apply (e)'s second prohibition with $$A=E_1\oplus I,\qquad B=E_1,\qquad B'=K.$$ Here $A,B$ are semistable, $B$ is critical in $A$, and $\beta-\beta'=[I]$ while $\alpha-(\beta-\beta')=[E_1]$. Both latter phases are $t$, so the prohibited strict inequality is precisely $\tau(K)<t$. Thus $\tau(K)=t$. [given, construct, algebra, step 22.1]

24.1 To prove that $K$ is semistable, let $K_1$ be its first HN factor as a subobject. It has phase $t$ (higher phase cannot map into $E_1$), and $R=K/K_1$ has all HN phases less than $t$. Every HN factor of a quotient of $E_1$ has phase at least $t$, since otherwise its last HN quotient would receive a nonzero map from $E_1$. On the other hand a larger-phase first HN factor of $E_1/K_1$ maps trivially to $I$ and so maps into $R$; that too is impossible. Therefore $E_1/K_1$ is semistable of phase $t$. Apply the preceding phase argument to the map $E_1/K_1\to I$, whose kernel is $R$. Its phase cannot be less than $t$. As all its HN factors have smaller phase, $R=0$. Thus $K$ is semistable of phase $t$. [given, construct, algebra, step 23.1]

25.1 The cokernel $C=E_2/I$ is also semistable of phase $t$. Initially its phase is at least $t$. If greater, apply (e)'s first prohibition with $A=I\oplus E_2$, $B=E_2$, $B'=I$: it is exactly $\tau(I)=\tau(A/I)<\tau(E_2/I)$, a contradiction. Thus $\tau(C)=t$. All HN factors of $C$ have phase at least $t$, by the quotient argument. Its last factor $C_t$ has phase $t$, and all preceding ones have greater phase. Let $D=\ker(E_2\to C_t)$. The kernel result just proved gives $D$ semistable of phase $t$. But $D/I$ consists of precisely those greater-phase factors. Applying the same first prohibition to $I\subset D$ excludes a nonzero such quotient. Hence $C=C_t$ is semistable. [given, construct, algebra, step 24.1]

26.1 Consequently, with KLT's actual technical hypothesis, the phase-$t$ semistables are closed under kernels and cokernels in the ambient abelian category. The earlier warning for arbitrary weak stability does not obstruct this KLT application. [given, construct, algebra, step 25.1]

27.1 In fact every numerically critical subobject of a phase-$t$ semistable is semistable, not only kernels already known to occur between semistables. Let $B\subset E$ with $\tau(B)=\tau(E/B)=t$. The HN first part $B_1\subset B$ has phase $t$, and its remaining quotient $R$ has all phases less than $t$: a greater-phase HN first part could not map into $E$. The last HN quotient $C_t$ of $C=E/B$ has phase $t$, and its preceding part $H$ has all phases greater than $t$, since $C$ is a quotient of $E$. The map $E\to C_t$ has semistable kernel $D$ by the kernel theorem. The inclusion $B_1\to D$ is between semistables, so $G=D/B_1$ is semistable of phase $t$. Its classes satisfy $[G]=[R]+[H]$. If $R\ne0$, apply (e)'s second prohibition to the semistable inclusion $$\overline B=G\oplus C_t \subset\overline A=G\oplus C_t\oplus B_1, \qquad B'=R\subset G.$$ Its two compared complementary classes are $H+C_t=C$ and $R+B_1=B$, both of phase $t$, while $\tau(R)<t$. This is precisely the forbidden configuration. Thus $R=0$, so $B=B_1$ is semistable. The cokernel theorem then makes $C$ semistable too. The cases with a trivial HN preceding part are included directly in the kernel theorem. This proves numerical-critical closure at the original weak scope. [given, construct, algebra, step 26.1]

28.1 This gives the exact mixed-star admissibility without assuming a Jordan–Hölder statement for arbitrary weak stability. Let $(E_i,s_i)$ be the two stable pairs at phase $t$. If a map $h:E_i\to Q$ to another phase-$t$ semistable kills the framing, its kernel is a phase-$t$ semistable by the preceding proof. Exactness of the framing functor on the common finite cohort makes the section factor through that kernel. If $h\ne0$, the kernel is a proper critical subobject and contradicts pair stability (a zero kernel would contradict the nonzero framing). Therefore $h=0$. [given, construct, algebra, step 27.1]

29.1 No new framing coverage hypothesis is hidden here. If $F_i$ covers all phase-$t$ semistables of total class $\alpha$, it also covers each relevant semistable critical factor: its direct sum with the complementary semistable factors is such a total-class object, and the framing domain is closed under direct summands. The kernel and cokernel result makes the exact sequences used above sequences inside that domain. [given, construct, algebra, step 28.1]

30.1 Suppose now a proper critical subobject $B\subset E_1\oplus E_2$ contains both coloured framings. The quotient $C$ has phase $t$ and all its HN factors have phase at least $t$. Its last HN quotient $Q$ is semistable of phase $t$. The nonzero quotient map $E_1\oplus E_2\to Q$ kills each framing. Both component maps are zero by the preceding paragraph, a contradiction. Thus the joint framing is stable. Conversely, if one factor pair is not stable, its destabilizing critical subobject can be enlarged to a semistable critical one: take the last phase-$t$ HN quotient of its complementary quotient and then the kernel of the resulting map from the semistable factor. The kernel result above proves its semistability, and it still contains the framing. It is therefore in both framing domains. Its direct sum with the whole other factor destabilizes the star, using the critical-subobject transfer from (e). This proves that the mixed fixed locus is the full product of the two pair moduli at the KLT scope. [given, construct, algebra, step 29.1]

31.1 All constructions are compatible with base change: the torus weight projectors split families into direct summands, the nonzero maps between their line bundles are isomorphisms, and all inverse constructions are expressed by these summands and maps. The fixed-locus identification is therefore one of moduli functors, not just of complex points. Combined with KLT's explicitly given star fixed-locus properness, the remaining input for its identity (A) is exactly the virtual-sheaf comparison/localization being constructed in the coherent-cone component above. [given, construct, algebra, step 30.1]

32.1 This critical-closure argument uses precisely the stated initial condition 1.3.2(e). [given, construct, algebra, step 31.1]

33.1 **Finite word transport.**. [given, construct, algebra, step 32.1]

34.1 This is the combinatorial component needed in the original CY3/CY4 assembly. It assumes only the weak seesaw property, a positive completion with finite prescribed coefficients, and rational coefficients. No Hall integration or virtual wall theorem is assumed. The actual source inspected while constructing it was Joyce, math/0410268, §§4.1–4.4, and the KLT definition of the coefficients. The operator proof below gives the full finite cancellation. [given, construct, algebra, step 33.1]

35.1 **Word operators and the unique HN blocking.**. [given, construct, algebra, step 34.1]

36.1 A word $w=(a_1,\ldots,a_n)$ consists of positive charges. A coarsening replaces consecutive nonempty blocks by their sums. Work in the free vector space on such words, with fixed total charge when appropriate. Every operation below only coarsens a word, so on that word it is finite and upper triangular in length with diagonal one. [given, construct, algebra, step 35.1]

37.1 For a weak stability $\tau$, call a block semistable if every proper initial part has phase at most that of its complementary final part. Call a block reversing if the phases of its entries strictly decrease. Define $H_\tau$ by summing all coarsenings whose blocks are semistable, and $R_\tau$ by summing all coarsenings whose blocks are reversing. [given, construct, algebra, step 36.1]

38.1 Each word has a unique blocking into semistable blocks whose total phases strictly decrease. Here is a direct finite proof. Take the longest semistable initial block, then repeat on the remaining word. Each choice exists because a one-letter block is semistable. If consecutive chosen blocks $U,V$ had $\tau(U)\le\tau(V)$, their concatenation would be semistable: at a cut inside $U$, write $U=P+Q$. Semistability gives $\tau(P)\le\tau(U)\le\tau(V)$ and $\tau(P)\le\tau(Q)$; weak seesaw gives $\tau(P)\le\tau(Q+V)$. At a cut inside $V=Q+P$, one instead has $\tau(U)\le\tau(V)\le\tau(P)$ and $\tau(Q)\le\tau(P)$, hence $\tau(U+Q)\le\tau(P)$. The boundary cut is the assumed inequality. This contradicts maximality of $U$, so consecutive phases strictly decrease. [given, construct, algebra, step 37.1]

39.1 For uniqueness, another decreasing semistable blocking has its first block no longer than the longest semistable prefix. If shorter, that longest prefix extends into a later block of the other blocking. Cut after the other's first block. All intervening whole blocks have strictly smaller phase, and the final partial block has phase at most that of its whole semistable block. Their sum therefore has strictly smaller phase than the first block. The longest prefix is then not semistable, a contradiction. The first blocks agree; induction on the remaining letters proves uniqueness. The same argument applies inside each block of any prescribed final coarsening. [given, construct, algebra, step 38.1]

40.1 Let $Z$ sum all coarsenings. The preceding uniqueness proves the operator identity $$R_\tau H_\tau=Z. \tag{1}$$ The inverse $B=Z^{-1}$ sends a word to each coarsening with coefficient $(-1)^{n-\text{number of output blocks}}$. Indeed an interval of coarsenings is a Boolean lattice of the removable cuts; its convolution sum is $(1-1)^k$. Thus (1), and triangular invertibility, give $$H_\tau B R_\tau=1. \tag{2}$$. [given, construct, algebra, step 39.1]

41.1 **The source S formula and composition.**. [given, construct, algebra, step 40.1]

42.1 Put $$\mathscr S_{\tau,\tau'}=H_{\tau'}BR_\tau. \tag{3}$$ The coefficient of the one-letter output in (3) is exactly the source $S(a_1,\ldots,a_n;\tau,\tau')$. To check every sign, consider an original cut $i$. It has three possible states:. [given, construct, algebra, step 41.1]

43.1 * removed in $R_\tau$, allowed only if $d_i=[\tau(a_i)>\tau(a_{i+1})]=1$, with weight $+1$; * retained by $R_\tau$ and removed by $B$, with weight $-1$; * retained by both, allowed only if $p_i=[\tau'(a_1+\cdots+a_i) \le\tau'(a_{i+1}+\cdots+a_n)]=1$, with weight $+1$. [given, construct, algebra, step 42.1]

44.1 The conditions at distinct cuts are independent: reversing blocks impose exactly the first local inequalities, and semistability of the final coarsened word imposes exactly the last prefix/complement inequalities. The coefficient is therefore $\prod_i(d_i-1+p_i)$. A factor is $-1$ for $(d_i,p_i)=(0,0)$, is $+1$ for $(1,1)$, and is zero in the two other cases. These are precisely source cases (a), (b), and its vanishing cases. [given, construct, algebra, step 43.1]

45.1 For a general final coarsening this calculation is performed independently inside its blocks. Hence its coefficient is the product of the source $S$ coefficients of those blocks. Using (1), $$\mathscr S_{\tau',\tau''}\mathscr S_{\tau,\tau'} =H_{\tau''}BR_{\tau'}H_{\tau'}BR_\tau =H_{\tau''}BZBR_\tau =\mathscr S_{\tau,\tau''}. \tag{4}$$ Equation (2) gives the identity transition. Thus (4) proves the ordered-grouping composition of the actual source coefficients, not of new recursively defined replacements. [given, construct, algebra, step 44.1]

46.1 **Exponential, logarithm and the source U formula.**. [given, construct, algebra, step 45.1]

47.1 Let $\mathscr E_\tau$ sum the coarsenings for which all entries within each collapsed block have the same $\tau$ phase, with coefficient $1/k!$ for a block of length $k$. Let $\mathscr L_\tau$ use the same phase condition and coefficient $(-1)^{k-1}/k$. They are inverse word operators. This can be verified in one formal variable by $\log(\exp x)=x$ and $\exp(\log(1+x))=1+x$; the coefficient of any fixed word is the finite sum over its ordered cuts, and the phase condition is constant inside each maximal equal-phase run. Thus the formal power-series identities prove each individual coefficient cancellation. [given, construct, algebra, step 46.1]

48.1 Define $$\mathscr U_{\tau,\tau'} =\mathscr L_{\tau'}\mathscr S_{\tau,\tau'} \mathscr E_\tau. \tag{5}$$ Its coefficient for one output letter is the source double-grouping $U$: the first grouping contributes the $1/(\text{block size})!$ factors and the $\tau$-permissibility condition; the middle grouping contributes one $S$ for each final logarithm block; the last logarithm contributes $(-1)^{\ell-1}/\ell$ and requires every final block to have the total $\tau'$ phase. Weak seesaw makes "all equal entry phases" equivalent to the stated source condition including their block-sum phases. There are no omitted unordered partitions or extra symmetry factors. [given, construct, algebra, step 47.1]

49.1 The inverses and (4) now give $$\mathscr U_{\tau',\tau''}\mathscr U_{\tau,\tau'} =\mathscr U_{\tau,\tau''},\qquad \mathscr U_{\tau,\tau}=1. \tag{6}$$ This is the required finite Möbius inversion and universal-$U$ composition. [given, construct, algebra, step 48.1]

50.1 **Why the actual U polynomial is a Lie polynomial.**. [given, construct, algebra, step 49.1]

51.1 Use a free associative algebra on primitive symbols $z_a$, with $\Delta z_a=z_a\otimes1+1\otimes z_a$. Complete by the given positive height; at every cutoff all operations are finite. For each $\tau$ phase $\theta$ put $z_{\tau,\theta}=\sum_{\tau(a)=\theta}z_a$. The ordered product $$g=\prod_{\theta\ {\rm decreasing}}\exp(z_{\tau,\theta}) \tag{7}$$ is group-like. Constant stability $0$ in the source S formula gives $S(w;\tau,0)=1$ exactly when the entry phases strictly decrease, and zero otherwise. Consequently (4) says that transformation by $S(\tau,\tau')$ is precisely refactorization of the same total series (7) into its $\tau'$-ordered factors. This refactorization is unique by positive-height induction on its associative coefficients. [given, construct, algebra, step 50.1]

52.1 There is also a refactorization by exponentials of primitive elements. At the first unmatched height, the ratio of two group-like series has primitive leading term. Split it by charge and insert each part in its assigned $\tau'$ phase factor. This corrects that height and affects only larger heights. The equal-phase charge subspaces are closed under bracket, since weak seesaw gives $\tau'(a+b)=\theta$ when both phases equal $\theta$. This induction constructs the primitive phase factors uniquely. Thus the logarithm of the S refactorization is primitive. By (5), it is exactly the source $U$ polynomial in the initial $z_a$. [given, construct, algebra, step 51.1]

53.1 For completeness, primitives in this free associative algebra are Lie polynomials without an unproved structural theorem. Let $Y$ multiply a word of length $n$ by $n$, and let the antipode send $x_1\cdots x_n$ to $(-1)^nx_n\cdots x_1$. The convolution $D=S*Y$ satisfies $D(x)=x$ and $D(wx)=[D(w),x]$ for nonempty $w$. This follows by expanding $\Delta(wx)=\Delta(w)\Delta(x)$: the remaining term is $\sum S(w_{(1)})w_{(2)}x=0$. Hence $D$ sends a word to its left-nested commutator. On a primitive element homogeneous of word length $n$ its coproduct has only the two primitive terms, so $D(p)=np$. Therefore its left-nested representation is obtained by dividing every word coefficient by $n$. In particular $\widetilde U(w)=U(w)/|w|$ is one valid source choice. The source defines this choice only by the universal Lie identity; any other allowed choice represents the same Lie polynomial. No original bracket order is changed. [given, construct, algebra, step 52.1]

54.1 **A support vanishing needed for the auxiliary flag proof.**. [given, construct, algebra, step 53.1]

55.1 If a source $S$ coefficient is nonzero, choose the first entry whose initial phase is minimal. Its target phase is at least the target phase of the total. At the first or last position this is immediate from the single adjacent cut condition. At an interior position write the word as $P,q,R$. The conditions are $\tau'(P)\le\tau'(q+R)$ and $\tau'(P+q)>\tau'(R)$. If $\tau'(q)$ is less than both $\tau'(P),\tau'(R)$, weak seesaw would give $\tau'(P)\le\tau'(q+R) \le\tau'(R)$ while $\tau'(P+q)\le\tau'(P)$, a contradiction. If it is at least the phase of $P$, the second inequality also makes it at least the phase of $R$, and hence of the total. If it is at least the phase of $R$, the first inequality makes it at least that of $P$, with the same conclusion. Choosing the last maximal initial phase and reversing inequalities gives the dual bound. [given, construct, algebra, step 54.1]

56.1 Now suppose a nonempty proper subset $I$ of entries has all initial phases strictly smaller than those outside, and each of its target phases is strictly smaller than the target phase of the total. Then the source $U$ coefficient is zero. A permissible first grouping cannot mix $I$ with its complement. Choose a final logarithm block containing an $I$ block. Among its first grouping blocks the minimal initial phase belongs to $I$. Its target phase is strictly below that of the whole word, by weak seesaw on sums of $I$ entries. The preceding S bound contradicts the requirement that this final logarithm block have the total target phase. Every summand is therefore zero. The reversed version is identical. Our left-nested representative $U/|w|$ preserves this pointwise vanishing. [given, construct, algebra, step 55.1]

57.1 **Local simple-wall consequence.**. [given, construct, algebra, step 56.1]

58.1 For a continuous finite family of additive auxiliary slopes, choose a sufficiently small interval around one wall so the relative order of all distinct wall-phase clusters stays unchanged. The ordered factorization (7) then refactors separately inside those clusters. Uniqueness shows that U cannot mix different wall clusters. If the geometric full-flag lemma permits only two nonzero factors at that wall, all nonlinear terms except those two vanish. On their two orders, the S definition and (5) give coefficients $+1,-1$ in associative form, hence their single bracket. Composition (6) propagates the identity across any finite list of such walls. This is the formal transport component; identifying all actual and formal auxiliary invariants, including the vertical framing changes, is still a geometric induction in the target assembly, not a consequence of naming U. [given, construct, algebra, step 57.1]

59.1 **Two-framing existence algebra.**. [given, construct, algebra, step 58.1]

60.1 This is the algebraic conjugacy component. Its geometric commutator is proved by the horizontal component, and its forgetful maps by the framing-map component. It needs no pre-existing base Euler derivations or Maurer–Cartan interpretation. [given, construct, algebra, step 59.1]

61.1 Work over a characteristic-zero field (or a Q-algebra with the scalars below invertible). At a finite height cutoff all BCH, logarithm, exponential and adjoint series are finite because a nested bracket of more positive-height inputs than the cutoff vanishes. The prounipotent group here is precisely the inverse limit of these BCH nilpotent groups, and its action fixes framing degree. Thus exp/log are defined algebraically, not analytically. If the application uses rank alone and has positive-charge rank-zero terms, rank is NOT the required positive height: use the declared compatible positive filtration of the operational completion. Let L=∏_{α>0}L_α be a complete positive-graded Lie algebra; choose an additive positive integer height, with brackets increasing height. All sums/brackets must be finite in each prescribed graded coordinate, or interpreted in a topology where they converge. Enlarge this Lie algebra by independent degree-zero framing symbols δ_i and their singly/doubly framed modules. Assume [δ_i,δ_j]=0 for distinct colours. Let S_i=δ_i+P_i, with P_i positive-degree and singly i-framed. Assume the ACTUAL two-framing identity [S_i,S_j]=0. In particular its degree-α term is the displayed three-term identity. [given, construct, algebra, step 60.1]

62.1 For each charge α assume linear maps f_i from singly i-framed degree α to L_α, and q_i from doubly (i,j)-framed degree α to singly i-framed degree α, satisfying precisely. [given, construct, algebra, step 61.1]

63.1 f_i([x,δ_i])=c_i(α)x, q_i([u_i,δ_j])=c_j(α)u_i, q_i([δ_i,v_j])=−[f_j(v_j),δ_i]. [given, construct, algebra, step 62.1]

64.1 Here c_i(α) is a scalar; x is unframed degree α and u_i,v_j are singly framed of degree α. The codomains in these formulas are essential. Framing degree and unframed charge are separate gradings: δ_i has unframed charge zero but retains its i-framing label; [u_i,δ_j] is doubly framed, not an element of L. Neither f_i nor q_i is assumed to be a Lie homomorphism. The coefficients c_i may depend on BOTH α and the framing data, and that dependence must be retained in every division. For quantum ranks the coefficient ring must actually make the specified quantum integers units; nonzero generic values do not justify specialization at a root of unity. The framing-map component verifies these coefficient/module facts with the actual source projective residue kernel. Assume these modules sit in the completed Lie algebra so positive unframed adjoint exponentials are defined. At each α there must be TWO independent colours i,j with c_i(α),c_j(α) invertible, and the displayed identities must apply to their pair. The same framing data with two independent colours suffices; there is no requirement that their numerical weights differ. Alternatively an actually proved self-colour identity can replace the second colour. One invertible f_i left inverse alone does not imply that every P_i lies in the image of [−,δ_i]. [given, construct, algebra, step 63.1]

65.1 We construct a unique positive prounipotent g such that S_i=Ad(g)δ_i for every i. Start with g_<1=1. Suppose T_i=Ad(g_<N)δ_i agrees with S_i below height N. The T_i commute because the δ_i commute. Put u_{i,α}=(S_i−T_i)_α at height N. Subtract [T_i,T_j]=0 from [S_i,S_j]=0. Since S_i−T_i has height at least N and T_i−δ_i is positive, the degree-α equation is exactly. [given, construct, algebra, step 64.1]

66.1 [u_{i,α},δ_j]+[δ_i,u_{j,α}]=0. [given, construct, algebra, step 65.1]

67.1 Applying q_i gives c_j(α)u_{i,α}=[f_j(u_{j,α}),δ_i]. Choose a reference colour j with invertible c_j and put w_α=c_j(α)^{-1}f_j(u_{j,α}). This proves u_{i,α}=[w_α,δ_i] for every other colour i for which the pair identity holds, even if c_i is not invertible. For the second invertible colour i, applying f_i to this identity gives c_j f_i(u_{i,α})=c_i f_j(u_{j,α}). Reversing the two colours therefore also proves u_{j,α}=[w_α,δ_j]. This simultaneously proves independence of the reference colour. If pair identities are only provided for a specified set of pairs, those pairs must connect the reference colours to every framing under consideration; no extra pair identity is implicit. [given, construct, algebra, step 66.1]

68.1 Let w_N=Σ_{height α=N}w_α and set g_≤N=exp(w_N)g_<N. Then Ad(g_≤N)δ_i=T_i+[w_N,δ_i] modulo height>N: the bracket with the positive part of T_i and the second adjoint term have height>N. Hence the new conjugacy agrees through height N. The products exp(w_N)⋯exp(w_1) converge degreewise to g. BCH also gives a unique logarithm z=log g in L, and S_i=exp(ad z)δ_i. We do NOT claim z=Σw_N: its higher-degree BCH corrections must be retained. [given, construct, algebra, step 67.1]

69.1 For uniqueness, if g and h give the same family, h^{-1}g fixes every δ_i. If its logarithm has first nonzero component a_α, its first adjoint difference is [a_α,δ_i]=0. Apply an invertible c_i(α) left inverse f_i: c_i(α)a_α=0, a contradiction. Thus h^{-1}g=1. The same argument shows every finite-degree construction is independent of all reference colours, ordering among same-height corrections, and arbitrary choices. This is formal uniqueness after the actual geometric commutator and forgetful identities have been supplied, not a substitute for proving them. [given, construct, algebra, step 68.1]

70.1 **Coherent cone and fixed-locus comparison.**. [given, construct, algebra, step 69.1]

71.1 Construction. This constructs the actual obstruction-MAP-compatible comparison/localization interface below, not a theorem for arbitrary unrelated obstruction theories sharing only a tangent K-class. Read sources: `/tmp/gts-wall-sources/klt.txt` lines 2775–3070 (Theorems 2.5.8, 2.5.11, Remark 2.5.12) and lines 9187–9295 (actual direct-comparison passage); additionally the retrieved full `/tmp/gts-wall-sources/klt23.txt`, arXiv:2311.15697v1, §§2.4.6–2.5.4. These readings are provenance, not unproved theorem imports. [given, construct, algebra, step 70.1]

72.1 **1. Exact finite obstruction-killing construction.**. [given, construct, algebra, step 71.1]

73.1 Let X be Noetherian with the equivariant resolution property, V a vector bundle, E a bounded-above coherent derived object in degrees ≤k0, and e∈Ext^k(V,E), k>k0. Regard e as V→E[k]. Put F=cone(e)[−1], so E[k−1]→F→V→E[k]. Since E[k−1] is in degrees ≤0, F is in degrees ≤0, and H0(F)→V is surjective. (When k=k0+1, H0(F) need not equal V: the surjection, not equality, is what is used.) Choose a bounded-above locally free representative of F and let V0 be its degree-zero term. Its map p:V0→V is surjective, and the map V0→F lifts p. The splitting space. [given, construct, algebra, step 72.1]

74.1 A={s∈Hom(V,V0):p s=id_V}. [given, construct, algebra, step 73.1]

75.1 is a torsor under the vector bundle Hom(V,ker p). It carries a tautological section s of p; the composite a*V→a*V0→a*F lifts the identity of a*V. The triangle then gives a*e=0. This kills the GIVEN extension class, not every Ext group. Finitely many classes can be killed successively; previously zero classes remain zero under flat pullback. For finitely many equivariant classes the construction is equivariant by taking equivariant bundle surjections. An affine morphism preserves the resolution property: a coherent sheaf upstairs is generated by the pullback of a finite coherent submodule of its affine pushforward, which in turn has a bundle surjection downstairs. Thus the successive splitting spaces retain the needed property. [given, construct, algebra, step 74.1]

76.1 For completeness, the bounded-above locally free representative is constructed as follows. Represent F by a bounded-above complex of quasi-coherent sheaves and truncate above degree zero. On a Noetherian quasi-compact algebraic space each quasi-coherent sheaf is the union of its coherent submodules: on a finite étale affine presentation choose finitely many generators and their finitely many descent relations, extend them coherently, and take their finite sum. Thus a surjection to a coherent quotient already comes from a coherent submodule. Choose a coherent submodule of the degree-zero cycles surjecting onto H0(F). Its finite coherent kernel can be covered by a coherent submodule of the preceding term. Include also finitely many cycle generators of H−1(F), and repeat downward. This constructs a bounded-above coherent complex quasi-isomorphic to F; at each stage its mapping cone has vanishing cohomology in the degrees already treated. Now choose bundle surjections by the resolution property. At the top choose a bundle covering the coherent term. At each next degree use the coherent cycle sheaf of the mapping cone of the partial resolution: a bundle surjection onto that cycle sheaf gives simultaneously the next differential and the next map into the coherent complex. The cycle condition is exactly the chain-map equation; the surjection kills the next mapping-cone cohomology. Downward induction constructs the required bounded-above bundle complex with quasi-isomorphism to F. The top map V0→H0(F)→V is surjective, as used above. This argument uses explicit finite coherent submodules and mapping-cone cycles, rather than asserting that arbitrary global sections of H0(F) lift through the derived object. With equivariant resolution property perform the same construction in equivariant coherent modules, retaining the finitely generated subcomodules of each linearized quasi-coherent module. [given, construct, algebra, step 75.1]

77.1 A finite tower of these torsors is smooth affine over X with affine-space fibres locally. Its total space need not be an affine scheme. No step changes that fact. [given, construct, algebra, step 76.1]

78.1 **1a. Actual coherent G0 descent along each splitting torsor.**. [given, construct, algebra, step 77.1]

79.1 Let a:A→X be a torsor under a rank-r vector bundle V. Its affine transition cocycle gives a vector-bundle extension 0→V→W→O_X→0: glue V⊕O by the affine translations in the off-diagonal entry. Then A=P(W)∖P(V), using the convention of lines; each line outside P(V) has its unique vector mapping to 1 in O_X. The hyperplane divisor P(V) is cut out by the quotient W→O_X, a section of O(1). [given, construct, algebra, step 78.1]

80.1 The coherent projective-bundle formula here can be proved directly. On P(W)×_X P(W), the diagonal has the Koszul resolution of the map from the tautological line on the first factor to the tautological quotient on the second. Tensor by the pullback of any coherent sheaf on the second factor. This remains exact: in relative affine coordinates the diagonal equations are differences of polynomial variables, a regular sequence also on the pulled coefficient module. Push to the first factor and take alternating coherent cohomology classes. This expresses every class as Σ_{k=0}^r [O(−k)]π*α_k. The coefficients are independent: multiply such a relation successively by O(j), j=0,…,r, and apply the alternating proper pushforward Rπ*. The Laurent-Čech complex of projective space gives Rπ*O(j−k)=0 for −r≤j−k<0, O_X for j=k, and Sym^{j−k}(W∨) for j>k. The resulting triangular system has identity diagonal, forcing every α_k=0. This proves G0(P(W))=⊕_{k=0}^r O(−k)π*G0(X), without regularity of X. The same proof works over an algebraic space, since the coordinate complexes and diagonal are intrinsic and their exactness is checked on an étale scheme atlas; equality in G0 is obtained by the GLOBAL diagonal complex, not glued from local G0 equalities. [given, construct, algebra, step 79.1]

81.1 Coherent localization G0(P(V))→G0(P(W))→G0(A)→0 follows by coherent extension from an open and the support filtration: a coherent sheaf killed on the open has finite filtration by powers of the hyperplane ideal and hence classes pushed from its closed complement. Conversely the relations induced by exact sequences on the open lift after extending the finitely many sheaves and maps, with all discrepancies supported on the complement. In the displayed projective-bundle bases, hyperplane pushforward is. [given, construct, algebra, step 80.1]

82.1 i*(O(−k)π*α)=(O(−k)−O(−k−1))π*α,  0≤k<r. [given, construct, algebra, step 81.1]

83.1 This is its two-term Cartier Koszul sequence tensored with the pulled coherent coefficient; the fibre linear coordinate is regular on that coefficient, so exactness is retained. Its cokernel identifies all r+1 basis copies of G0(X), with no further relation. Thus a*:G0(X)→G0(A) is an isomorphism. Every finite tower has the same property. All resolutions and arguments are equivariant, giving the equivariant statement whenever equivariant coherent extensions exist; for torus actions in this setup these are obtained by retaining the finite weight submodules of each extension and linearizing the displayed complexes. [given, construct, algebra, step 82.1]

84.1 This is COHERENT G0 homotopy, exactly where virtual structure sheaves live. It does not assert homotopy invariance of vector-bundle K0 on a singular base: that assertion is false in general. Virtual tangent K0 classes are pulled FORWARD; only virtual-sheaf G0 classes are descended by the inverse just proved. [given, construct, algebra, step 83.1]

85.1 **2. Actual Artin-base symmetrized pullback, with its global pulled cone.**. [given, construct, algebra, step 84.1]

86.1 For the Artin base one must retain its actual cotangent boundary: an Artin base Y can have L_Y and E_Y in degree +1. The connecting map Ω_f[−1]→f*L_Y need not vanish even on affine charts. It cannot simply be killed and replaced by a split cotangent triangle. The following uses the actual double-cone construction instead. [given, construct, algebra, step 85.1]

87.1 Put U=Ω_f and P=f*E_Y. The obstruction to lifting the cotangent connecting map d:U[−1]→f*L_Y through P is its class in Hom(U[−1],cone(P→f*L_Y))=Ext¹(U,C), with C≤−2. Section 1 kills this class on a finite splitting torsor. Choose the resulting lift δ:U[−1]→P. Via the given κ-symmetry of P, its dual is δ†:P→κU∨[2]. The composite δ†δ is a class in Ext³(U,κU∨), killed by one further splitting torsor. Choose a nullhomotopy; averaging it with its shifted adjoint gives the symmetric nullhomotopy, since 2 is invertible. Let F=cone(δ). The nullhomotopy gives ξ:F→κU∨[2] extending δ†, and set. [given, construct, algebra, step 86.1]

88.1 Ebar=fibre(ξ),  so κU∨[1]→Ebar→F→κU∨[2]. [given, construct, algebra, step 87.1]

89.1 The morphism of triangles from δ to the cotangent triangle gives F→a*L_X. Its composite with Ebar is the actual global map φbar:Ebar→a*L_X on the torsor A. The two cone triangles, paired by the adjoint of δ and the chosen symmetric nullhomotopy, identify Ebar with κEbar∨[1]. One can verify this on the total complex with summands P⊕U⊕κU∨[1]: the off-diagonal maps are δ, its shifted adjoint, and the selected nullhomotopy; dualizing exchanges the outer summands and preserves its differential. This verification is a comparison of the chosen mapping-cone complexes, not uniqueness of an unspecified octahedron. [given, construct, algebra, step 88.1]

90.1 The map Ebar→a*L_X is an H0-isomorphism and H−1-surjection: F is the smooth pullback obstruction theory by its morphism of cotangent triangles; the extra triangle adds only an obstruction summand in degree −1. On geometric fibres its only possible positive term is H1(P), and H1(δ) surjects onto it, since X is an algebraic space and the original φ_Y is an isomorphism in positive degree. Thus Ebar has Tor amplitude [−1,0]. Its dual K-class is a*(Tvir_Y+T_f−κ^{-1}Ω_f), by the two cone triangles. None of these assertions requires splitting the cotangent triangle of A→X. [given, construct, algebra, step 89.1]

91.1 Functoriality of the intrinsic normal-cone embedding under a morphism to the pulled cotangent complex now gives the GLOBAL representable closed immersion. [given, construct, algebra, step 90.1]

92.1 a*C_X → Ecal_A := h¹/h⁰(Ebar∨). [given, construct, algebra, step 91.1]

93.1 Explicitly, in every étale ambient presentation the obstruction-theory map sends its conormal algebra into the numerator symmetric algebra; the induced maps agree on common smooth ambient refinements because they are induced by the same global φbar. Their closed cone algebras therefore descend. This descends actual algebras/maps, not Chow or G0 equalities. [given, construct, algebra, step 92.1]

94.1 Choose a global two-term bundle presentation of Ebar on A, which exists by the resolution property and its Tor amplitude. Write Ecal_A=[F1/F0]. Pull back the cone immersion to the numerator atlas to obtain an actual global closed cone C_F⊂F1. Define. [given, construct, algebra, step 93.1]

95.1 v_A=(p_F1*)^{-1}[O_{C_F}] in G0(A). [given, construct, algebra, step 94.1]

96.1 Here the class of O_{C_F} is pushed to F1 and inverse pullback is the coherent-G0 bundle homotopy of §1a. Equivalently v_A is the alternating Tor/Koszul zero-section class. THIS is a global class even though Ebar⊕Ω_a has no global map to L_A. On a chart where the smooth cotangent extension of a splits, the ordinary local smooth-pullback POT is Ebar⊕Ω_a; its additional Ω_a is in degree zero. The smooth transformation rule for the intrinsic cone adds the same tangent denominator T_a, so its numerator cone is exactly C_F on that chart. Hence v_A is the cone/Koszul class of the actual locally defined smooth-pullback APOT, constructed globally without asserting an ordinary global POT on A. [given, construct, algebra, step 95.1]

97.1 **3. Complete Koszul comparison when a common smooth embedding is supplied.**. [given, construct, algebra, step 96.1]

98.1 Here is a genuine virtual-sheaf comparison calculation, not the assertion that equal virtual tangent classes imply equal virtual cycles. Let X be a scheme with a fixed closed immersion X⊂P into a smooth scheme. Let I be its ideal and let G(t)=Σ_{n≥0}[I^n/I^{n+1}]t^n in G0(X)[[t]]. Suppose a POT has been strictified to [F→Ω_P|X]→[I/I²→Ω_P|X], with F a vector bundle surjecting onto I/I². Its ordinary cone is C=Spec_X gr_I O_P⊂F∨. Write λ_{−t}(F)=Σ_i(−t)^i[Λ^i F]. [given, construct, algebra, step 97.1]

99.1 The Koszul resolution of the zero section of F∨, tensor O_C, has graded Euler series λ_{−t}(F)G(t). Its homology is Tor^{Sym F}_*(O_C,O_X). Positive-degree generators of Sym F act null-homotopically on this Koszul complex, so its homology is killed by those generators. Coherence then makes each Tor a finite coherent O_X-module supported in finitely many internal grades; there are only rank F+1 homological degrees. Consequently λ_{−t}(F)G(t) is a POLYNOMIAL in G0(X)[t], equal to the alternating graded Tor class. Evaluating this polynomial at t=1 gives exactly the zero-section Koszul definition of O_X^vir. This does not attempt to evaluate G(t) itself at t=1. [given, construct, algebra, step 98.1]

100.1 Define the embedding-dependent expression Λ_{X/P}(t)=λ_{−t}(Ω_P|X)G(t). Then. [given, construct, algebra, step 99.1]

101.1 O_X^vir = [Λ_{X/P}(t)/λ_{−t}(E)]_{t=1},. [given, construct, algebra, step 100.1]

102.1 where E=[F→Ω_P|X], so λ_{−t}(E)=λ_{−t}(Ω_P)/λ_{−t}(F). The inverses exist formally at t=0. Equality of E-classes in K0(X) gives equality of λ-series, because the exterior-power identities for a short exact bundle sequence follow from its exterior-degree filtration. Thus for TWO actual POTs strictified over this SAME embedding with equal K0-classes, the displayed polynomial expressions are equal before evaluation, and their actual virtual structure sheaves are equal in G0(X). Stabilizing a POT by an acyclic [W=id→W] preserves the class by the same cancellation, or directly by the contractible extra Koszul factor. This proves the claimed comparison in this supplied common-embedding scope. [given, construct, algebra, step 101.1]

103.1 The calculation also applies equivariantly, term by term, over the generic character coefficient field: all complexes, filtrations and Koszul null-homotopies are equivariant. It requires no properness. Properness is needed later for pushforward of the resulting class, not for its construction. [given, construct, algebra, step 102.1]

104.1 **4. Global resolution independence and torsor descent of the cone class.**. [given, construct, algebra, step 103.1]

105.1 If [F1/F0] and [H1/H0] present the SAME Ecal_A, their common atlas P=F1×_{Ecal_A}H1 is a vector-bundle torsor over F1 under H0, and over H1 under F0. These are schemes/algebraic spaces: the atlas maps are representable affine smooth maps. Their composite maps P→A are equal. Pulling the SAME intrinsic cone to P gives the same actual scheme C_P and hence the same class [O_{C_P}] in G0(P). Both pullbacks of [O_{C_F}] and [O_{C_H}] equal this class by flat base change. The two composite pullbacks G0(A)→G0(P) are the same isomorphism, by §1a. Inverting them proves v_A independent of the global bundle presentation. It also proves its agreement with the ordinary zero-section Tor formula, not only with a formal virtual-tangent expression. [given, construct, algebra, step 104.1]

106.1 For a further flat splitting torsor b:B→A, flatness pulls the actual cone algebra, its atlas and its Koszul complex to the corresponding data on B. Thus v_B=b*v_A. Inverting a*:G0(X)→G0(A) defines v_X. Common refinements of torsors are their fibre products, still finite towers of vector-bundle torsors. Their pullbacks are isomorphisms on G0; it suffices to compare cone embeddings after any further finite splitting refinement. [given, construct, algebra, step 105.1]

107.1 For clarity, the finite comparison data that can be made common are not assumed unique without proof. Two lifts δ of the same cotangent boundary differ by a map through C[−1], where C=cone(P→f*L_Y)≤−2. Its lift class belongs to Hom(U,C), hence is killed by §1 (0>−2). Once δ agrees, two extensions ξ differ by a map factoring F→U, hence by a class in Ext²(U,κU∨); kill that class. Symmetric nullhomotopy differences are killed in the same group. Differences between completions of the cotangent-triangle morphism factor through a map U→f*L_Y. Its obstruction to lifting through P is in Hom(U,C), again killed. The resulting lifted map U→P gives the triangular change of cone coordinates. On the hyperbolic presentation P⊕U⊕κU∨[1], it is the unipotent change exp(N), where N sends U into P by that lift, sends P into κU∨[1] by its negative shifted adjoint, and sends κU∨[1] to zero. Here N³=0, so exp(N)=1+N+N²/2 is an actual finite change of complex coordinates; conjugating the differential gives precisely the corresponding changed cone/nullhomotopy data. Its map to the pulled cotangent complex is the changed completion by construction. This identifies the obstruction-theory MAPS and thus their actual closed cones. The extra finite classes needed to realize these cone-coordinate homotopies globally are of the displayed positive Ext types and are killed on the common refinement. It follows that v_X is independent of the choices in this specified symmetrized-pullback construction. No assertion for arbitrary unrelated APOTs is used. [given, construct, algebra, step 106.1]

108.1 **5. Actual direct-sum/fixed-component comparison, rather than equality of K-classes.**. [given, construct, algebra, step 107.1]

109.1 The actual BASE assumptions are stronger than a K-class identity. They provide a commuting obstruction-map square after direct sum: the pulled map φ_{β+γ} followed by the cotangent map to the product is φ_β⊞φ_γ after projection onto diagonal blocks. The two cross blocks have auxiliary S-weights +1 and −1, so their fixed parts vanish. The rigidified and unrigidified maps are supplied κ-symmetrically compatibly. These are the actual diagrams at `/tmp/gts-wall-sources/klt.txt` lines 300–325 and assumption 1.2.4, not conclusions inferred from bilinear K-classes. [given, construct, algebra, step 108.1]

110.1 Consequently the required additional geometric input for a specific fixed component Z⊂M is an IDENTIFICATION OF COTANGENT TRIANGLES: after fixed restriction, the smooth relative arrow/gauge complex for the master space identifies with the smooth relative complex for the product/projective framing map, and the boundary maps to the fixed base cotangent complex agree. The framing-map component and the horizontal-master component prove that input by their displayed acyclic arrow/gauge/relation contractions. With that identification, the two inputs (P,U,d,φ_Y) in §2 identify AS MAPS. Choose common δ and common symmetric nullhomotopy after finite Ext-killing torsors, using §4 to compare any earlier choices. The double-cone complexes and their maps to a*L_Z then identify, not just their K-classes. Their pulled intrinsic cones are therefore the SAME global cone. Applying §4 gives equality of the actual numerator-Koszul G0 classes on the common torsor, and injectivity of torsor pullback gives equality on Z. This proves the precise virtual-sheaf comparison needed by the actual master-space application, conditional only on its OWN explicitly stated geometric cotangent-triangle diagram. It does not claim Theorem 2.5.11 for unrelated theories sharing only a tangent K-class. [given, construct, algebra, step 109.1]

111.1 Compatible torsors can be chosen on the master space and restricted to its fixed locus. To see the fixed restriction is a genuine torsor, represent one equivariant splitting torsor by an equivariant extension 0→V→W→O→0. Over an S-fixed base Z decompose into S-weights. Since S is linearly reductive, 0→V^fix→W^fix→O→0 is exact, and its fibre over 1 is the fixed part of the original torsor; it is a V^fix-torsor. Moving weights give the relative moving tangent V^mov and must be retained in any localization calculation. Induction treats a finite tower. This supplies actual common fixed torsors, not a nonexistent assertion that all fibres of an equivariant torsor are fixed. [given, construct, algebra, step 110.1]

112.1 The determinant convention is likewise actual data: retain the specified square root of the determinant line after the stated torus cover and generic-character extension. The preceding identification of obstruction-theory complexes identifies determinant lines; use the canonical root identification constructed under that map. Tensoring the established UNTWISTED equality by that specified common root gives the symmetrized equality. There is no assertion that a square root exists from a K-class equality alone. [given, construct, algebra, step 111.1]

113.1 **6. Coherent specialization and a global normal-cone pullback.**. [given, construct, algebra, step 112.1]

114.1 Let i:F→X be a closed immersion with ideal J and an ACTUAL relative obstruction-theory map N0∨[1]→L_{F/X}; assume N0 is a vector bundle. Its H−1-surjection gives Sym(N0∨)→gr_J O_X and a closed cone j:C_{F/X}→N0. For a coherent module M on X its Rees module is Σ_n J^nM·t^{−n} inside M[t,t^{−1}], with J^nM=M for n≤0. It is t-torsion-free and hence flat over C[t], and has ordinary fibre M and special fibre gr_J M. Relations from an exact sequence of coherent modules are respected after specialization: use the induced filtration on a submodule; Artin–Rees bounds its difference from the J-adic filtration, and the two finite discrepancy filtrations have the same successive quotients with opposite signs. Thus specialization σ_i:G0(X)→G0(C_{F/X}) is well-defined. This is a global Rees-module construction, valid for algebraic spaces by descent of the modules themselves. [given, construct, algebra, step 113.1]

115.1 Define i^!=0_N0! j_*σ_i. The zero-section operation is the inverse bundle pullback of §1a, or equivalently its finite Koszul complex. For α∈G0(F), its push to X has filtration Jα=0, so σ_i i_*α is the zero-section push of α on C_{F/X}. The Koszul differential is zero on that section. Consequently. [given, construct, algebra, step 114.1]

116.1 i^!i_*α=λ_{−1}(N0∨)α.                                      (L1). [given, construct, algebra, step 115.1]

117.1 This proof includes all coherent multiplicities and derived Tor terms. It does not require i to be a regular embedding. [given, construct, algebra, step 116.1]

118.1 There is also an explicit Koszul/specialization commutation used below. For a vector bundle E over X and a closed cone C⊂E containing the zero F, deform F⊂E by the Rees algebra of its ideal. In a bundle chart with fibre coordinates e_1,…,e_r, this algebra is O_X[t,J/t,e_1/t,…,e_r/t]. The coordinates e_k/t define the relative zero-section Koszul complex. At a nonzero t it is the ordinary Koszul complex on e_k, up to invertible rescaling; at t=0 it is the zero-section complex on E|F over C_{F/X}. Tensor with the Rees module of O_C. Taking fibre and Koszul homology in either order gives the same total complex. Its alternating coherent class therefore proves. [given, construct, algebra, step 117.1]

119.1 i^!(0_E![O_C])=0_{E|F⊕N0}![O_{C_{F/C}}],                  (L2). [given, construct, algebra, step 118.1]

120.1 where the right side means the normal-cone specialization with its actual embedding in E|F⊕N0. The vector-bundle coordinate calculation is invariant under changing bundle frames and thus glues as an actual global Koszul complex. Quotient tangent atlases are removed by the common-torsor argument of §4; the same equation holds for the global pulled intrinsic cone. In particular one never identifies a nonflat pullback normal cone with the original normal cone. [given, construct, algebra, step 119.1]

121.1 **7. Compatible-map double deformation and its corner calculation.**. [given, construct, algebra, step 120.1]

122.1 Along the fixed locus, after a further finite splitting torsor OVER F, the restricted smooth cotangent extension of the ORIGINAL torsor a can be split. This is a class in Ext¹(Ω_a|F,a*L_X|F), whose target is in degrees ≤0, so §1 applies. No new torsor cotangent is added: one is pulling the OLD restricted complex and map to F', not asserting an ordinary POT on F'. This resolves the earlier infinite-torsor concern for the restricted diagram needed by localization. [given, construct, algebra, step 121.1]

123.1 The resulting restricted full complex has its actual fixed and moving decomposition. [given, construct, algebra, step 122.1]

124.1 E_X|F = E_F ⊕ [N1∨→N0∨]. [given, construct, algebra, step 123.1]

125.1 Its moving H¹-dual identification with the obstruction sheaf is part of the global Ebar construction, not merely a K-class equality. Introduce the auxiliary fixed theory Etilde_F=E_F⊕N1∨[1], with the extra summand mapping to zero. On the moving part define g:E_X|F→Etilde_F by identity N1∨ in degree −1 and zero N0∨ in degree zero; on the fixed part it is identity. Its cone is N0∨[1]. Since L_F has weight zero, the composite obstruction map to L_F is the fixed map, so this is an actual morphism to the cotangent triangle. The five-lemma argument gives N0∨[1]→L_{F/X} an H−1-surjection (and both H0 vanish), hence the relative POT needed in §6. Adding the zero obstruction summand gives, by the direct product of Koszul complexes,. [given, construct, algebra, step 124.1]

126.1 vtilde_F=λ_{−1}(N1∨)v_F.                                  (L3). [given, construct, algebra, step 125.1]

127.1 We prove the remaining identity. [given, construct, algebra, step 126.1]

128.1 i^!v_X=vtilde_F.                                           (L4). [given, construct, algebra, step 127.1]

129.1 The construction takes place over F×P1 BEFORE taking any G0 classes on affine charts. It uses a fixed refinement on F on which all the restricted complexes and MAPS above are global; pullback on G0(F) is injective, so that refinement loses no equality. Put. [given, construct, algebra, step 128.1]

130.1 κ=(z0 id,z1 g):E_X|F(−1)→E_X|F⊕Etilde_F, K=cone(κ). [given, construct, algebra, step 129.1]

131.1 The global distinguished triangle E_X|F⊗O(1)→K→N0∨[1] follows by the two-coordinate Koszul sequence O(−1)→O²→O(1). Thus K is perfect of amplitude [−1,0]. Equivalently, where z0≠0 it is quasi-isomorphic to Etilde_F, and at z0=0 it is E_X|F⊕N0∨[1]; the Tor-amplitude assertion follows fibrewise. The same construction from cotangent complexes gives µ=(z0 id,z1 can). The compatibility of the obstruction MAPS is a morphism K→cone(µ), whose cone is ≤−2. Consequently the intrinsic normal sheaf in this deformation has a representable closed embedding in h¹/h⁰(K∨). This assertion concerns the whole normal deformation, rather than a nonflat restriction of a normal sheaf to its fibre. [given, construct, algebra, step 130.1]

132.1 Here is the actual construction and local verification of that assertion, including the corner classes. For a closed affine presentation X⊂P=Spec R with ideal I, use the deformation chart R[t,I/t]⊂R[t,t^{−1}]. If F has ambient ideal H=I+J, its image in this chart has ideal (H,I/t). The second deformation chart is. [given, construct, algebra, step 131.1]

133.1 (R[t,I/t])[s,(H,I/t)/s] ⊂ (R[t,I/t])[s,s^{−1}].             (D). [given, construct, algebra, step 132.1]

134.1 These charts are the open charts of the blowups with the strict transform removed; use their usual t^{-1},s^{-1} charts to compactify each parameter to P1. Rees is functorial in the maps of ideals and commutes with smooth flat pullback. For a general local embedding, the overlap groupoid is obtained by doing exactly the same construction on a common smooth ambient refinement. The tangent directions of such a refinement act on its cone atlas; quotienting those actual smooth groupoids constructs the intrinsic normal deformation. This is descent of affine algebras and smooth groupoids. Its numerator algebra in the bundle stack of K glues because κ and its map to µ are GLOBAL. No local G0 equality is being descended. [given, construct, algebra, step 133.1]

135.1 On a chart, differentiate the defining relations t(f/t)=f, for f∈I, at the centre F. The dt terms vanish at its zero normal section. The resulting conormal relation is t·d(f/t)=df. Together with the centre generators in H this is the matrix (z0 id,z1 can), after homogenization. Replacing df by its actual obstruction-theory lift gives (z0 id,z1 g). Surjectivity on conormal H−1 and the H0-isomorphism imply surjectivity of the associated symmetric algebra map on this whole deformation chart. This proves the closed embedding into the numerator of K; the same maps on a common smooth refinement identify the tangent denominators, so the embedding is global. [given, construct, algebra, step 134.1]

136.1 Use a global two-term resolution of K on F×P1 and pull this actual normal-deformation algebra to its numerator. Such a resolution exists: the resolution property of F extends to F×P1, since relative Serre generation first gives π*π_*G(n)→G(n) for a coherent G, and a bundle surjection to π_*G(n) on F then gives a bundle surjection on the product. Perfect Tor-amplitude truncation gives the two-term resolution. Apply its zero-section Koszul complex to the coherent Rees module on that numerator. Its homology is coherent over F×P1: the positive numerator variables act nullhomotopically on Koszul homology, and the complex has finite length. This constructs one GLOBAL class w∈G0(F×P1). [given, construct, algebra, step 135.1]

137.1 The fibre operations used in this construction are DERIVED fibres, given by the two-term complexes K(t−a) and K(s−b). Do not replace the chart (D) by an allegedly two-parameter-flat algebra. The canonical interchange. [given, construct, algebra, step 136.1]

138.1 K(t−a)⊗K(s−b) → K(s−b)⊗K(t−a),. [given, construct, algebra, step 137.1]

139.1 with sign (−1)^{pq} in bidegree (p,q), is an actual isomorphism of total complexes. The same interchange holds with each vector-bundle-coordinate Koszul factor. Thus the order of specialization and zero-section intersection can be changed in this total complex, retaining every Tor term. The exact nonflat-corner algebra is as follows. Write A=R[t,I/t] and B=A[s,K/s], K=(H,I/t). Multiplication by t is injective on A, since A⊂R[t,t^{−1}], and hence on B⊂A[s,s^{−1}]. Thus its first DERIVED t-fibre is B/tB. There is a canonical surjection. [given, construct, algebra, step 138.1]

140.1 B/tB → (A/tA)[s,K_0/s],  K_0=image(K in A/tA). [given, construct, algebra, step 139.1]

141.1 Both algebras become (A/tA)[s,s^{−1}] after inverting s; the right one is by definition the IMAGE in that ring. Hence the kernel is EXACTLY the s-power-torsion ideal of B/tB. It is coherent and killed by some power of s on each Noetherian chart. For ANY such torsion module M, derived restriction by K(s) has alternating class zero, also after tensoring all numerator Koszul factors: filter M by powers of s, so each quotient is annihilated by s, and K(s) on that quotient has equal degree-zero and degree-one terms with zero differential. This is a GLOBAL coherent-filtration cancellation, not a claim that the corner complexes are quasi-isomorphic. The canonical surjection and its torsion kernel are functorial in Rees maps and glue. Thus the derived double-corner Euler class equals that of the ORDINARY Rees algebra of K_0 in A/tA, even though the latter algebra need not be the ordinary base change B/tB. This is the precise missing Tor correction. It justifies saturation without falsely asserting that ordinary cones commute with nonflat fibres. [given, construct, algebra, step 140.1]

142.1 The endpoint identifications can now be checked as IDENTIFICATIONS OF THESE CONSTRUCTED CORNER COMPLEXES. Strictify a local POT to [B∨→Ω_P|X] by adjoining/cancelling an acyclic bundle complex. To perform this check one may use the actual conormal strictification on an affine chart: lift Ω_P→H0(E) to E0 by projectivity, let B∨=ker(E−1⊕Ω_P→E0), and subtract the lifted degree-zero homotopy. This gives a surjection B∨→I/I². Retain this actual surjection in (D), not just the virtual rank. A smooth equivariant local ambient around a fixed point admits coordinates in which the fixed ambient has ideal J generated by its moving coordinates; the tangent/conormal maps can alternatively be checked in equivariant formal coordinates, since completion is faithfully flat on each finite coherent complex involved. In this model N0=T_P^mov and N1=B^mov. [given, construct, algebra, step 141.1]

143.1 At the ordinary endpoint the moving ambient normal coordinates in the above total complex form their ordinary regular-coordinate Koszul factor. It cancels the moving tangent denominator. The moving obstruction fibre coordinates restrict to ZERO on the fixed normal cone, so their Koszul factor has zero differential and contributes λ_{−1}((B^mov)∨). What remains is exactly the numerator Koszul complex of the fixed POT [((B^fix)∨)→Ω_{P^S}|F]. Hence the ordinary endpoint of w is v_F λ_{−1}(N1∨)=vtilde_F. At the normal endpoint, take the t-derived fibre first in the same total complex. The generators become the actual associated-graded normal cone of X, and the s-derived fibre is its deformation along the zero F. The rescaled fibre coordinates e/s are precisely those of (L2). Thus its zero-section class is i^!v_X. The total-complex interchange is the canonical global isomorphism for changing the order of derived fibres and Koszul factors. The additional comparison to the ordinary Rees cone has the explicitly described global s-torsion kernel, whose alternating derived-fibre class is zero by the global filtration just proved; it is NOT asserted to be a quasi-isomorphism. A local strictification verifies the actual maps of algebras, identifies this kernel, and identifies the surviving coordinate factors. Those are identities of globally constructed algebra maps, kernels and Koszul complexes, verified by faithful flatness. Their exact sequences and torsion-filtration cancellations give equality in global G0; one never infers it merely from local G0 equalities. [given, construct, algebra, step 142.1]

144.1 Acyclic moving stabilization adds the same moving bundle W to N0 and N1. The extra Koszul factor on either side is λ_{−1}(W∨); the common quotient or inverse factors cancel. Thus the check is invariant under the stabilizations needed for strictification and common smooth ambient refinements. All equalities retain the actual cone module, including nilpotents and nonreduced multiplicities. [given, construct, algebra, step 143.1]

145.1 Finally the two derived point restrictions G0(F×P1)→G0(F) agree: in the global projective-bundle basis every O(−k) restricts to a one-dimensional trivial base line at either point. Apply these restrictions to the SINGLE global class w. Its two computed endpoints give (L4). This completes the required compatible-map identity; it does not invoke the general Kiem–Savvas localization theorem, an affine Jouanolou device, or a global POT on the total torsor. [given, construct, algebra, step 144.1]

146.1 **8. Completed concentration reduction: only SURJECTIVITY is needed.**. [given, construct, algebra, step 145.1]

147.1 Here S=C× is the localization torus. In the fixed-graph application below, the residual torus acts trivially on the final fixed base F, so the Euler bundles there have a full character decomposition; retain that equivariance throughout. Coherent equivariant G0 is unchanged by discarding nilpotents, by its finite nilpotent-ideal filtration. On the reduced complement U=X∖F, all S-stabilizers are finite μ_d. Their orders have a common finite bound: the inertia is a quasi-finite finite-type closed subgroup of S×U, so a finite quasi-finite affine presentation bounds its geometric fibre degrees. Stratify by the finitely many possible d, taking reduced invariant locally closed strata. On a stratum with stabilizer μ_d, that subgroup acts trivially (equality on all geometric points implies equality on a reduced finite-type space), and S/μ_d acts freely. [given, construct, algebra, step 146.1]

148.1 Such a stratum has a finite stratification by free torsors U_j→Y_j with Y_j a scheme. Here is the actual available quotient interface: choose a finite separated étale scheme atlas V of the stratum. Its relation for the free S/μ_d-action is a flat finite-type equivalence relation represented by a scheme, since the original space is separated and the relation is closed in (S/μ_d)×V×V. Apply the actual published imported `thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation` to get a dense saturated open quotient scheme, and repeat on the lower-dimensional complement. The resulting quotient map is a principal S/μ_d torsor because its relation is the free-action relation. Thus no global quasi-projectivity or Jouanolou device is assumed. [given, construct, algebra, step 147.1]

149.1 Choose n divisible by all these finite stabilizer orders. The S-character z^n descends on each quotient to a line bundle L on Y_j. On coherent equivariant G0 of U_j, multiplication by 1−z^n is multiplication by 1−L pulled from Y_j. This lowers the dimension of support over Y_j: trivialize L over a dense open of every component of that support; the difference vanishes there and is a class supported on the lower-dimensional complement by coherent localization. Repeating dim Y_j+1 times gives zero. Successive coherent localization sequences for the finite stratification therefore annihilate G0^S(U) by a power of a nonzero Laurent polynomial in z. Thus G0^S(U) vanishes after passing to the generic character field. The localization sequence G0^S(F)→G0^S(X)→G0^S(U)→0 proves i_* SURJECTIVE there. No unproved higher-K concentration theorem or injectivity statement has been used. [given, construct, algebra, step 148.1]

150.1 Since N0 has only nonzero S-weights, λ_{−1}(N0∨) is invertible as an operator on this localized group: its scalar rank character is a product of nonzero factors 1−z^w, and the difference from that scalar lowers support dimension by the same generic trivialization argument. A finite geometric-series inverse suffices on the dimension filtration. By (L1), λ_{−1}(N0∨)^{-1}i^! is a LEFT inverse to i_*. Surjectivity then makes it the full inverse. Thus concentration injectivity follows from the explicit normal-cone/Koszul construction, with no G1 localization assertion. [given, construct, algebra, step 149.1]

151.1 The proved (L4), (L1)–(L3), and this surjectivity now yield. [given, construct, algebra, step 150.1]

152.1 v_X=i_*(v_F λ_{−1}(N1∨)/λ_{−1}(N0∨)). [given, construct, algebra, step 151.1]

153.1 For a finite equivariant torsor tower its moving relative tangent must be included in N0−N1. Over F its fixed part is the fixed torsor of §5. The inclusion of that fixed torsor into the full restricted torsor is a regular immersion with moving normal equal to the relative moving vector bundle: use the weight decomposition of 0→V→W→O→0. Its ordinary Koszul self-intersection cancels exactly that relative moving Euler factor. Coherent torsor homotopy then transports the formula back to X. Tensoring by the specified compatible determinant root transports the untwisted equality to the symmetrized convention. No root existence or root-of-unity specialization is asserted. [given, construct, algebra, step 152.1]

154.1 This constructs the precise symmetrized-pullback construction and its MAP-compatible fixed-component comparison/localization. Its geometric inputs are explicitly the actual base obstruction-map/direct-sum and relative cotangent-triangle compatibilities, the given resolution property, and properness of the fixed loci when taking pushforward. It does not prove the separate star-incidence or universal-class components; those are proved in the other components of this proof. [given, construct, algebra, step 153.1]

155.1 **9. Fixed-graph-locus construction: NO resolution property of the master space.**. [given, construct, algebra, step 154.1]

156.1 This is the scope needed for the actual application. Write H=T×S, S=G_m, and M for the separated finite-type master algebraic space. Do NOT assume M has the resolution property. For every character w=t^μs^ν with ν≠0, let K=T_w be the connected maximal subtorus in ker(w), and Y=M^K. The actual hypotheses give Y proper and its H-equivariant resolution property. Also D=M^H=Y^{H/K} is proper. The smooth master framing map g:M→B and the global base κ-symmetric POT φ_B are supplied; its symmetrized-pullback virtual tangent CLASS V_M=g*V_B+T_g−κ^{-1}Ω_g is globally defined even though a global POT on M has not been constructed. [given, construct, algebra, step 155.1]

157.1 All finite obstruction-killing is performed ON Y. Pull the full complexes P=g*E_B, U=Ω_g and the cotangent boundary U[−1]→g*L_B derivedly to Y. The cone of the base obstruction map remains in degrees ≤−2 after derived pullback, so the lifting and isotropy obstructions in §2 are still killed by the splitting-torsor construction on Y. Its resolution property, not one on M, provides the required bundles. This gives a full κ-symmetric perfect complex Ebar_Y on a finite H-equivariant torsor A→Y with an actual map. [given, construct, algebra, step 156.1]

158.1 Ebar_Y → (L_M)|A,. [given, construct, algebra, step 157.1]

159.1 where (L_M)|A means derived restriction through Y→M. It is NOT initially a map to L_Y. Retain its FULL K-weight decomposition, including moving weights. As in §5 the K-fixed locus A^K→Y is a torsor under the fixed relative bundle and has coherent G0 pullback an isomorphism. Restrict the construction there. [given, construct, algebra, step 158.1]

160.1 Taking K-fixed part followed by the actual cotangent map gives. [given, construct, algebra, step 159.1]

161.1 (Ebar_Y)^K → (L_M|Y)^K → L_Y.                              (F1). [given, construct, algebra, step 160.1]

162.1 This is a POT on Y after pullback to the torsor, in the precise pulled-cotangent sense of §2; it descends its virtual structure class v_Y by the global cone/Koszul/G0 construction. Here is the fixed-cotangent check. On an equivariant affine or formal chart write Y by the ideal J generated by the nonzero K-weight functions. Modulo J², coefficients have weight zero, so J/J² has no weight-zero component. The transitivity cone of (L_M|Y)^K→L_Y is (L_{Y/M})^K. Its H0 is zero and its H−1=(J/J²)^K is zero; it is therefore ≤−2. The full restricted obstruction-map cone is also ≤−2. Taking fixed weights is exact, so (F1) is an H0-isomorphism and H−1-surjection. The complex is perfect with Tor amplitude [−1,0], since the full symmetrized-pullback complex has that amplitude on the algebraic-space locus. This verifies the POT property rather than identifying C_Y with a fixed part of the nonflat base change of C_M. [given, construct, algebra, step 161.1]

163.1 The moving class is. [given, construct, algebra, step 162.1]

164.1 N_w=(V_M|Y)^{K-mov} ∈K0_H(Y). [given, construct, algebra, step 163.1]

165.1 It is represented on the chosen torsor by the actual moving part of Ebar_Y∨. Its Euler expression e(N_w)=λ_{−1}(N_w∨) is globally defined on Y from that perfect class and independent of presentation. Only FORWARD restriction on vector-bundle K0 has been used; descent of virtual structure sheaves is in coherent G0. All its K-weights are nonzero. For the regularity proof we interpret its inverse by the explicit K-weight completion in §10. We do NOT assert that an arbitrary residual-R-equivariant bundle differs from its ordinary rank by a support-lowering class: that would already be false for a nontrivial R-character on a point. On the final full-H-fixed base D every bundle has a full H-character decomposition, and the rank/support-nilpotence argument of §8 is valid for the ordinary localized denominators there. [given, construct, algebra, step 164.1]

166.1 Now use ONLY Y, which is proper and has the equivariant resolution property, for the residual rank-one torus R=H/K. Up to a finite torus cover split H as K×R; retain K as residual equivariance in §§6–8. Apply that proved ordinary/cone-APOT localization to v_Y. On D the fixed complex is the full H-fixed part of the original restricted construction. The R-moving part inside its K-fixed part has class. [given, construct, algebra, step 165.1]

167.1 N_R=(V_M|D)^{K-fix,R-mov}. [given, construct, algebra, step 166.1]

168.1 Consequently. [given, construct, algebra, step 167.1]

169.1 χ_H(Y,v_Y e(N_w)^{-1} F|Y) = χ_H(D,v_D e(N_R)^{-1}e(N_w|D)^{-1}F|D)                 (F2). [given, construct, algebra, step 168.1]

170.1 for any supplied perfect insertion F (including the allowed T-local coefficient extension). Properness makes both pushforwards legitimate. The weight decomposition gives N_R+N_w|D=(V_M|D)^{H-mov}; exterior Euler classes multiply for this direct-sum decomposition. No localization theorem on M was applied. [given, construct, algebra, step 169.1]

171.1 The ACTUAL map compatibility supplied by the proof's star-incidence construction identifies the full H-fixed obstruction theory on D with the endpoint or mixed product/projective-framing theory. At an endpoint the extra arrow/gauge complex is [O --a→ Hom(V3,V1)] (or the b version) and is acyclic. On the mixed locus the two gauge directions (v,u) map to the two nonzero arrows by the invertible matrix [[a,−a],[0,−b]]; its paired κ-dual is acyclic too. The surviving base map is the diagonal product by the given obstruction-map/direct-sum square, with moving cross Ext blocks of S-weight ±1. Thus §5 applies AS A MAP comparison. Canonical determinant trivializations of those actual acyclic complexes identify the determinant-root restrictions. This is the specified geometric input, not an equality inferred from a virtual rank or a tangent K-class. [given, construct, algebra, step 170.1]

172.1 For two graph tori K,K', restrict both constructions to their COMMON full-torus fixed locus D. The original data P,U and boundary map there are the same. A common finite splitting refinement on D makes the δ and isotropy choices common by §4; taking the same H-fixed summands gives the same cone and v_D. The moving denominator is the same H-moving part of V_M, independently of the intermediate decomposition. Hence (F2) identifies their full-fixed rational contributions. No statement about a global APOT or global resolution property on the ambient M is needed for this comparison. [given, construct, algebra, step 171.1]

173.1 **10. Pole cancellation, with the precise determinant-root boundary.**. [given, construct, algebra, step 172.1]

174.1 First consider the UNTWISTED contribution with a perfect insertion F. We give a proper-pushforward Euler expansion proof of regularity, which also handles the residual equivariance on Y. Choose a generic cocharacter σ of K on which every K-moving weight is nonzero. The full moving class decomposes into finitely many terms χ_K W_χ, where W_χ is residual-quotient-equivariant and K acts trivially on it. Rewrite negative σ-weights as positive ones by the exterior duality identity. [given, construct, algebra, step 173.1]

175.1 λ_{−1}(L V∨)=(−L)^rank(V) det(V∨) λ_{−1}(L^{−1}V). [given, construct, algebra, step 174.1]

176.1 Its determinant and character prefactors are invertible and have bounded σ-degree. Expand each remaining inverse positive-weight factor by. [given, construct, algebra, step 175.1]

177.1 λ_{−1}(L V)^{−1}=Σ_{n≥0} L^n Sym^n(V). [given, construct, algebra, step 176.1]

178.1 This is a valid formal identity by the symmetric/exterior Koszul resolution; it remains valid for the finite virtual sums by multiplying numerator factors. All positive σ-degrees are bounded below by 1 after an integral rescaling of σ, so each coefficient receives only finitely many terms. Thus v_Y/e(N_w), multiplied by the insertion and any specified root, is a well-defined Laurent series bounded below in the σ-direction, with coefficients actual residual-equivariant coherent classes on Y. Proper pushforward produces a Laurent series whose coefficients are finite Laurent polynomials in the residual character w, with the allowed T-local coefficients. No residual character denominator was introduced. The same reasoning applies to proper relative pushforward, coefficient by coefficient, when its coherent target group is retained. [given, construct, algebra, step 177.1]

179.1 Residual localization on the proper resolution-property space Y identifies this series with the expansion of the rational FULL-FIXED expression in (F2). This follows termwise for positive Euler expansions and finite numerator factors; on D all weights are actual characters, so both are the same geometric-series expansion of its ordinary rational Euler factors. A rational expression with a genuine pole at w=1 cannot have every coefficient regular there in a bounded-below K-Laurent series: clear all denominators except a maximal power of w−1, use the identity between numerator and denominator times that series, and reduce coefficientwise at w=1. It would make the reduced nonzero numerator zero. Therefore the full-fixed expression has no pole at w=1. [given, construct, algebra, step 178.1]

180.1 Equivalently, its possible Laurent-binomial factors 1−χ with χ|K≠1 are relatively prime to every codimension-one factor of 1−w. This can be checked by extending the primitive direction of w to a character-lattice basis after a finite cover: a monomial with a transverse exponent cannot have its binomial divisible by a polynomial in that one direction. The series argument is the actual proper-pushforward proof and does not assume scalar-rank nilpotence for residual-equivariant bundles. [given, construct, algebra, step 179.1]

181.1 Running this argument for every w with nonzero S-exponent removes every possible non-T Euler denominator from the full-fixed expression. The original expression has only Laurent-binomial Euler denominators and the allowed T-local insertion denominators. Unique factorization in Frac R(T)[s,s^{-1}] therefore leaves a Laurent polynomial in s. This is the pole-cancellation conclusion for the untwisted class, proved using proper resolution-property Y and residual localization, without a global class on M. [given, construct, algebra, step 180.1]

182.1 For the SYMMETRIZED contribution, the exact additional requirement is that the specified formal determinant root restrict to an actual H-equivariant line class on each Y, up to the allowed κ^{1/2} coefficient extension, and that its restriction to D be the specified full-fixed root. If that is part of the specified orientation/root data, tensor F by it in (F2); it introduces no new character denominator, and the same proof gives the symmetrized pole cancellation. Root agreement under the actual acyclic endpoint/mixed complexes is the canonical agreement described at the end of §9. [given, construct, algebra, step 181.1]

183.1 Do not replace this precise requirement by the inference 'κ|K≠1 therefore a root exists.' The weight-polarization construction is valid when there is no K-weight κ/2 summand (or when that summand has its supplied compatible root). In detail, for E=−κE∨ and a polarization selecting one member of each pair μ,κ−μ, set det(E)^{1/2}=κ^{−rank(E_+)/2}det(E_+). Flipping a pair changes E_+ by F+κF∨ and hence leaves this root unchanged. This proves the root formula and its independence under the stated no-half-weight condition. But κ nontrivial in the K-character lattice alone does not imply the condition: if w=t s² and κ=t, then K has t=s^{-2}, and κ/2 is the integral K-character s^{-1}. Whether such a summand actually occurs in the BASE/root data is a separate weight/orientation check, not decided by this abstract example. [given, construct, algebra, step 182.1]

184.1 Thus the complete fixed-locus scope bridge (F1)–(F2) and untwisted pole cancellation use no resolution property of M. The symmetrized conclusion follows with the SPECIFIED compatible graph-fixed determinant-root data. If those roots have not actually been supplied or the no-half-weight condition proved in the actual star geometry, that is the one explicit remaining root-interface obligation; this file does not silently add it as a new Given to the public CY3 theorem. [given, construct, algebra, step 183.1]

185.1 **11. Binding the bridge to the ACTUAL star/flag weights closes its root interface.**. [given, construct, algebra, step 184.1]

186.1 For the proof's actual star and horizontal full-flag masters, the proved two-weight trichotomy gives compensated S-weights exactly 0 and 1 on the underlying object and vertex lines. Therefore every cross Ext block, framing Hom block and connecting/gauge matrix in the actual full virtual complex has S-exponent 0,+1 or −1. Exterior Euler factors are products of 1−t^μs^ν with ν in this set. Taking finite support-filtration inverses only raises powers of these same factors; tensoring the determinant root does not introduce a new Euler denominator. Thus the ONLY possible non-T poles of the actual expression are. [given, construct, algebra, step 185.1]

187.1 w=t^μs=1   or   w=t^μs^{−1}=1.                            (P). [given, construct, algebra, step 186.1]

188.1 This weight assertion is supplied by the proof's actual two-weight/star geometry; it is not deduced just from an abstract K-class identity. T-only factors (ν=0) already belong to the permitted k_T,loc coefficient localization. [given, construct, algebra, step 187.1]

189.1 For either graph in (P), K=T_w is literally the graph of the homomorphism T→S, s=t^{−μ} or s=t^μ. Projection K→T is an ISOMORPHISM of algebraic tori. In particular the given original character κ∈X*(T), assumed not divisible by 2 in that lattice as in the source convention, remains not divisible by 2 in X*(K). No integral K-weight κ/2 exists. Every K-weight bundle of the full restricted complex has an integral K-character; hence there is no κ/2 summand. This resolves the root condition of §10 for every pole that ACTUALLY occurs, without asserting the stronger and generally unjustified implication for arbitrary |ν|>1. [given, construct, algebra, step 188.1]

190.1 Apply the polarization construction to the full virtual cotangent class E=V_M∨ restricted to Y=M^K. This class is globally κ-symmetric before choosing a torsor: the base class is given globally and the smooth term Ω_g−κT_g is its explicit hyperbolic pair. Its K-weight subcomplexes and determinant lines are therefore global on Y. Choose a generic K-cocharacter, select one member of each pair μ,κ−μ, and form κ^{−rank(E_+)/2}det(E_+). The calculation in §10 proves its square is det(E) and proves independence of the polarization. It is an actual line up to exactly the allowed formal κ^{1/2} coefficient extension, with no inversion of a new moving character. [given, construct, algebra, step 189.1]

191.1 On D, choose that same K-cocharacter as an H-cocharacter. Since no restricted pair is a halfweight, it is generic for the finitely many full weight pairs after a small generic choice inside K. The H-polarization root and the K-polarization root consequently agree there by the polarization-independence calculation, not merely because their squares agree. The actual acyclic star/endpoint complexes have their canonical determinant trivializations, so their removal preserves precisely this root identification. [given, construct, algebra, step 190.1]

192.1 One can also display the S-powers directly: in the full H-fixed expression choose a polarization dominated by the S-direction for the ±1 pairs. Each such pair contributes det(t^μs E_μ) times a power of κ^{1/2}; its S-power is the INTEGER rank E_μ. The S-weight-zero pairs are polarized in T, with only κ^{1/2} added. Thus no s^{1/2} coefficient extension occurs. This is compatible with the graph-root construction by the same independence argument. [given, construct, algebra, step 191.1]

193.1 It is now enough to run §9 and the regularity argument of §10 only for the graph tori (P), whose fixed loci are given proper with equivariant resolution property. The common full-fixed expression is regular at every possible non-T denominator. Unique factorization over k_T,loc[κ^{±1/2}] then yields. [given, construct, algebra, step 192.1]

194.1 χ(M, Ovir_sym ⊗F) ∈ k_T,loc[κ^{±1/2}][s,s^{−1}],. [given, construct, algebra, step 193.1]

195.1 where the left notation means exactly the common FULL-FIXED-LOCUS proper pushforward (F2), not a newly constructed global virtual sheaf or a proper pushforward on the nonproper master M. This proves the actual pole-cancellation and virtual-sheaf comparison interface used by the proof's star/flag construction without assuming a resolution property on M. The more general arbitrary-|ν| determinant-root warning in §10 remains a warning about an unused stronger abstract formulation, not an unproved premise of this actual application. [given, construct, algebra, step 194.1]

196.1 **Vertical flag recursion.**. [given, construct, algebra, step 195.1]

197.1 The following constructs the finite vertical recursion. It uses the actual auxiliary weak stability, not a continuous family replacing its ±∞ jumps. Read KLT, `/tmp/gts-wall-sources/klt.pdf`, §§4.1.5–4.1.14, 4.2.4–4.4.11 and §§2.6.6–2.6.11, and Joyce, `/tmp/gts-wall-sources/joyce.pdf`, Proposition10.14 and its proof, printed257–261. All corresponding passages were read in full. The finite proofs below replace, rather than assume, Joyce10.14/Corollary3.18 and the source's single-pure-letter coefficient shortcut. [given, construct, algebra, step 196.1]

198.1 At s=1 the actual endpoint is the genuine λ/r slope on the WHOLE initial critical phase category, with total charge in hatR=Rα∩kerλ. Identifying this endpoint with the final weak stability is a separate conclusion of the proved finite detection condition (D) in the detection component below; it does not follow from critical-τ closure or weak dominance alone. No unknown final unframed invariant is an input. [given, construct, algebra, step 197.1]

199.1 The inputs already constructed in this proof are the exact S/U transport and separated-subset vanishing in `the finite-word component above`, the weak-admissibility/phase-closure construction in `the critical-closure and framing-map component above`, the actual framed-pair characterization of the KNOWN initial unframed z(τ), and the map-compatible symmetrized smooth-pullback/virtual-sheaf interface in `the coherent-cone component above`. No global APOT or resolution property of a master algebraic space is asserted here. The ordinary projective-bundle operation below is constructed explicitly. [given, construct, algebra, step 198.1]

200.1 **1. Objects, finite dominance and endpoint convention.**. [given, construct, algebra, step 199.1]

201.1 Put N=fr(α), q_(a,b)(x)=Σ_(i=a)^b(μ_i+x), d_(a,b)=b−a+1, and m_(a,b)=Σμ_i/d_(a,b). Write δ_(a,b) for the primitive pure-framing class (0,1_[a,b]). The critical value of a pure interval is −m_(a,b), and x_a=x0(a)=−m_(a,N), with x_(N+1)=0. The ordering of PURE phases is the ordering of the MEANS m_(a,b)+x, with negative/zero means assigned first entry −∞ and positive means assigned +∞. It is not the ordering of the unnormalized q's. This distinction corrects the raw-numerator selection in the prose of KLT4.2.8. [given, construct, algebra, step 200.1]

202.1 The nonzero-object critical slope is lexicographically (τβ,(sλβ+Σ(μ_i+x)e_i)/rβ). All charge and dimension lists used in this proof are finite. Choose μ_i successively with sufficiently small ratios, as the source permits. Every occurrence of “dominates” below means the following finite strict estimate: form each linear difference of slopes after multiplying by the finitely many positive denominators rβ; whenever its first nonzero μ coefficient is positive, choose the later μ's so that the sum of the absolute values of their terms is less than half that leading term. For x≥x_a substitute |x|≤m_(a,N). If the first framing jump c is less than a, this x-error is also a later-μ error. There are finitely many inequalities, so one choice works simultaneously. When a=c and the total flag has only one step, use the exact expression q_(a,N)(x)>0 instead; do not claim μ_a dominates x in that case. [given, construct, algebra, step 201.1]

203.1 A flag e has e_1≤1, differences e_(i+1)−e_i in {0,1}, and e_N≤frβ. For e_N>0 let a be its last jump: the first index with e_a=e_N. Put d=1_[a,N] and e'=e−d. When e_N≥2, e' is a flag whose last jump a' is strictly less than a. The boundary convention is important: q_(a,N)(x_a)=0, so a pure QUOTIENT d has phase −∞ at x=x_a and is destabilizing there. All nonvanishing recursions therefore require x>x_a, not x≥x_a. [given, construct, algebra, step 202.1]

204.1 **2. Elementary actual support.**. [given, construct, algebra, step 203.1]

205.1 For β≠0 a semistable auxiliary object has all chain maps V_1→⋯→V_N→Fr(E) injective. To see this without a stability-category assumption, decompose the finite chain of vector spaces into interval representations by successive choices of bases adapted to images and kernels. Any interval ending before the last vertex gives a nonzero pure-framing direct summand of the auxiliary object; its complement retains the whole object E. Its pure phase is ±∞ whereas the whole object's phase is finite. In one of the two directions it is a destabilizing subobject or quotient. Thus no such interval occurs. All remaining intervals end at Fr(E), which is exactly injectivity of all chain maps. This is an objectwise linear-algebra argument; no splitting of E in the original category is claimed. [given, construct, algebra, step 204.1]

206.1 Underlying τ-semistability follows by lifting an underlying destabilizing subobject using the exact framing functor. The first slope coordinate then destabilizes the auxiliary object. At s=1 work on every β∈hatR, not just β∈tildeR: inside the initial phase abelian category, a positive-λ subobject, equipped with the induced framing intersections, destabilizes because the λ gap exceeds every framing numerator correction. Conversely a negative-λ subobject cannot destabilize. The remaining tests have λ=0. Thus the underlying object is λ/r-semistable of slope zero. This uses the proof's proved critical-τ phase category and an ordinary additive positive-rank slope on it. It does NOT identify the underlying object with a final-weak-semistable object; that identification is deferred to (D), for its specified classes, in Section9. [given, construct, algebra, step 205.1]

207.1 A pure semistable representation is a direct sum of copies of a SINGLE interval. Indeed the interval decomposition applies, and distinct interval means are distinct by the generic μ choice; their pure phases remain ordered by their means for every x. Thus the primitive pure auxiliary invariant is δ_(a,b), supported where its internal arrows are isomorphisms; all other pure auxiliary classes are zero by the definition of the primitive Lie invariant. The formal transform has the same pure classes: all relative pure phase comparisons are independent of s,x, so S/U transport is the identity on the pure subalgebra. [given, construct, algebra, step 206.1]

208.1 If β≠0 and x≤x_a, then e_(a−1)=⋯=e_N for every actual semistable object. Otherwise choose a linear functional on V_N annihilating V_(a−1), propagate it backwards, and take its one-dimensional pure quotient. Its first nonzero vertex b satisfies b≥a; it is the tail [b,N], of weight q_(b,N)(x)≤0 because x≤x_a≤x_b. This quotient has phase −∞ and destabilizes. In particular x≤x_1 forces e=0. This proves actual support, including the strict boundary, independently of Joyce10.3. [given, construct, algebra, step 207.1]

209.1 **3. Projective-bundle bracket, including its support.**. [given, construct, algebra, step 208.1]

210.1 Fix a dimension vector e with e_1≤1 and unit nonnegative increments, with last jump a, and let X be the injection locus of class (β,e'). In this paragraph the target inequality e_N≤frβ is NOT assumed; this is what the h=0 support test must prove in the formal induction. It is enough that the lower-dimensional injection locus exists, so e'_N≤frβ. Over X identify V_(a−1) with its subbundle of Fr(E), and put Q=Fr(E)/V_(a−1), of rank h=frβ−e_(a−1). The locus of class (β,e) where the internal arrows are injective and the composite from V_(a−1) to Fr(E) is injective is the stack of a line L and a vector in Q⊗L. The vector is the induced map L inverse=V_a/V_(a−1)→Q. This is an equivalence in families: recover the rank-one extension of V_(a−1) by pulling back the line map along Fr(E)→Q; the usual isomorphisms of that extension are precisely its line automorphisms. On the nonzero-vector locus it is P_X(Q). This proves the projective-bundle identification on the appropriate gerbe; it does not choose a global universal line on its rigidification. [given, construct, algebra, step 209.1]

211.1 Write π:P_X(Q)→X. The smooth symmetrized pullback on K-homology is. [given, construct, algebra, step 210.1]

212.1 πhat*φ=π*φ cap {λ_(−1)(κ inverse Ω_π) κ^(−(h−1)/2)K_π}. [given, construct, algebra, step 211.1]

213.1 Here an insertion is evaluated by the corresponding proper pushforward on P_X(Q). To compute it, pass to the line gerbe and write z=O(1). The Euler sequence gives T_π=zQ−1. Substituting this and K_π=det(zQ) inverse yields the rational kernel. [given, construct, algebra, step 212.1]

214.1 R_Q(z)=be_(z inverse)(κ inverse Q dual)/be_z(Q),. [given, construct, algebra, step 213.1]

215.1 where be is the symmetrized exterior Euler class, with the same κ half-character convention as stipulated in the coefficient data. The projective pushforward is the difference of the Laurent expansions at ∞ and 0 of this kernel, divided by κ^(−1/2)−κ^(1/2). This identity follows directly by resolving the projective diagonal with the tautological-line/quotient Koszul complex and using the Laurent-Čech cohomology of O(j). It is valid with coherent coefficients on a singular algebraic-space base: the diagonal equations are polynomial differences, regular on the pulled coefficient module, so no regularity of X is used. Equivariant splitting can be used to verify the displayed identity, and the symmetric polynomial identity descends in Q. [given, construct, algebra, step 214.1]

216.1 The zero section in tot(Q⊗L) is exactly direct sum with the pure interval d. The quiver bilinear class is Σ V_i dual⊠V_(i+1)−Σ V_i dual⊠V_i. On the injection plateau, its two cross terms telescope, and their κ-symmetrization is exactly the kernel R_Q(z), not merely its numerical rank. Translation along the line gerbe is the D(z) operation in the proof's bracket. Therefore the defining vertex residue gives the identity. [given, construct, algebra, step 215.1]

217.1 [φ,δ_(a,N)]=j_*πhat*φ,. [given, construct, algebra, step 216.1]

218.1 where j is the open injection-locus inclusion into the locus just described. This is an equality in the target's operational K-homology, not an equality of classes obtained by gluing local G0 calculations. Both sides are represented by the same global zero-section Koszul complex and its Laurent-Čech residue on the gerbe. In particular the bracket is supported on the FULL injection locus. If h=0 it vanishes, since the nonzero-vector locus is empty. [given, construct, algebra, step 217.1]

219.1 For a pure interval [a,b] with b<N, and a class supported on an injection plateau V_(a−1)≅⋯≅V_N, both cross terms telescope to zero: they are V_(a−1) dual−V_b dual and V_(b+1)−V_a. Hence its Euler kernel is 1 and its Lie residue is zero. This is the exact support vanishing used in the formal induction, rather than an inference from a zero Euler-characteristic rank. [given, construct, algebra, step 218.1]

220.1 Finally π_*πhat*φ=[h]_κ φ. In a splitting with Chern roots L the kernel is the product of ((zκL)^(−1/2)−(zκL)^(1/2))/((zL)^(1/2)−(zL)^(−1/2)). Its limits at ∞ and 0 are (−κ^(1/2))^h and (−κ^(−1/2))^h. Their difference divided by κ^(−1/2)−κ^(1/2) equals. [given, construct, algebra, step 219.1]

221.1 [h]_κ=(−1)^(h−1)(κ^(h/2)−κ^(−h/2))/(κ^(1/2)−κ^(−1/2)). [given, construct, algebra, step 220.1]

222.1 This is an identity of the projective operation, including the determinant-root sign, not a classical Euler-characteristic substitution. [given, construct, algebra, step 221.1]

223.1 **4. Formal support by a finite first-failure induction.**. [given, construct, algebra, step 222.1]

224.1 The formal classes zhat are obtained by the proof's finite S/U transform of the actual initial (s,x)=(0,−1) data. Pure support was proved in Section2. For nonzero β use lexicographic induction on (|e|,rβ), with the e=0 case vacuous. At the initial parameter all claimed supports are actual. If the support first fails along the straight segment from (0,−1), choose parameters just before and after that first failure; the finite charge list gives only finitely many ordering/discontinuity points. The proof's exact transport writes the new class as a finite Lie polynomial in the old classes. Every proper factor is smaller in the stated induction order, except pure factors which have already been handled. The n=1 term has the previous support, which remains valid as x increases. [given, construct, algebra, step 223.1]

225.1 If all factors have nonzero β, addition and direct sum preserve monotone dimensions, injection support, and the applicable late-plateau conditions. Otherwise consider the pure factors. At a first-failure parameter x*, a pure interval of strictly negative weight is separated below all finite-object factors and stays on the negative side immediately before and after; select the group with MINIMAL INTERVAL MEAN. The proof's separated-subset lemma makes its transport coefficient zero. A strictly positive pure weight is ruled out by the dual maximal-mean argument. Thus all pure factors have zero weight at x*. Generic μ makes them copies of one primitive interval [a,b]. Since its mean is at least m_(a,N), x*≤x_a. The induction hypothesis therefore makes every nonzero-β factor constant in framing dimensions on a−1,…,N (or zero framing when a=1). [given, construct, algebra, step 224.1]

226.1 If the interval occurs at both the first two positions their bracket is zero by skew symmetry. Otherwise insert its first occurrence into the accumulated bracket of the preceding nonzero-β factors. If b<N, Section3's exact telescoping gives zero. Thus only b=N survives. At x+=x* its pure phase is still −∞; the separated-subset lemma again gives zero. Consequently a surviving new contribution is strictly after x*=x_a. Adding tails preserves all late-plateau conditions applicable at x+, and preserves internal injection support. [given, construct, algebra, step 225.1]

227.1 If in addition the total dimensions have unit increments (and e_1≤1, automatic in Sα), at most one pure tail can occur, since two would create a jump of at least two at a. Before its insertion the nonzero-β part has full injection support by the induction hypothesis, because every individual dimension jump is bounded by the corresponding total jump. Section3 makes its bracket with the pure tail fully injective. If its last dimension had already equalled frβ, the bracket would vanish by h=0. Otherwise adding one retains e_N≤frβ. Later nonzero-β direct sums preserve both properties. This contradicts the supposed first failure, proving ALL formal supports in KLT4.2.4: monotonic dimensions and internal injection; full injection and e_N≤frβ for flags; late plateaux at x≤x_a; and zero framing at x≤x_1. [given, construct, algebra, step 226.1]

228.1 **5. The finite decomposition lemma above a flag's last wall.**. [given, construct, algebra, step 227.1]

229.1 Let e_N≥2, a its last jump, and y,y'∈[x_a,0]. Suppose a decomposition (β,e)=Σ(β_i,e_i) has factors supported either on actual semistable loci or on the proved formal supports at y, and has nonzero transport coefficient U(y,y'). Endpoint s is 0, or s=1 on the WHOLE hatR sector with the proof's restricted hatR formal transport and the actual λ/r endpoint. At s=1, the positive/negative λ gap first eliminates nonzero-λ critical factors from a possible finite framing equality; actual zero-slope factors and all surviving restricted formal factors therefore have λ=0. No membership in tildeR is assumed here. Then either there is only one factor, or exactly two factors (β,e') and (0,d). If BOTH y,y' are strictly above x_a only the one-factor case remains. [given, construct, algebra, step 228.1]

230.1 Here is the full finite argument. Pure factors have interval dimensions (possibly a positive multiplicity for actual semistable factors). If some pure interval has mean greater than m_(a,N), choose the group of maximal such mean. At y,y'≥x_a these have phase +∞, are strictly above every other factor and above the total finite phase. Separated-subset vanishing eliminates the coefficient. Thus no such interval occurs. Every interval with smaller mean starts strictly after a: strong μ dominance makes its first index determine the ordering, and an interval starting at a but ending before N has larger mean. Choose the earliest start of a smaller-mean interval. No previously starting smaller-mean interval can end immediately before it, and a tail [a,N] does not end there. Nonzero-object factors have nondecreasing dimensions. Summing increments at this earliest start would give a positive jump in the total plateau a,…,N, impossible. Hence every pure factor is a copy of d; the unit jump at a allows at most one, of multiplicity one. [given, construct, algebra, step 229.1]

231.1 There cannot be two nonzero-object factors. Let c be the first framing jump of the total flag; because e_N≥2, c<a, and exactly one factor owns that jump. For y,y'≥x_a, the finite-dominance estimate in Section1 makes that owner's finite slope strictly greater than the total finite slope whenever its charge is proper. It also strictly dominates every other finite slope. If no pure factor occurs, or it has phase −∞ at y=x_a, select this maximal owner. If a pure factor has phase +∞ at y>x_a, instead select the group of minimal finite slopes: it excludes the owner and is strictly below the total at y'. In either case the proof's separated-subset lemma makes U zero. Therefore at most one nonzero-object factor remains. If there are two factors and both y,y'>x_a, the pure tail stays +∞ and is itself separated above the total, so their coefficient vanishes. At the boundary its two orders have S/U coefficients +1 and −1, yielding the single bracket with the pure tail. [given, construct, algebra, step 230.1]

232.1 The same proof gives formal constancy above x_a when e_N=1. In that case e=d, and after the pure-interval elimination either the unique nonzero framed factor has slope q_(a,N)(y)/rβ_i strictly greater than the total, or all finite factors are unframed of slope zero and the pure tail has +∞. The exact q_(a,N)>0 supplies the strict inequalities. Thus zhat is independent of x for x>x_a even for one-step flags; no false μ_a≫|x| estimate is used. [given, construct, algebra, step 231.1]

233.1 **6. Actual x-independence without assuming Joyce Corollary3.18.**. [given, construct, algebra, step 232.1]

234.1 We supply the effectivity step needed to apply Section5 to actual objects. If an object is semistable at y' and has its y-HN filtration, its factors have strictly decreasing y phases. For each proper HN prefix, semistability at y' says its y' phase is at most that of the complementary quotient. In the present critical auxiliary sector, a finite phase is a ratio with additive numerator and positive additive rank; pure prefixes/quotients have the explicitly signed infinite phases. Thus the source S cut rule for every cut of this HN word is satisfied, and S for the whole word is 1. [given, construct, algebra, step 233.1]

235.1 More precisely U for this word is nonzero. Strictly decreasing old phases force the first U grouping to be the identity. The only logarithmic cuts contributing are the HN prefixes at which both pieces have y' phase equal to that of the total. If a pure piece occurs at such a cut, its phase would be infinite while the total phase is finite, so this cannot happen. On finite critical pieces equality is the ordinary additive-ratio equality. For any chosen subset of these equal-phase cuts, the intervening blocks again satisfy every S prefix inequality by additivity; their S product is 1. Conversely a permitted logarithmic grouping must cut at exactly such equal-phase prefixes. If there are m available cuts, the definition of U is therefore. [given, construct, algebra, step 234.1]

236.1 Σ_(k=0)^m (−1)^k binom(m,k)/(k+1)=∫_0^1(1−t)^m dt=1/(m+1)>0. [given, construct, algebra, step 235.1]

237.1 This is the direct prefix proof in this actual auxiliary sector, not a statement that arbitrary weak slope categories are abelian. The HN existence and the exact critical-phase closure used to form its successive admissible quotients are supplied by the proof's proved weak-admissibility component. The finite numerator/rank calculation above verifies the additional effectivity assertion that was not in that component. [given, construct, algebra, step 236.1]

238.1 Apply this to an object semistable at y'>x_a and its y-HN factors for y>x_a. Section5 forces a single factor. Hence it is semistable at y too; symmetry proves equality of semistable loci for all x>x_a. The same argument applies to every smaller flag. There are no strictly semistable objects there. At a generic x, an equal-phase decomposition into two nonzero-object factors is excluded by the unique earliest framing jump and μ genericity; a pure factor has infinite phase and cannot be an equal-phase factor of a finite-phase object. Any nongeneric equality of two finite slopes changes sign on one side, unless identically equal; the latter is already excluded by μ genericity and the first-jump comparison. Constancy of the semistable locus then excludes strict semistability at a nongeneric x as well. [given, construct, algebra, step 237.1]

239.1 **7. The actual projective recursion and all inequalities.**. [given, construct, algebra, step 238.1]

240.1 For x≤x_a the flag e with e_N≥1 has no semistable object, by Section2: its last jump contradicts the required late plateau. For x>x_a and e_N≥2, all its internal plateau maps ρ_i (a≤i<N) are isomorphisms, while ρ_N is INJECTIVE. It is not generally an isomorphism: e_N may be strictly less than frβ. This corrects the literal last-arrow typo in KLT4.4.5(ii). [given, construct, algebra, step 239.1]

241.1 Let π forget the last line, replacing V_a,…,V_N by V_(a−1). By Section6 both the e and e' semistable loci are constant for x>x_a (e' has its own last wall strictly below x_a). Hence it suffices to compare stability for x just above x_a. At x_a their finite slope numerators differ by q_(a,N)(x_a)=0. Finitely many possible subobject charges/dimensions give a uniform neighbourhood in which every STRICT finite comparison at the boundary persists. [given, construct, algebra, step 240.1]

242.1 A destabilizing subobject of the reduced object is also a subobject of the original. If its underlying phase is strictly bigger, it destabilizes immediately. In the remaining critical finite comparison, the quotient numerator changes only by q_(a,N)(x), which tends to zero; the strict reduced comparison persists for x sufficiently close to x_a. Conversely intersect a destabilizing subobject of the original with the reduced object. Its lost framing is 1_[b,N] for some b≥a. If b>a, q_(b,N)(x)<0 just above x_a, while q_(a,b−1)(x)>0. Subtracting the former from its numerator raises its slope, and subtracting the latter from the complementary quotient lowers that quotient slope. The destabilizing inequality therefore persists. If b=a, the quotient is unchanged and the subobject numerator changes by q_(a,N)(x)→0, so its strict boundary inequality persists. If that boundary comparison were equality, the reduced object would be strictly semistable at x_a; its last wall is below x_a, so Section6 excludes it. The same argument excludes such equality in the first direction. A subobject equal to the entire reduced object cannot destabilize the original: their quotient is the pure tail with positive phase for x>x_a. [given, construct, algebra, step 241.1]

243.1 At s=1 run this argument for ALL β∈hatR using actual λ/r-semistability on the initial phase abelian category. Every positive-λ subobject destabilizes regardless of x, every negative-λ subobject is excluded from a critical finite framing equality, and zero-λ subobjects and quotients of a zero-slope λ-semistable object are again λ-semistable. This last assertion is the ordinary additive slope argument: a subobject with positive λ in either factor would lift to a positive-λ subobject of the whole. Thus all the finite boundary comparisons above take place in the λ=0 sector on the whole hatR, without assuming final semistability or a final phase-category closure theorem. [given, construct, algebra, step 242.1]

244.1 Thus the actual stable e locus is exactly P(Q) over the actual stable e' locus, for all x>x_a. The map-compatible smooth-pullback theorem identifies their symmetrized virtual sheaves as MAPS, because their forgetful maps to the base object stack form the actual smooth triangle. Consequently. [given, construct, algebra, step 243.1]

245.1 ztilde_(s,x)(β,e)=0 for x≤x_a, ztilde_(s,x)(β,e)=[ztilde_(s,x_a)(β,e'),δ_(a,N)] for x>x_a. [given, construct, algebra, step 244.1]

246.1 The first formula also holds for e_N=1. For the second assume e_N≥2. Pushing the bracket along π multiplies by [frβ−e_(a−1)]_κ, as Section3 proves. All these statements hold for s=0, and for s=1 on the WHOLE actual λ/r zero-slope sector indexed by hatR. No projective-bundle identity is asserted at the empty boundary e locus. [given, construct, algebra, step 245.1]

247.1 **8. Formal recursion and the one-step initial identity.**. [given, construct, algebra, step 246.1]

248.1 The formal support theorem gives zhat_(s,x)(β,e)=0 for x≤x_a. Section5 and exact U transport show constancy for x>x_a. At the boundary x_a, if e_N≥2, only the two factors (β,e') and pure tail d survive. The direct S coefficients of the two orders are +1 and −1. Their Lie polynomial is exactly. [given, construct, algebra, step 247.1]

249.1 zhat_(s,x)(β,e)=[zhat_(s,x_a)(β,e'),δ_(a,N)],  x>x_a. [given, construct, algebra, step 248.1]

250.1 This proves the same full vertical recursion for formal and actual classes. For s=1 use the proof's restricted formal transport on hatR and the actual λ/r endpoint on ALL of hatR. The actual and formal vertical recursions are valid before invoking (D). [given, construct, algebra, step 249.1]

251.1 It remains to initialize at one-step e=d. An actual semistable line-chain object is exactly a stable framed pair (E,L→FrE): injectivity makes all internal tail arrows isomorphisms. For x≤x_a its pure quotient destabilizes. For x>x_a a proper underlying subobject in the remaining critical finite comparison (at s=1, necessarily λ=0) containing the framing line has finite slope q_(a,N)(x)/rβ' greater than the whole q_(a,N)(x)/rβ, and so destabilizes. A subobject missing the line can destabilize only by its underlying phase (the initial τ phase at s=0, and the genuine λ/r phase inside it at s=1); the λ-sign tests were already handled in Section7. A shorter tail [b,N] with the same E could destabilize only if q_(a,b−1)(x)≤0; but the prefix mean m_(a,b−1) is greater than m_(a,N), so x>x_a makes q_(a,b−1)(x)>0. This proves the pair equivalence, and the smooth identifications preserve the actual obstruction-map/pullback data. At s=0 ONLY, the proof's known initial framed-pair characterization gives its exponential nested-bracket formula in z(τ). At s=1 this geometric statement identifies the auxiliary one-line locus with the λ-stable pair locus, but supplies NO exponential identity in an unknown z(tildeτ). That identity will instead be constructed by full-flag stripping below. [given, construct, algebra, step 250.1]

252.1 For the FORMAL one-step formula take x_a<x≤x_(a+1). In the initial-to-final U expression, pure interval dimensions must partition d. If more than one interval occurs, its unique terminal tail starts at b>a. This terminal interval has strictly minimal initial pure phase (its mean is smallest) and, since x≤x_(a+1)≤x_b, has final phase −∞, below the total finite phase. Separated-subset vanishing kills the coefficient. Therefore only ONE pure letter δ_(a,N) occurs, with all other letters unframed. [given, construct, algebra, step 251.1]

253.1 Compute their whole Lie polynomial without selecting a special tilde-U representative. In the completed finite-charge associative envelope write A=Σ zhat_(s,−1)(β,0) over the relevant endpoint critical charge set and temporarily introduce a parameter t on the pure generator δ. At s=0 these letters are the known z(τ); at s=1 denote their formal λ-endpoint U-transform by Zβ, which has not yet been identified with a final actual invariant. Initially the pure generator is ordered below all unframed letters, and finally it is ordered above them. The unique ordered-factorization S/U transport, to first order in t, gives. [given, construct, algebra, step 252.1]

254.1 exp(A) exp(tδ) exp(−A)=1+t exp(A)δ exp(−A)+O(t²). [given, construct, algebra, step 253.1]

255.1 The coefficient is exp(ad A)δ=Σ_(n≥0)(ad A)^nδ/n!. Its prescribed nonzero β coefficient is the finite sum over β=β_1+⋯+β_n, n≥1, of [z_(β_n,0),[⋯[z_(β_1,0),δ]⋯]]/n!. This explicitly derives the coefficient 1/n! from associative exponentials and includes all word orders in the same Lie polynomial as the proof's U/wordlength representative. It assumes neither a Hall integration map nor the desired dominant wall-crossing theorem. [given, construct, algebra, step 254.1]

256.1 The actual pair characterization and the formal identity agree initially at s=0. The vertical recursions then agree inductively for every flag by increasing e_N, with strictly decreasing last-jump indices for reduced flags, so every induction terminates. At s=1 the proof's full-flag horizontal comparison gives actual/formal equality on full flags in the λ/r endpoint. Descend from that equality by the stripping argument in Section9. Do not initialize the final endpoint with the unknown z(tildeτ). [given, construct, algebra, step 255.1]

257.1 **9. Full-flag stripping constructs the final pair identity and its support.**. [given, construct, algebra, step 256.1]

258.1 Fix β∈hatR and write F=frβ>0. Choose a full flag in Sα, so its last dimension is F. The proof's horizontal comparison supplies equality between the ACTUAL λ-endpoint full-flag class and the corresponding FORMAL class. Strip the last line by Section7 and its formal counterpart, and push forward by the projective operation of Section3. At the stage with current last dimension k, the quotient Q has rank F−(k−1). Therefore each pushforward multiplies both reduced classes by [F−k+1]_κ. Starting with k=F and ending with k=2 gives the nonzero scalar product [1]_κ⋯[F−1]_κ. These scalars are invertible in the proof's formal localized coefficient field; κ is the formal nontrivial character with its stipulated half-character extension, and no root-of-unity specialization is taken. Thus full-flag equality implies actual/formal equality for the residual one-line flag. If F=1 there is no stripping and the full flag already is that one-line flag. [given, construct, algebra, step 257.1]

259.1 At intermediate steps a class at a boundary x_a is also strictly above its OWN reduced flag's last wall x_(a'), since a'<a. Constancy above each reduced last wall justifies all parameter replacements. To place the last one-line class in its coefficient-computation strip, use its proved constancy for x>x_b to choose x_b<x≤x_(b+1). This proves the actual λ-stable pair identity. [given, construct, algebra, step 258.1]

260.1 P^λ_β = [coefficient β] exp(ad Z)δ_(b,N),. [given, construct, algebra, step 259.1]

261.1 where Z=Σ_(γ∈hatR)Zγ is the FORMAL final unframed U-transform of the known initial zγ(τ). The left side is the independently constructed geometric λ-stable pair class, with its actual obstruction maps and symmetrized virtual sheaf. This is an existence construction of the final pair identity; it is not its assumption. [given, construct, algebra, step 260.1]

262.1 Prove by induction on the positive initial rank rβ that Zβ is supported on the λ-semistable locus. Every Zβ is already supported on the initial τ-semistable phase: its defining finite U expression is assembled by direct sums of initially semistable critical classes, and the proof's critical phase closure supplies that support. In the displayed exponential, the term with one nonzero-object letter is [Zβ,δ]. Every term with two or more such letters has strictly smaller positive ranks. By induction their classes are supported on λ-semistable objects of slope zero; direct sums of such objects are λ-semistable, so all these terms have that same underlying support. The geometric pair class has this support as well. [given, construct, algebra, step 261.1]

263.1 Operational K-homology has no automatic pullback to an open subset; use its covariant support definition instead. Write the pair identity as [Zβ,δ]=P^λ_β−Lβ, where Lβ is the sum of the lower-rank exponential terms. The actual pair class and, by induction, every term of Lβ factor through the λ-semistable underlying locus. Apply the actual forgetful pushforward f to this equality. The projective-bracket formula gives f[Zβ,δ]=[F]_κ Zβ, so Zβ=[F]_κ^(-1) f(P^λ_β−Lβ). Both terms on the right factor through the λ-semistable locus, since forgetting a frame retains its underlying object. This proves the required support as an actual factorization through that locus, without an undefined open restriction or a localization exactness assertion. The same left inverse proves rank-inductive uniqueness for the actual pair identities. [given, construct, algebra, step 262.1]

264.1 Only NOW apply the proved finite detection condition (D), as proved in the detection component below. For β∈tildeR it identifies the geometric λ-semistable locus with the final weak-semistable locus, and identifies their stable pair loci. To restrict every nonzero exponential term to the relevant final critical set, take an actual final semistable complement G of class α−β (or zero if β=α). It is initially semistable and λ-semistable of slope zero. Every nonempty-support formal term supplies actual λ-semistable objects of its factor classes; their direct sum with G is λ-semistable of class α. Condition (D) at α identifies that direct sum with a finally semistable object. Its direct summands are finally semistable of the same phase: if phases differed, grouping all maximal-phase summands gives a destabilizing subobject against the sum of the lower-phase summands. Completing each factor by the other summands and G therefore puts its class in tildeR. All formal terms that cannot do this have empty support and are zero. [given, construct, algebra, step 263.1]

265.1 Thus the SAME constructed Zβ supplies the actual final framed-pair characterization on every relevant final class. The proof's exact endpoint coefficient-matching proof identifies its U expression with the specified SOURCE U(τ,tildeτ), term for term. Its formula depends only on the initial framing-independent classes and those source coefficients, so the resulting final class is framing-independent. Repeating the actual flag construction for any permitted sufficiently large framing gives its corresponding geometric pair identity, while the formula for Zβ is unchanged. The one-line projective left inverse and rank induction give uniqueness. No independently unknown final invariant or final pair characterization has been used. [given, construct, algebra, step 264.1]

266.1 **Deliverable scope.**. [given, construct, algebra, step 265.1]

267.1 The packet provides the actual and formal support, the projective bracket support and its exact quantum scalar, line-pair initialization, strict-boundary vanishing, x-independence including the direct HN-prefix effectivity calculation, and the finite vertical recursion. The final endpoint is actual λ/r on all of hatR; final weak-semistable support and the pair characterization are constructed using (D) only at the final step. The proof's horizontal two-factor geometry and actual virtual-sheaf localization are separate supplied components and are not duplicated. [given, construct, algebra, step 266.1]

268.1 **Horizontal comparison.**. [given, construct, algebra, step 267.1]

269.1 This is the horizontal component of the corrected CY3 theorem. Its inputs are the original operational category/obstruction-map packet, the original proper graph-fixed-locus and resolution-property assumptions, and the proved weak critical closure, APOT comparison and finite-word U calculation in the other components of this proof. It does not assume the source wall formula. The endpoint is the auxiliary additive slope on the initial phase category; identification with the final weak stability uses (D). [given, construct, algebra, step 268.1]

270.1 **The finite simple walls.**. [given, construct, algebra, step 269.1]

271.1 Write N=fr(alpha). A full flag f in class gamma has f_N=fr(gamma), f_1 in {0,1}, and increments in {0,1}. The auxiliary finite slope is (s lambda(gamma)+mu.f)/r(gamma), with its initial tau phase the first lexicographic component. All relevant classes and dimension vectors range over the finite critical list. Choose mu in the strict cone 1>mu_1>>...>>mu_N>0 avoiding the finitely many nonzero linear equations below. Scale lambda so that every nonzero critical value has absolute value greater than (N+1)^2 r(alpha). There is no rationality restriction on lambda: only finitely many real hyperplanes are excluded. [given, construct, algebra, step 270.1]

272.1 If full-flag semistable factors sum to a full flag, the injection/support proof in the vertical component gives f_N<=fr(gamma) for every factor. Additivity and equality for the total force equality for every factor. No factor is unframed: it would have positive fr(gamma), contradicting that equality. No pure factor has finite phase at x=0. The increments of the nonzero f's have disjoint nonempty supports, since their sum has increments at most one. Therefore the f's are linearly independent: apply the invertible difference operator f->(f_i-f_(i-1)) and inspect one coordinate of each support. [given, construct, algebra, step 271.1]

273.1 Equal phases for factors i,j give. [given, construct, algebra, step 272.1]

274.1 s(lambda_i/r_i-lambda_j/r_j) = -mu.(f_i/r_i-f_j/r_j).       (H1). [given, construct, algebra, step 273.1]

275.1 Exclude the nonzero right-side equations. If three factors coexist, eliminating s between two equations gives a nonzero linear relation on mu, since the three flag vectors are independent. Exclude that finite list as well. Thus exactly two factors meet at each wall; there are finitely many walls, and neither factor can be strictly semistable (refining it would produce three factors). The large lambda gap excludes s=1, while mu genericity excludes s=0. These assertions apply also to formal classes, by the vertical formal support theorem. [given, construct, algebra, step 274.1]

276.1 The two flag vectors at a fixed wall are unique, although the category classes need not be. If two decompositions (f_j,g_j) meet there, order f_j>g_j by the first differing coordinate. Eliminating s gives. [given, construct, algebra, step 275.1]

277.1 g_1/r(delta_1)-f_1/r(gamma_1) = eta (g_2/r(delta_2)-f_2/r(gamma_2)). [given, construct, algebra, step 276.1]

278.1 At the first increment of the total flag, f_j has increment one and g_j zero, so eta=r(gamma_2)/r(gamma_1)>0. Substitute f_j=e-g_j:. [given, construct, algebra, step 277.1]

279.1 (1+r(gamma_1)/r(delta_1))g_1 = (1+r(gamma_2)/r(delta_2))g_2. [given, construct, algebra, step 278.1]

280.1 Their increment vectors are nonzero zero-one vectors, so proportionality forces equality. At the earliest increment H1 also shows that f>g corresponds to lambda(gamma)/r(gamma)<lambda(delta)/r(delta). Thus the two-factor slopes reverse in precisely the source bracket order. [given, construct, algebra, step 279.1]

281.1 **The actual horizontal master and fixed loci.**. [given, construct, algebra, step 280.1]

282.1 Let a<b be the first nonzero indices of f and g. Adjoin a line V_0, an arrow A:V_a->V_0 and B:V_b->V_0, and the relation B C=0, where C:V_(b-1)->V_b is the existing flag arrow. Give V_0 the additional weight -epsilon, with epsilon positive smaller than every nonzero comparison in the finite list. The master is the stable open for this auxiliary weight, and S scales A with character z. Its forgetful map to the object stack is smooth on this stable open: the flag arrows are injective, and B C=0 says exactly that B is a map from the vector-bundle quotient V_b/C(V_(b-1)). It is therefore a linear vector-bundle parameter there. Gauge quotients preserve smoothness. This also constructs its relative cotangent complex, including the actual equation differential B dC+dB C. [given, construct, algebra, step 281.1]

283.1 Here is the stability and fixed-locus verification. A kernel interval of the flag chain is a direct pure subobject, and the corresponding pure quotient has the opposite comparison; the generic mu inequalities force injectivity exactly as in the vertical proof. A pure V_0 kernel is forbidden by its negative weight, and a quotient supported solely at V_0 is forbidden by the complementary positive comparison. Thus A,B are not both zero. If B=0, A is a line isomorphism. If A=0, B induces a nonzero map from the one-dimensional quotient at the first increment of g, hence an isomorphism. Cancelling that line recovers, respectively, the stable flag at the two sides of the wall. For each underlying subobject, the only new comparison is the -epsilon contribution according as V_0 is included; its sign selects the strict side of H1. All other strict comparisons persist by the choice of epsilon. Consequently the endpoint identifications hold as open substacks, also over nonreduced bases. [given, construct, algebra, step 282.1]

284.1 At an S-fixed object choose compensating scalar weights on the flag lines. Its first weight is determined by the scaled A. The connected flag arrows force each weight until a split, and the nonzero B fixes the other weight. An additional underlying weight summand would have no framing increment assigned to it, contrary to full-flag stability. Hence the only weights are 0 and 1. If one connecting arrow vanishes we are at an endpoint. Otherwise the underlying object splits into the two weight summands of classes gamma,delta. The flag similarly splits into f,g. The equations and comparisons split into those of the two stable flags. Conversely their direct sum, with the connecting maps chosen to be identities, is stable for the master comparisons: a critical subobject projects to critical subobjects in both summands; critical closure puts these in the initial phase category, and each factor's strict flag comparison then excludes a destabilizer. Equality in both would give the whole summands and is decided by the V_0 term. This proves the mixed fixed locus is their product. This argument uses actual critical closure, not an assertion about arbitrary weak phase categories. [given, construct, algebra, step 283.1]

285.1 **Cancellation as maps, including the relation.**. [given, construct, algebra, step 284.1]

286.1 Work on a frame refinement; all cancellations below are invariant under changes of bases, and their inverses use actual line-bundle isomorphisms, so they descend. At the endpoint A invertible, the V_0 gauge maps isomorphically to dA. Remove that acyclic pair. The B coordinate and relation have S-weight -1 and are moving; the fixed remainder is exactly the endpoint flag complex. At the other endpoint B induces an isomorphism on the quotient line. The V_0 gauge cancels that quotient coordinate of dB. The remaining prefix component of dB maps by dB->dB C isomorphically to the relation coordinate, since C identifies the prefix with its image. Remove this second acyclic pair. The remaining A coordinate is moving of weight +1. The fixed remainder again is the endpoint flag complex, with its actual cotangent boundary. [given, construct, algebra, step 285.1]

287.1 At a mixed locus the two diagonal flag complexes remain. Off-diagonal blocks have weights +1,-1 and are moving. In the fixed relation block, the prefix component dB is again cancelled by dB C; in the complementary weight the relation remains a moving cross block. There remain two connecting line coordinates. Besides the V_0 scalar u, one must include the relative scalar v between the old object summands: rigidifying their product removes two scalars, whereas rigidifying the master removes only the common scalar. With the second summand held fixed the derivative is. [given, construct, algebra, step 286.1]

288.1 (v,u) -> ((v-u)A,-u B). [given, construct, algebra, step 287.1]

289.1 Its matrix [[A,-A],[0,-B]] is invertible. Removing this contractible complex and its shifted kappa-dual leaves the product of the two flag cotangent triangles. The base obstruction maps agree on their diagonal blocks by the GIVEN direct-sum compatibility square; all removed maps are the actual derivatives just displayed and commute with the projection to the base. Thus the APOT component's common splitting-torsor construction identifies the fixed obstruction MAPS and their cones. It identifies their coherent virtual sheaves and the canonical determinant roots, rather than inferring this from an equality of tangent K-classes. [given, construct, algebra, step 288.1]

290.1 **Residue and the single-wall identity.**. [given, construct, algebra, step 289.1]

291.1 For precision use e(U)=lambda_-1(U^vee), its specified determinant- symmetrization hat-e, and the source vertex cross kernel Theta(z)=hat-e(z^-1 kappa^-1 E_12^vee)/hat-e(z E_12), with the framing arrow/gauge summands included in E_12. Translation D(z) scales the first universal object. The compensated weights above show that the mixed moving complex is precisely these cross blocks: each arrow contributes Hom(tail,head), each relation its negative, each gauge its negative, and each kappa-dual the paired term. Thus its moving inverse Euler/root contribution is Theta(z). Translation of the first weight summand is exactly D(z). This is the defining source vertex kernel and translation, with no change of bracket or normalization. [given, construct, algebra, step 290.1]

292.1 Let rho be the constant coefficient at infinity minus that at zero. It annihilates Laurent polynomials. Directly for a moving line L,. [given, construct, algebra, step 291.1]

293.1 rho (hat-e(z^-1 kappa^-1 L^vee)/hat-e(z L)) = kappa^-1/2-kappa^1/2 =: c. [given, construct, algebra, step 292.1]

294.1 Indeed expand (1-zL)^-1 at zero and as -(zL)^-1(1-(zL)^-1)^-1 at infinity; the two constant coefficients give the displayed difference, and determinant factors remove L. Reversing the moving line gives -c. For a projective quotient framing, the same identity with the product over its roots is the projective bundle formula: the diagonal Koszul complex on P(U)xP(U) gives the basis O,...,O(rank U-1), and its two Laurent expansions give exactly pushforward from P(U). This remains valid for a bundle by its exterior-power identity, without an actual splitting into line bundles. [given, construct, algebra, step 293.1]

295.1 Apply the APOT component's proper graph-fixed pushforward and pole cancellation to any perfect insertion pulled from the forgotten auxiliary stack (and then its prescribed continuous completion). Every moving S-weight is 0,+1,-1 by the fixed-locus proof. Hence the only non-T poles have primitive graph kernels, where the specified kappa-root exists by the component's proved polarization calculation. The whole expression is a Laurent polynomial in z, so its rho is zero. Endpoint residues are c times the two endpoint classes with opposite signs. Mixed residues are c times the source bracket, since that bracket is rho of the just-computed D(z)Theta(z) vertex expression divided by c. Cancelling this unit in the declared coefficient ring gives. [given, construct, algebra, step 294.1]

296.1 z_actual^(s+) (beta,e) = z_actual^(s-) (beta,e) + sum_(gamma+delta=beta, f+g=e, f>g) [z_actual^(s-)(gamma,f),z_actual^(s-)(delta,g)].    (H2). [given, construct, algebra, step 295.1]

297.1 The same argument for the three-line two-framing master gives [S_m,S_n]=0: its endpoint line ratios are c and -c, its mixed cross kernel is the same Theta, and its fixed obstruction-map contractions are those in the critical-closure and framing-map component above. That master's proper graph-fixed loci are explicitly GIVEN in 1.3.2(f), so no higher-framing properness is being inferred from the CY4 packet. Together with the proved projective forgetful left inverses and two-framing algebra this constructs the initial unframed invariants independently of framing and gives their actual pair identities. [given, construct, algebra, step 296.1]

298.1 **Formal comparison and induction.**. [given, construct, algebra, step 297.1]

299.1 The finite-word proof gives ordered factorization and exact U composition. In a chamber of the finite auxiliary comparisons no factor changes order, so the factorization and its logarithms are constant. At a wall only the two factors in H1 can meet; moving one past the other gives coefficients +1,-1 in the two associative orders. Their primitive polynomial is precisely the one bracket in H2. No other term is present: any three coincident factors would violate H1, and any different-phase factor commutes past the unchanged ordered blocks in both factorizations and cancels. Thus formal classes satisfy the SAME H2 and chamber constancy. [given, construct, algebra, step 298.1]

300.1 Induct on positive rank of the underlying object. Every mixed factor has smaller positive rank, so by induction its actual and formal classes agree. At s=0 all flag classes agree by the vertical initialization and recursion. Apply H2 across the finite walls: actual and formal full flags agree in every chamber, in particular at s=1. The large lambda gap excludes a wall there. The vertical component then strips full flags to one-line pairs and constructs the unframed final invariant by the projective left inverse. The endpoint lemma using (D) identifies these with the desired final weak-stability objects and its termwise U calculation gives EXACTLY the original source coefficients. [given, construct, algebra, step 299.1]

301.1 **Why the critical list used above is finite.**. [given, construct, algebra, step 300.1]

302.1 Choose a framing functor covering the finite-type initial semistable stack of class alpha, as 1.3.2(c) allows for the singleton class alpha. Its rank N is constant. The universal frame torsor is an algebraic space X: an automorphism fixing its framing is the identity by the faithfulness requirement. It is of finite type since the original semistable stack and GL(N) are. On this finite-type presentation, the isomorphism algebraic spaces of the universal objects are of finite type: the diagonal is the pullback of the diagonal of the finite-type algebraic space X after the two frame torsors, followed by the finite-type GL(N) coordinates. This is also an explicit finite-type presentation of the inertia over this atlas. [given, construct, algebra, step 301.1]

303.1 In characteristic zero an idempotent e is equivalent to the involution g=1-2e in that inertia. Thus the space of idempotents is the closed finite-type subspace g^2=1. The eigenspace projectors (1+g)/2,(1-g)/2 split the universal family into its two summands; the moduli grading makes both summand classes locally constant. A finite-type algebraic space has finitely many connected components, so only finitely many ordered summand classes occur. Every pair of initial critical semistable objects has semistable direct sum of class alpha, hence appears in this idempotent space. This proves finiteness of R_alpha without invoking the unsupported claim that indecomposable decompositions can only refine under specialization. Positive critical rank bounds word length by r(alpha). Applying the same idempotent argument to each critical class, or successively to its summands, proves finiteness of every critical decomposition list used in the word and wall computations. [given, construct, algebra, step 302.1]

304.1 **Detection and exact endpoint identification.**. [given, construct, algebra, step 303.1]

305.1 Construction for the necessary correction to the original CY3 weak-dominance claim. All original category, coefficient, properness, resolution and weak-dominance hypotheses are retained. No wall identity is made a hypothesis. [given, construct, algebra, step 304.1]

306.1 **The additional finite condition.**. [given, construct, algebra, step 305.1]

307.1 Fix the original class $\alpha$, its initial critical set $R_\alpha$ and its final critical set $\widetilde R_\alpha$. Add:. [given, construct, algebra, step 306.1]

308.1 **(D)** For every $\beta\in\widetilde R_\alpha$ and every $\tau$-semistable $E$ of class $\beta$ that is not $\widetilde\tau$-semistable, there is a short exact sequence $$0\longrightarrow E'\longrightarrow E\longrightarrow E''\longrightarrow0$$ with $E',E''$ nonzero $\tau$-semistable objects, $[E'],[E'']\in R_\alpha$, and $\widetilde\tau(E')>\widetilde\tau(E'')$. [given, construct, algebra, step 307.1]

309.1 This is a finite class-incidence condition: $\beta$ ranges over the finite subset $\widetilde R_\alpha\subset R_\alpha$, and the possible $[E']$ range over $R_\alpha$. Equivalently, for each such $\beta$ the complement $\mathcal M^{ss}_\beta(\tau)\setminus \mathcal M^{ss}_\beta(\widetilde\tau)$ is the union of the images of the finitely many exact-sequence functors with the displayed semistable endpoint classes and strict final inequality. The other inclusion is immediate because those sequences destabilize. Thus (D) is independently checkable on a finite list of subobject functors; it does not mention virtual invariants or the desired wall-crossing equality. [given, construct, algebra, step 308.1]

310.1 The counterexample has $R_\alpha=\{\alpha\}$ and a nonempty complement. There is no proper critical detecting class, so it fails (D), exactly at the defective endpoint interface. [given, construct, algebra, step 309.1]

311.1 **The condition gives the actual endpoint comparison.**. [given, construct, algebra, step 310.1]

312.1 Normalize the source comparison function on the critical phase by $$\ell(\beta)=\lambda(\beta) -\frac{r(\beta)}{r(\alpha)}\lambda(\alpha),\qquad \ell(\alpha)=0.$$ For a proper critical split $\alpha=\beta+\gamma$, the original sign conditions give either opposite strict signs for $\lambda(\beta),\lambda(\gamma)$ or both zero. Since $r(\alpha)=r(\beta)+r(\gamma)$, $$\ell(\beta) =\frac{r(\gamma)\lambda(\beta)-r(\beta)\lambda(\gamma)}{r(\alpha)}$$ has exactly the prescribed sign, and $\ell(\gamma)=-\ell(\beta)$. On every actual same-phase critical exact sequence both $r$ and $\lambda$ are additive, so $\ell$ is additive there. No extension of $r$ to a homomorphism on the whole numerical group is asserted. All finite auxiliary slopes $s\lambda(\beta)/r(\beta)$ change by the SAME constant $s\lambda(\alpha)/r(\alpha)$; their comparisons are unchanged, and comparisons with pure or noncritical infinite phases are unchanged. Thus the actual pair, flag and master opens and their GIVEN proper fixed loci are identical. In the proof write $\lambda$ for this normalized critical function $\ell$. This is a proved normalization, not an extra hypothesis that the original homomorphism vanish on $\alpha$. Let $\beta\in R_\alpha$ with $\lambda(\beta)=0$, and let $E$ be $\tau$-semistable of that class. For a proper initially critical subobject with classes $\gamma,\delta$, the critical-closure theorem in the critical-closure and framing-map component above makes both endpoints semistable. Completing with a semistable object of class $\alpha-\beta$ shows $\gamma,\delta\in R_\alpha$. [given, construct, algebra, step 311.1]

313.1 Write $p=\widetilde\tau(\gamma)$, $q=\widetilde\tau(\delta)$ and $t=\widetilde\tau(\beta) =\widetilde\tau(\alpha-\beta)$. If $p<q$, weak seesaw gives $p\le t\le q$. The global comparison for $\gamma$ is nonpositive, and that for $\delta$ is nonnegative, since their complements have phases between $q,t$ and $p,t$. If either were zero, $\lambda(\gamma)+\lambda(\delta) =\lambda(\beta)=0$ would make BOTH zero. Then $p=\widetilde\tau(\delta+\alpha-\beta)$ forces $t=p$, whereas $q=\widetilde\tau(\gamma+\alpha-\beta)$ then forces $q=p$, a contradiction. Thus $\lambda(\gamma)<0<\lambda(\delta)$. The reversed case is identical, and equal $p=q$ gives both values zero. Consequently $$\operatorname{sign}\lambda(\gamma) =\operatorname{sign} \bigl(\widetilde\tau(\gamma) -\widetilde\tau(\delta)\bigr), \tag{1}$$ where the right side means order comparison, not subtraction in an abstract phase set. [given, construct, algebra, step 312.1]

314.1 For $\beta=\alpha$ the same proof uses no complement: its global comparisons are already the two parts themselves, and (1) is the given sign condition directly. [given, construct, algebra, step 313.1]

315.1 On the initial phase abelian category the function $\lambda/r$ is a genuine additive slope. Weak dominance places every final semistable object of class $\beta\in\widetilde R_\alpha$ in the initial semistable locus. Equation (1) makes it $\lambda/r$-semistable of slope zero. Conversely, (D) says that an initial semistable object of that class that is finally unstable has an initial critical subobject with positive $\lambda$. It is therefore not $\lambda/r$-semistable. We have proved the exact equality $$\mathcal M^{ss}_\beta(\widetilde\tau) =\{E\in\mathcal M^{ss}_\beta(\tau): E\text{ is }\lambda/r\text{-semistable}\}. \tag{2}$$ No analogous equality is inferred from weak dominance alone. [given, construct, algebra, step 314.1]

316.1 The same argument gives the critical-factor admissibility used in the last vertical induction. A zero-slope critical subobject or quotient in the initial phase category of a $\lambda$-semistable object is again $\lambda$-semistable, by the ordinary additive positive-rank slope argument. For any relevant such factors, add their complementary zero-slope factors to total class $\alpha$. The direct sum is $\lambda$-semistable and hence finally semistable by (D) at $\alpha$ and (2). Its direct summands are finally semistable. Thus those factor classes lie in $\widetilde R_\alpha$. This is the actual endpoint admissibility needed by the finite flag proof, without an extra technical condition on the final weak stability. [given, construct, algebra, step 315.1]

317.1 **Exact source-U identification at the endpoint.**. [given, construct, algebra, step 316.1]

318.1 For clarity about the eventual displayed coefficients, the auxiliary endpoint does not replace the source $U$ by unrelated coefficients for a linear slope. In any allowed initial word of total $\alpha$, all letters are initially semistable of the initial phase of $\alpha$. Every nonempty proper subword sum is therefore in $R_\alpha$, by taking the direct sums of that subword and its complement. Every first exponential grouping is consequently permissible, just as in the source definition. [given, construct, algebra, step 317.1]

319.1 The final logarithm condition for the auxiliary $\lambda/r$ endpoint says $\lambda(\gamma_j)=0$ for every final block. This is equivalent to the source final logarithm condition $\widetilde\tau(\gamma_j)= \widetilde\tau(\alpha)$ for every block. The latter implies the former directly: the complementary blocks have that same phase, and the source sign condition gives zero. Conversely suppose all block lambda values vanish. If their final phases differ, let $I$ contain all blocks of minimal final phase. The sum of the $I$ blocks has that phase, whereas the complementary sum has strictly greater phase, by weak seesaw. Both sums belong to $R_\alpha$, but additivity gives lambda zero for their comparison, a contradiction. Thus all block phases equal the total phase. [given, construct, algebra, step 318.1]

320.1 Inside each such final block of lambda zero, equation (1) identifies every prefix/complement comparison with that of $\lambda/r$; the two lambda values are opposite, so their ratio comparison has precisely that sign. Every S coefficient inside that block is therefore the SOURCE S coefficient. All factorial and logarithm factors are already the same. The double- grouping U coefficients agree term for term. The same proof for total $\beta\in\widetilde R_\alpha$ adds a complementary initial semistable class $\alpha-\beta$ of lambda zero to the list. [given, construct, algebra, step 319.1]

321.1 Thus the final formal unframed invariant constructed by the auxiliary path is exactly the original displayed source $\widetilde U(\,\cdot\,;\tau, \widetilde\tau)$ Lie polynomial. No alteration of the global weak-dominance definition or of the coefficient convention is being made. [given, construct, algebra, step 320.1]

322.1 **Why the final pair identity need not be assumed.**. [given, construct, algebra, step 321.1]

323.1 There is no need to assume an independent existence theorem for the final pair invariants. Run the actual/formal flag comparison on the WHOLE lambda-zero subset of $R_\alpha$. At the final endpoint, use the genuine positive-rank additive slope $\lambda/r$ on the initial phase abelian category. The large lambda gap makes every nonzero-lambda initial critical subobject unable to participate in a finite framing equality. Thus the vertical flag proof applies to this zero-slope sector before identifying it with the final weak stability. [given, construct, algebra, step 322.1]

324.1 Full-flag equality gives one-line equality by stripping the successive last lines and pushing forward. The successive nonzero factors are $[1]_\kappa,\ldots, [F(\beta)-1]_\kappa$. The one-line FORMAL identity is the actual exponential $\exp(\operatorname{ad}Z) \delta$, where $Z$ is the formal final unframed U-transform. Hence the actual lambda-stable pair classes satisfy that identity. [given, construct, algebra, step 323.1]

325.1 Induct on the positive initial rank to show $Z_\beta$ is supported on the lambda- semistable locus. The actual pair class has that support. All lower-rank terms in its exponential have it by induction, because direct sum of lambda-semistables of slope zero is semistable. Subtract those terms and apply the forgetful left inverse with its nonzero quantum framing rank. This proves the same support for $Z_\beta$. [given, construct, algebra, step 324.1]

326.1 For a decomposition completing one relevant final class $\beta$ to total $\alpha$, add an actual final semistable complement, which is lambda- semistable by (2). Whenever the formal terms have nonempty support, their underlying objects and that complement have lambda- semistable direct sum of class $\alpha$. By (D), that sum is finally semistable. Its direct summands are finally semistable of the same critical phase. Consequently every nonzero term has classes in $\widetilde R_\alpha$, and its support is the final semistable locus. Equality (2) also identifies the geometric one-line lambda pair space with its final pair space. [given, construct, algebra, step 325.1]

327.1 We have therefore constructed one class satisfying ALL the actual final framed-pair identities. It is independent of the framing: its U formula uses only the already proved framing-independent initial invariants. The forgetful left inverse and rank induction give uniqueness, so it is the source operational invariant whenever that name is used. This proves final existence from the flag construction instead of assuming (5.33) or its CY3 analogue for the unknown final class. [given, construct, algebra, step 326.1]

328.1 **A stronger reverse-U test sufficient for (D).**. [given, construct, algebra, step 327.1]

329.1 For comparison with the source's earlier "dominates at $\alpha$" definition, its reverse direction alone is sufficient, when combined with the retained weak dominance:. [given, construct, algebra, step 328.1]

330.1 **(B)** If an effective ordered decomposition $\alpha=\sum a_i$ has all final semistable loci nonempty and $U(a_1,\ldots,a_n;\widetilde\tau,\tau)\ne0$, then all $a_i$ have the initial phase of $\alpha$ and every final semistable object of each class $a_i$ is initially semistable. [given, construct, algebra, step 329.1]

331.1 Here is the proof of sufficiency, including the HN-effectivity step. Start with $E$ as in (D). Choose a final semistable $G$ of class $\alpha-\beta$ if $\beta\ne\alpha$, and set $G=0$ otherwise. Weak dominance makes $E\oplus G$ initially semistable. Take its final HN filtration with strictly decreasing factor phases. Its word has nonzero reverse $U$. To prove that assertion, the first U grouping must be the identity, since the old HN phases strictly decrease. Initial semistability of the whole object makes every proper HN prefix have phase at most that of its complement. Every critical prefix and quotient is initially semistable by the proved critical-closure theorem. For any selection of critical prefix cuts, consecutive blocks are therefore initially semistable of the same phase, using kernel/ cokernel closure. Each of their S coefficients is exactly one. Conversely every permissible final logarithm cut has such a critical prefix. If there are $m$ eligible cuts, its U coefficient is $$\sum_{k=0}^{m} \frac{(-1)^k}{k+1}\binom mk =\int_0^1(1-t)^m\,dt =\frac1{m+1}>0. \tag{3}$$ This uses the actual critical closure of the target initial stability, rather than claiming the Boolean statement for an arbitrary weak target. [given, construct, algebra, step 330.1]

332.1 Condition (B) now puts all those HN factors in the initial semistable phase. The HN filtration of $E\oplus G$ is the combined filtration of $E$ and $G$, with a direct sum at any coincident phase. Removing the $G$ summand leaves the factors of the final HN filtration of $E$ initially semistable of that same phase. Take its first factor $E'$. The remaining quotient is an extension of the other initial semistables of that phase, so is initially semistable. The final phases strictly decrease, hence $\widetilde\tau(E')> \widetilde\tau(E/E')$. Completing their classes with the other factors and $G$ places both in $R_\alpha$. This is exactly (D). [given, construct, algebra, step 331.1]

333.1 The proposed corrected theorem uses (D), not the stronger global dominance condition and not the desired wall equality. The complete auxiliary proof uses (2) at its endpoint; the unchanged weak-dominance definition remains truthful. [given, construct, algebra, step 332.1] ∎
