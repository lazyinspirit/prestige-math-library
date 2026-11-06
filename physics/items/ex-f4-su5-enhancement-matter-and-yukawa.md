---
id: ex-f4-su5-enhancement-matter-and-yukawa
kind: example
title: "SU(5) enhancement curves and Yukawa points"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
category: string-theory
deps:
  - post-f4-local-geometric-engineering
  - def-m2-brane-worldvolume-action
  - def-f4-crepant-resolution-and-matter-surface
dependency_roles:
  post-f4-local-geometric-engineering: physical-assumption
  def-m2-brane-worldvolume-action: formulation-prerequisite
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
physical_scope: "A conditional local four-dimensional F-theory chart given by the analytification of the affine algebraic base B_loc=Spec C[w,u,v], in the adopted geometric, large-radius, low-energy regime, with an SU(5) Tate divisor and one explicitly chosen smooth proper crepant T11 resolution chamber, proper flat matter-surface families, and the smooth relatively minimal transverse-disc models specified in A5. The physical interpretation uses the local dictionary of post-f4-local-geometric-engineering; it does not apply the projective-slice matter dictionary to this affine base. Candidate couplings specify SU(5)-invariant tensors with explicit conjugations; extra abelian selection rules and actual mode content remain additional conditions. The polynomial coefficient functions are regular on B_loc and are not asserted to extend to a compact base. No compact completion, flux choice, net chirality, full vectorlike spectrum, nonzero coupling, realistic mass, or quantitative correction estimate is asserted. The wrapped-M2 interpretation remains conditional on the present draft classical M2 action interface and its draft CJS superspace prerequisites; their draft status supplies no independent acceptance. The action does not derive oriented chiral states or nonzero couplings."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sven Krause, Christoph Mayrhofer, and Timo Weigand, G4 flux, chiral matter and singularity resolution in F-theory compactifications, arXiv:1109.3454v2"
      url: "https://arxiv.org/pdf/1109.3454v2"
      locator: "§§3.1–3.3, equations (3.1)–(3.20), and Appendix A.2–A.3, especially the T11 fibral-curve splittings, weights, and enhancement-point tables."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§5.2, pp. 41–43, equations (5.8)–(5.13), for signed intersection weights; §6.1.2, pp. 54–55, for the two SU(5) cubic types and local-splitting qualifications; §7.6, pp. 73–74, equations (7.76)–(7.77), for the restricted-model loci and conjugated singlet coupling."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the specified resolved SU(5) Tate-model example, codimension-two enhancement curves in the base support matter surfaces whose fibral curves realize the stated SU(5) weights, and codimension-three fiber enhancements give candidate Yukawa couplings among those fields. The representation and coupling data are specific to the stated resolution and model.

## Statement references

[[post-f4-local-geometric-engineering]]

[[def-m2-brane-worldvolume-action]]

[Krause–Mayrhofer–Weigand, §§3.1–3.3 and Appendix A.2–A.3](https://arxiv.org/pdf/1109.3454v2)

[Weigand, §§5.2, 6.1.2 and 7.6](https://arxiv.org/pdf/1806.01854v1)

## Facts & Assumptions

**Given:** The analytification of the affine algebraic chart $B_{\mathrm{loc}}=\operatorname{Spec}\mathbb C[w,u,v]$, the SU(5) Tate vanishing orders on $W=\{w=0\}$, the polynomial coefficient functions below, and a specified smooth proper crepant T11 resolution chamber with the source-reported fibral curves and their Cartan intersections, together with the local transverse models in [A5].

[A1] Take the chart to be $B_{\mathrm{loc}}=\operatorname{Spec}\mathbb C[w,u,v]$ and trivialize the Tate coefficient line bundles there. Let $a_1=u$, $a_{2,1}=v$, $a_{3,2}=1+u+v$, $a_{4,3}=1+2u+3v$, and $a_6=0$, with $a_2=a_{2,1}w$, $a_3=a_{3,2}w^2$, and $a_4=a_{4,3}w^3$. On the affine fiber patch the Tate hypersurface is $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$. These regular local-model coefficients are not asserted to extend to a compact base.

[A2] Assume the chosen T11 chamber is a smooth proper algebraic crepant resolution as in [[def-f4-crepant-resolution-and-matter-surface]] and supplies the listed rational fiber curves and the fiber splittings at the three displayed points. Here T11 means the proper transform (3.4), scaling data of Table 1, and Stanley–Reisner exclusions (3.6) of Krause–Mayrhofer–Weigand, with the additional exclusions $ze_4,ze_1,ze_2,se_2,e_0e_3,e_1e_3$ chosen from (3.7). An excluded monomial means its coordinate factors cannot all vanish simultaneously. The generic fiber over $W$ is the source-reported split five-cycle of rational curves, and the geometric generic fibers over the three selected matter curves have the distinct component configurations of Appendix A.2. For each of the three matter curves, assume the selected closed reduced irreducible rational fiber curve extends to a proper flat family with nonempty pure one-dimensional geometric fibers and geometric generic fiber $\mathbb P^1$; its reduced irreducible surface closure is the matter surface in this chamber. The example does not prove resolution existence, smoothness, crepancy, or flatness from the coefficient functions alone; it uses the source's explicit blow-up/chamber data conditionally.

[A4] The physical interpretation uses only the local, geometric, large-radius, low-energy F-theory dictionary of [[post-f4-local-geometric-engineering]], with its local transverse-disc input supplied in [A5]. No numerical control of string-loop or $\alpha'$ corrections, flux, backreaction, or compact completion is supplied; only candidate loci and invariant tensors are asserted. Extra gauge factors, flux-dependent mode counts and additional selection rules must be supplied before asserting any actual interaction.

[F1] Use the mathematical definitions in [[def-f4-crepant-resolution-and-matter-surface]]: a matter curve is a reduced irreducible curve in the gauge divisor whose geometric generic resolved fiber differs from that over the divisor, after comparison over a common algebraically closed extension field. A matter surface is the selected reduced irreducible surface with proper flat map to that curve, nonempty pure one-dimensional geometric fibers and geometric generic fiber $\mathbb P^1$. These are the inputs in [A2]. For a chosen orientation, let $[C_{\mathrm{or}}]$ be the corresponding signed class of a proper rational fibral curve. Adopt the source convention of Weigand §5.2, (5.8)–(5.13): its candidate Dynkin weight has components $\beta_i=E_i\cdot[C_{\mathrm{or}}]$, where the $E_i$ are the four Cartan resolution divisors in the source order. The intersection is the degree of $\mathcal O(E_i)$ on the curve, extended by sign to the reversed class. Reversing orientation negates the weight; this convention alone counts no modes and proves no nonzero coupling.

[F2] [[post-f4-local-geometric-engineering]]: “A **codimension-two enhancement curve** is a complex curve in $B_3$ where the singular-fiber data over $D$ enhance relative to their generic values.” Its mode and interaction interpretation is conditional on the actual local geometry, background, resolution, and mode content.

[L1] The current item [[def-m2-brane-worldvolume-action]] is placed on the st-m-theory-foundations page and has status draft with a local format precheck pass, which is not independent acceptance. For a smooth embedding $X:\Sigma_3\to Y^{11}$ of a closed oriented three-manifold with nondegenerate Lorentzian induced metric $g_{ij}=\partial_iX^m\partial_jX^nG_{mn}(X)$, it defines the classical bosonic action
$$
S_{\mathrm{M2}}[X]=-T_{\mathrm{M2}}\int_{\Sigma_3}d^3\xi\,\sqrt{-\det g}+T_{\mathrm{M2}}\int_{\Sigma_3}X^*C_3,
$$
with independent positive tension $T_{\mathrm{M2}}$ and source convention $C_3=-6B_3$. In $\hbar=c=1$ units, $\xi^i$ are dimensionless, target coordinates are length-valued with dimensionless metric components, $T_{\mathrm{M2}}$ has units of $\mathrm{length}^{-3}$, and the normalization gives $\int C_3$ units of $\mathrm{length}^3$. Its Green–Schwarz completion uses a smooth superembedding into an on-shell $11|32$ CJS superspace and the pulled-back supervielbein. Its direct prerequisites, post-eleven-dimensional-cjs-supergravity-action and post-m2-cjs-superspace-constraints, are draft postulates; the component-action precheck is pending and the superspace-constraints precheck passes. The current definition supplies an action interface, not a derivation of oriented membrane states, a complete spectrum, or nonzero Yukawa couplings.

[F3] Krause–Mayrhofer–Weigand, §§3.1–3.3 and Appendix A.2–A.3, supply the following model-specific data: the leading discriminant factor on $w=0$ is proportional to $a_1^4a_{3,2}(-a_1a_{4,3}+a_{2,1}a_{3,2})$, with selected point strata $a_1=a_{2,1}=0$, $a_1=a_{3,2}=0$, and $a_{3,2}=a_{4,3}=0$. In the T11 chamber, tables (A.18), (A.26), (A.32) and (3.21) give the respective selected weights $\mu_{10}-\alpha_2-\alpha_3-\alpha_4$ for $P^1_{4D}$, $\mu_5-\alpha_1-\alpha_2-\alpha_3$ for $P^1_{3F}$, and $-\mu_5+\alpha_1+\alpha_2$ for $P^1_{3G}$. Appendix A.3 supplies their further splittings at the point strata. These data are imposed in [A2]; no general resolution-existence theorem or spectrum is inferred from them.

[A3] Set $V=\mathbb C^5$ with its defining action of $\mathrm{SU}(5)=\{g\in M_5(\mathbb C):g^*g=I,\det g=1\}$. Write $\mathbf5=V$, $\mathbf{10}=\wedge^2 V$, $\overline{\mathbf5}=V^*$ with contragredient action, and $\mathbf1=\mathbb C$ with trivial SU(5) action; the singlet can still carry additional abelian charge. On the traceless diagonal Cartan subalgebra of $\mathfrak{sl}_5(\mathbb C)$, put $\epsilon_i(\operatorname{diag}(h_1,\ldots,h_5))=h_i$, $\alpha_i=\epsilon_i-\epsilon_{i+1}$, and $\alpha_i^\vee=\operatorname{diag}(0,\ldots,1,-1,\ldots,0)$, $1\le i\le4$. The Cartan matrix $A_{ij}=\langle\alpha_i,\alpha_j^\vee\rangle$ has diagonal $2$, adjacent entries $-1$, and other entries $0$. The fundamental weights $\omega_i=\epsilon_1+\cdots+\epsilon_i$ obey $\langle\omega_i,\alpha_j^\vee\rangle=\delta_{ij}$; $\mu_{10}=\omega_2$ and $\mu_5=\omega_1$. Dynkin coordinates are these four ordered coroot pairings. An allowed SU(5) trilinear means a nonzero complex-linear invariant map from the tensor product of the three displayed representations to $\mathbb C$.

[A5] Supply the local slice data required by [[post-f4-local-geometric-engineering]]. Let $W^\circ\subset W$ be the dense open where $u(1+u+v)(-u(1+2u+3v)+v(1+u+v))\ne0$. For each general $p=(0,u_0,v_0)\in W^\circ$, choose $\varepsilon\ne0$ small enough that $\jmath_p(t)=(\varepsilon t,u_0,v_0)$, $|t|<1$, meets no residual discriminant component. Assume the restriction of the chosen resolved family to this disc is a smooth complex surface $S_p$ with a proper flat relatively minimal elliptic fibration $\pi_p:S_p\to\mathbb D$ and a regular section, birational over $\mathbb D$ to the Tate cubic and smooth away from $t=0$, whose central fiber is the split $I_5$ configuration: five multiplicity-one $\mathbb P^1$ components in a cycle, with adjacent transverse intersections and self-intersection $-2$ in this surface. These slice properties are supplied local resolution data, not a claim that every resolution has them. For the corresponding short Weierstrass coefficients put $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2$, $f=-(b_2^2-24b_4)/48$, and $g=(b_2^3-36b_2b_4+216b_6)/864$. Completing the square and translating $x$ converts the Tate cubic to $y^2z=x^3+fxz^2+gz^3$ with section $[0:1:0]$. Its coefficients are algebraic on the affine base, so the splitness test is over $K=\mathbb C(W)=\mathbb C(u,v)$, not the residue field at $p$.

## Example

On the gauge divisor $W=\{w=0\}$, the three matter-curve loci in this chart are
$$
C_{10}:u=0,\qquad C_{5,1}:1+u+v=0,\qquad C_{5,2}:u(1+2u+3v)-v(1+u+v)=0.
$$
The leading discriminant factor restricts to
$$
P(u,v)=u^4(1+u+v)\bigl(-u(1+2u+3v)+v(1+u+v)\bigr),
$$
so its zero set is exactly the union of the displayed loci. In the source's T11 chamber, the selected fibral curves $P^1_{4D}$ on $C_{10}$, $P^1_{3F}$ on $C_{5,1}$, and $P^1_{3G}$ on $C_{5,2}$ determine the respective signed weights
$$
\omega_2-\alpha_2-\alpha_3-\alpha_4=(1,0,0,-1),\quad \omega_1-\alpha_1-\alpha_2-\alpha_3=(0,0,-1,1),\quad -\omega_1+\alpha_1+\alpha_2=(0,1,-1,0)
$$
in Dynkin coordinates. These are the source-reported Cartan/weight vectors for the selected fibral curves in this chamber. Choosing the opposite M2 orientation reverses a curve's weight. The current classical action definition does not derive which orientation occurs as a chiral four-dimensional field in this model, so no oriented chiral state is assigned here.

The selected codimension-three points are
$$
p_1=(u,v)=(0,0),\qquad p_2=(0,-1),\qquad p_3=(-2,1).
$$
They satisfy respectively $a_1=a_{2,1}=0$, $a_1=a_{3,2}=0$, and $a_{3,2}=a_{4,3}=0$. With the representation convention [A3], these are candidate $\mathbf{10}\,\mathbf{10}\,\mathbf5$, $\mathbf{10}\,\overline{\mathbf5}\,\overline{\mathbf5}$, and $\mathbf5\,\overline{\mathbf5}\,\mathbf1$ loci, respectively, together with their conjugates. The first uses the five-plet curve $C_{5,2}$; the second uses the two distinct five-plet branches $C_{5,1}$ and $C_{5,2}$; the third also involves the singlet curve $\{a_{3,2}=a_{4,3}=0\}$ in the threefold base, which is not contained in $W$. These are SU(5) tensor types; all additional abelian charges must also sum to zero for an interaction to be allowed in a full model. The word candidate is essential: a point and a group-theoretic label alone do not prove that the relevant modes occur or that an effective coupling is nonzero. In this example all curve and weight claims remain conditional on the selected smooth resolution and local field data in [A2], [A5], [F1], [F2], and [L1].

## Verification

**Given:** The local functions and coefficient orders in [A1], the chosen T11 resolution data in [A2], the source-reported discriminant and fibral-curve data in [F3], the signed-weight convention [F1], the representation convention [A3], and the local dictionary [F2] with its slice hypotheses [A5]. For the physical wrapped-M2 interpretation, [L1] is the current draft action definition with a local format precheck pass, which is not independent acceptance; the verification remains conditional and does not treat that source as accepted or as deriving oriented states.

**Proof technique:** Substitute the local functions into the source's leading discriminant factor, convert the three source-reported fibral weights using the stated A4 Cartan convention, and check the selected intersections by their Jacobian matrices. Check the local dictionary hypotheses and the three invariant tensors, keeping their existence separate from any nonzero effective interaction.

1.1 Substituting [A1] into the source factor in [F3] gives $P=u^4(1+u+v)(-u(1+2u+3v)+v(1+u+v))$. Over $\mathbb C$, a product vanishes exactly when at least one factor vanishes. Its three zero loci are therefore $C_{10}$, $C_{5,1}$, and $C_{5,2}$ as stated; the overall sign of the last factor does not change its zero set. The first two are distinct lines. The projective closure of $C_{5,2}$ has homogeneous quadratic $2u^2+2uv-v^2+ut-vt$ and symmetric matrix $M=\begin{pmatrix}2&1&1/2\\1&-1&-1/2\\1/2&-1/2&0\end{pmatrix}$ with determinant $2(-1/4)-1(1/4)+(1/2)(0)=-3/4$. It is nonsingular; a reducible conic is a product of two linear forms and has a symmetric matrix of rank at most two. Thus this conic is irreducible and differs from both lines. [given, A1, F3, algebra]

1.2 The A4 Cartan rows for $\alpha_2+\alpha_3+\alpha_4$ sum to $(-1,1,0,1)$ in Dynkin coordinates, so subtracting from $\omega_2=(0,1,0,0)$ gives $(1,0,0,-1)$. The rows for $\alpha_1+\alpha_2+\alpha_3$ sum to $(1,0,1,-1)$, so subtracting from $\omega_1=(1,0,0,0)$ gives $(0,0,-1,1)$. The rows for $\alpha_1+\alpha_2$ sum to $(1,1,-1,0)$; subtracting $\omega_1$ from this gives $-\omega_1+\alpha_1+\alpha_2=(0,1,-1,0)$. Under the adopted $E_i\cdot[C_{\mathrm{or}}]$ convention in [F1], the T11 tables in [F3] assign these signed weights to the selected $P^1_{4D}$, $P^1_{3F}$, and $P^1_{3G}$ orientations. Reversing an orientation negates its weight. The current classical action definition does not determine which orientations occur as chiral four-dimensional fields in this model, so no oriented chiral state is assigned here. [given, A2, A3, F1, F3, algebra]

1.3 Fix the determinant form $\operatorname{vol}:\wedge^5V\to\mathbb C$ taking $e_1\wedge\cdots\wedge e_5$ to $1$. For $a,b\in\wedge^2V$, $v\in V$, $\phi,\psi\in V^*$, and $s\in\mathbb C$, the three contractions are $\operatorname{vol}(a\wedge b\wedge v)$, $(\phi\wedge\psi)(a)$, and $s\phi(v)$. They are invariant under SU(5): the first transforms by $\det g=1$, and the other two are natural evaluation pairings under the contragredient action. They are nonzero, as seen respectively on $(e_1\wedge e_2,e_3\wedge e_4,e_5)$, $(e_1\wedge e_2,e_1^*,e_2^*)$, and $(e_1,e_1^*,1)$. Thus the three tensor types stated in the Example admit invariant trilinears. For the second contraction the two dual fields may come from distinct branches; no nonzero cubic of two identical commuting dual fields is implied. Omitting either required conjugation would be incorrect: $\zeta I$, with $\zeta=e^{2\pi i/5}$, acts on $\mathbf{10}\otimes\mathbf5\otimes\mathbf5$ by $\zeta^4$ and on $\mathbf5\otimes\mathbf5\otimes\mathbf1$ by $\zeta^2$, forcing every invariant functional on either tensor product to vanish. [A3, algebra]

2.1 At $p_1$, $(a_1,a_{2,1},a_{3,2},a_{4,3})=(0,0,1,1)$; at $p_2$ the tuple is $(0,-1,0,-2)$; at $p_3$ it is $(-2,1,0,0)$. The pairs of defining functions for these three points have Jacobian determinants $1$, $1$, and $1$, respectively: use $(u,v)$, $(u,1+u+v)$, and $(1+u+v,1+2u+3v)$. Each intersection is transverse and isolated in the chart, and the three points are distinct. Together with the source factorization in step 1.1, these values place the points on the listed enhancement strata. [given, A1, F3, step 1.1, algebra]

2.2 At $p\in W^\circ$, the transverse derivative has nonzero $w$ component. The nonzero leading factor in step 1.1 shows the discriminant is not identically zero and permits a sufficiently small disc with no residual zero. On $W$, $f=-u^4/48$ and $g=u^6/864$, so $f(p)\ne0$ and the short equation is minimal. Over $K=\mathbb C(u,v)$ the required cover is $\psi^2+(9g/(2f))|_W=\psi^2-u^2/4=(\psi-u/2)(\psi+u/2)$ with distinct factors. Together with the smooth relatively minimal surface and $I_5$ configuration supplied in [A5], these are precisely the local inputs for [F2], which assigns $\mathfrak{sl}_5(\mathbb C)$. No projective transverse surface or compact completion is used. [A1, A5, F2, step 1.1, algebra]

3.1 The families in [A2] satisfy the matter-surface definition [F1], while step 2.2 supplies the local gauge-dictionary inputs. The source-prescribed splittings [F3] and the invariant tensors of step 1.3 therefore give candidate interactions at the three points under [F2] and [A4], with the signed fibral weights of step 1.2. This uses the local geometric-engineering postulate, rather than applying the projective-slice matter dictionary to the affine base. The draft action [L1] supplies no oriented chiral spectrum, and neither that action nor the local dictionary proves the needed modes, extra gauge-charge neutrality, a nonzero coefficient, or a compact vacuum. [A2, A4, F1, F2, F3, L1, step 1.2, step 2.1, step 2.2, step 1.3] ∎

## Remarks

The affine $A_4$ cycle below records the generic split $I_5$ fiber graph: vertices denote its five irreducible fiber components in cyclic order, and edges denote pairwise intersections. The labels are only incidence conventions; special codimension-two splittings and T11 choices are supplied separately by the source tables. No proof step relies on the diagram.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=0.9]
  \node[circle,draw,inner sep=2pt] (c0) at (0,1.4) {$C_0$};
  \node[circle,draw,inner sep=2pt] (c1) at (1.3,0.6) {$C_1$};
  \node[circle,draw,inner sep=2pt] (c2) at (0.8,-0.9) {$C_2$};
  \node[circle,draw,inner sep=2pt] (c3) at (-0.8,-0.9) {$C_3$};
  \node[circle,draw,inner sep=2pt] (c4) at (-1.3,0.6) {$C_4$};
  \draw (c0)--(c1)--(c2)--(c3)--(c4)--(c0);
\end{tikzpicture}
```

The antisymmetric representation $\mathbf{10}=\wedge^2\mathbf5$ is represented by the height-two Young diagram (column antisymmetrization); this convention identifies its highest weight as $\omega_2$.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=0.8]
  \draw (0,0) rectangle (0.7,0.7);
  \draw (0,-0.7) rectangle (0.7,0);
  \node at (0.35,0.35) {$1$};
  \node at (0.35,-0.35) {$2$};
\end{tikzpicture}
```

The M2 action carrier is present but remains draft with a local format precheck pass, which is not independent acceptance, and its two direct CJS postulate prerequisites are drafts; the component-action precheck is pending and the superspace-constraints precheck passes. The codimension-one and local-geometric-engineering suppliers also remain conditional. These status limits do not turn the source-reported fibral weights into oriented chiral states or establish nonzero couplings.

The stronger [[post-f4-codimension-two-matter-and-yukawa-dictionary]] is contextual here: it requires a projective resolution and a projective transverse surface. These hypotheses are not supplied by this affine model. A projective smooth transverse surface surjecting onto its connected curve would make that curve compact; any holomorphic map from that curve to $\mathbb C^3$ is constant coordinatewise and cannot be transverse. The local-disc clause of the geometric-engineering postulate is the applicable physical assumption in this example.
