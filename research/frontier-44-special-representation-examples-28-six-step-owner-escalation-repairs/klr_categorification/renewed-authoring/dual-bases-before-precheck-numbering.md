---
id: lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases
kind: lemma
title: "Cyclotomic induction and restriction have compatible Frobenius dual bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-minimal-parabolic-klr-diagram-proof-category,
       lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse,
       lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection,
       thm-cyclotomic-klr-induction-is-projective-on-the-right,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-graded-balanced-tensor-product-and-homogeneous-hom]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Theorem 1.4, printed pp.13–16, actual normalized flag maps; Proposition 1.7, complete proof printed pp.17–19, quotient projectives and adjoint identification. The actual regular-bimodule transport and both dual-basis identities are constructed here."
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Sections 4.2–4.3, printed pp.19–28, the independently constructed projective cyclotomic induction/restriction bimodules."
---

## Statement

For the standard first-strand cyclotomic quotient of a real symmetrizable KLR
datum over any degree-zero field and every homogeneous (Q1)–(Q4) parameter
family, put $A=R^\Lambda(\beta)$, $B=R^\Lambda(\beta+\alpha_i)$,
$e=e(\beta,i)$, $X=Be$, $Y=eB$,
$h=\langle h_i,\Lambda-\beta\rangle$ and $t=2d_i(1-h)$.
There are explicit, compatible homogeneous maps
$$T_i:eBe\longrightarrow A,\qquad \deg T_i=t,$$
and finite homogeneous tensors
$$C_i=\sum_\alpha x_\alpha\otimes_A y_\alpha\in X\otimes_A Y,\qquad \deg x_\alpha+\deg y_\alpha=-t,$$
such that $T_i$ is an $A$-bimodule map, $bC_i=C_ib$ for every $b\in B$, and
$$x=\sum_\alpha x_\alpha T_i(y_\alpha x),\qquad y=\sum_\alpha T_i(yx_\alpha)y_\alpha.$$
In particular $X\{t\}\cong\operatorname{HOM}_A(Y,A)$ as $(B,A)$-bimodules,
where Hom is left-$A$-linear, the left $B$-action is precomposition with
right multiplication on $Y$, and the right $A$-action is multiplication on
values. The second unit is $b\mapsto bC_i$ and the second counit is
$y\otimes_B x\mapsto T_i(yx)$, giving
$E_i\{t\}\dashv F_i\dashv E_i$ on all graded modules. They are obtained by
finite normal-form/cap transport, not by assuming an actual Frobenius trace.
Dots and same-color crossing mates have the native cyclic normalization.
Each specified distinguished-$i$ different-color sideways pair has both
composites $t_{ij}$ times the identity. The separately distinguished-$j$
construction has both composites $t_{ji}$ times the identity. These are
different partial actions, not two different scalar values for the two
orders of one pair; their full word-closure comparison is not inferred here.
Arbitrary monic field specializations have the same ungraded construction,
with grading shifts forgotten. No finite-type, characteristic-zero,
geometric-global-basis or symmetric-trace premise is used.

## Facts & Assumptions

**Given:** The algebras, corner bimodules and shift in the Statement, with
right append and the first-strand cyclotomic ideal.

[F1] The fully typed formal category and its independently constructed
flag inverse/cap maps
([[def-minimal-parabolic-klr-diagram-proof-category]],
[[lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse]]):
both rank-one inverse equations, both formal adjunction triangles,
dot/same-color cyclicity, and the normalized partial different-color mate
pairs. At outside weight $h$ the first unit and second counit have degree
$s=d_i(1-h)$; at the adjacent outside weight $h-2$ the first counit and
second unit have degree $-s$. The same distinguished-$i$ pair has both
composites $t_{ij}$; the separately distinguished-$j$ construction has
scalar $t_{ji}$.

[F2] The normal-form/cap-ideal supplier
([[lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection]]):
the quotient representable category has the exact cyclotomic downward Hom
corners, its ideal is stable under all allowed whiskers, and every mixed
word is a retract of a finite sum of downward words by its specified
finite rank-one reduction. No extra downward relation occurs. Its corner
identifications respect composition, word idempotents and generator
append maps, also for arbitrary monic specializations.

[F3] The actual basic functors and ordinary adjunction are
[[def-cyclotomic-klr-induction-and-restriction-functors]];
[[thm-cyclotomic-klr-induction-is-projective-on-the-right]] independently
proves that they preserve finite graded projectives. Tensor/Hom and shifts
are those of [[def-graded-balanced-tensor-product-and-homogeneous-hom]] and
[[def-graded-ring-module-bimodule-and-internal-shift]].

## Proof

**Proof technique:** explicitly extend the downward-corner equivalence to
projectives, identify the first right adjoint with restriction, evaluate
the transported second unit/counit on regular modules, and read both
dual-basis identities from their triangles.

1.1 The concrete projective equivalence. For each root $\gamma$ let $Q_\gamma$ be the finite direct sum of all downward words of weight $\gamma$ from the vacuum. Its cyclotomic quotient endomorphism algebra is $R^\Lambda(\gamma)$ by [F2]. A mixed word is reduced by moving its earliest upward letter toward the vacuum. An unequal-color step uses the normalized mixed isomorphism; a nonnegative equal-color step replaces it by the prescribed finite direct sum, while a negative step uses the prescribed inclusion/projection to exhibit the needed summand as a retract. Every term decreases the pair consisting of the number of upward letters and their distance from the vacuum; an upward letter at the vacuum is killed by the quotient ideal. Thus the stated finite downward retraction is an actual matrix of formal maps, with its two retraction equations. Apply the downward Hom identification entrywise to such matrices and their idempotents. For the target-first corner convention, downward Yoneda first sends a word $\nu$ to the right module $e(\nu)R^\Lambda(\gamma)$; twisting by the generator-fixing anti-involution sends it to the left module $R^\Lambda(\gamma)e(\nu)$. A diagram $p$ then acts by right multiplication by $\psi(p)$. This explicit double reversal makes composition correct; it is not an implicit opposite-algebra identification. Full faithfulness on sums follows entrywise from the corner isomorphism, on retracts by cutting the matrix with its idempotents, and essential surjectivity from the definition of a finite projective as a finite free retract. Denote this equivalence by $\Xi_\gamma$. [F1, F2, construct, algebra]

2.1 Induction and its actual right adjoint. Appending $G_i$ sends every downward generator and old algebra action to its right-append image. Hence $\Xi_{\beta+\alpha_i}G_i\Xi_\beta^{-1}$ is $F=X\otimes_A-$ on the regular-word summands, their morphisms, finite sums and retracts. The formal $H_i$ on this pair is normalized restriction shifted by $s=d_i(1-h)$: its input weight is $h-2$, so its defining shift is $-d_i(1+h-2)=s$. Put $\bar E=\Xi_\beta H_i\Xi_{\beta+\alpha_i}^{-1}\{-s\}$. The first formal unit/counit, after this deshift, give $F\dashv\bar E$ in degree zero. The actual functor $E=Y\otimes_B-$ is also a right adjoint by [F3] and takes finite projectives to finite projectives. If $(\bar\eta,\bar\varepsilon)$ and $(\eta,\varepsilon)$ are these two first adjunctions, define $\alpha_N=E(\bar\varepsilon_N)\eta_{\bar E N}:\bar E N\to EN$ and $\beta_N=\bar E(\varepsilon_N)\bar\eta_{EN}:EN\to\bar E N$. Substitution and the two first triangles give $\alpha_N\beta_N=1$ and $\beta_N\alpha_N=1$; the same substitutions show these isomorphisms preserve the first units/counits. This identifies $H_i$ with actual $E\{s\}$ by explicit maps. [step 1.1, F1, F3, construct, algebra]

3.1 Actual second maps, including their shifts. Write $\bar\varepsilon'_M:\bar E FM\to M$ and $\bar\eta'_N:N\to F\bar E N$ for the transported second maps after deshifting $H_i$. Their degrees are $2s=t$ and $-2s=-t$: the second counit originally has degree $s$ on $H_iG_i=\bar EF\{s\}$, whereas the second unit at the adjacent weight has degree $-s$ into $G_iH_i=F\bar E\{s\}$. Define $\varepsilon'_M=\bar\varepsilon'_M\beta_{FM}$ and $\eta'_N=F(\alpha_N)\bar\eta'_N$. The equations $\alpha\beta=1$, naturality, and the second triangles in [F1] give the second triangles for these actual maps, with precisely the indicated degrees. This construction involves only applying the explicit matrices of step 1.1 and the displayed maps of step 2.1 to the diagram units/caps; the cup/cap images are not assumed to be a previously named coefficient trace. [step 1.1, step 2.1, F1, construct, algebra]

4.1 Evaluation on the regular modules constructs the bimodule functional and tensor. Identify $EFA=Y\otimes_BX=eBe$ and $FEB=X\otimes_AY$. Set $T_i=\varepsilon'_A$ under the first identification and $C_i=\eta'_B(1_B)$ under the second. These are explicit finite normal-form computations: use the specified retraction matrices for $H_iG_iQ_\beta$ and $G_iH_iQ_{\beta+\alpha_i}$, the corner isomorphisms, the first-adjoint maps $\alpha,\beta$, and finally the second cap or cup. For an input $z\in eBe$, the target-first convention uses the formal normal-form lift of $\psi(z)$, so its left-projective image is right multiplication by $z$. Different generic lifts differ by the exact cyclotomic ideal of [F2] and hence give the same quotient computation. Left $A$-linearity of $\varepsilon'_A$ gives $T_i(\iota(a)z)=aT_i(z)$; naturality with right multiplication by $a$ on $A$ gives $T_i(z\iota(a))=T_i(z)a$. Similarly $\eta'_B$ is left $B$-linear, so $\eta'_B(b)=bC_i$, and naturality with right multiplication by $b$ on $B$ gives $bC_i=C_ib$. The degrees in step 3.1 give $\deg T_i=t$, $\deg C_i=-t$. A tensor element has a finite expression by the definition of the balanced tensor product; taking its homogeneous components gives the asserted finite sum $C_i=\sum x_\alpha\otimes y_\alpha$. [step 1.1, step 2.1, step 3.1, F2, F3, construct, algebra]

5.1 Both dual-basis identities and the actual perfect pairing. Evaluate the second triangle for $F$ at $A$: $x\mapsto\sum x_\alpha\otimes y_\alpha\otimes x\mapsto\sum x_\alpha T_i(y_\alpha x)$ is the identity on $X$. Evaluate the second triangle for $E$ at $B$: $y\mapsto\sum y\otimes x_\alpha\otimes y_\alpha\mapsto\sum T_i(yx_\alpha)y_\alpha$ is the identity on $Y$. Thus the claimed identities are actual bimodule equations. Define $\Phi:X\{t\}\to\operatorname{HOM}_A(Y,A)$ by $\Phi(x)(y)=T_i(yx)$. The bimodule properties in step 4.1 give the specified $B,A$-actions, and the degrees give a degree-zero map. Its inverse sends $f$ to $\sum x_\alpha f(y_\alpha)$, regarded in $X\{t\}$. The first identity proves this inverse composed with $\Phi$ fixes $x$, and left $A$-linearity of $f$ and the second identity prove $\Phi$ composed with it fixes $f$. Hence the pairing is perfect without a symmetric-algebra or dimension argument. [step 3.1, step 4.1, algebra]

6.1 Extension to all modules. At regular modules, naturality identifies the second counit with $y\otimes_Bx\mapsto T_i(yx)$ and the unit with $b\mapsto bC_i$. A natural transformation between tensor functors on finite projectives is determined by its regular-module bimodule map: finite sums and shifts follow additively and retracts follow by cutting with their idempotents. The displayed maps therefore reproduce the transported transformations there. Define them on arbitrary modules by tensoring these actual bimodule maps. Their balancing uses $A$-bilinearity of $T_i$ and $B$-centrality of $C_i$, and their two triangle composites are the exact identities of step 5.1 tensored with the input. They consequently give $E\{t\}\dashv F$ on all modules, including infinitely generated ones, together with the independently existing $F\dashv E$. No projective-presentation limit or assumed quotient flatness is used. [step 4.1, step 5.1, F3, algebra]

7.1 Native compatibility and the two partial constructions. All transformations were transported through a fully faithful equivalence preserving append generators and the first adjunction. Therefore the actual dot and same-color mate equations are exactly the realized equations of [F1], with $\kappa=-\tau$ throughout. For the $i$-partial different-color pair, its maps are the concrete cup--$\kappa_{ij}$--cap and opposite cup--$\kappa_{ji}$--cap contractions in [F1]; both composites are $t_{ij}$ times their respective identities. Passing to native crossings negates each of these single-crossing maps, so the two signs cancel in either composite. Repeating the entire construction with distinguished color $j$ gives its actual pair with scalar $t_{ji}$ in both orders. This proves the stated partial mate compatibilities at their actual source/target weights, without identifying an $H_j$ inside $\mathcal P_i$, which contains only $H_i$. A full word-closure comparison between the two separately constructed partial actions requires an additional calculation. [step 1.1, step 2.1, step 3.1, F1, algebra]

8.1 Boundaries and monic specializations. If $A=0$, unital right append forces $e=0$; if $e=0$ for any other reason, $X=Y=0$, $T_i=C_i=0$, the pairing is the zero-to-zero isomorphism and both functor triangles are identities of zero functors. At the vacuum the actual construction is the monic coefficient trace on $k[z]/a_i(z)$ and its monic dual-power Casimir from [F1], including $a_i=1$ and degree-zero quotients. In the standard case its degree is $2d_i(1-\lambda_i)$, agreeing with $t$ at $\beta=0$. All reductions use finitely many words, matrices and polynomial remainder coefficients; no arbitrary-index choice, factorial denominator, splitting field or separability argument is used. The two independent suppliers and the ordinary adjunction/projectivity in [F3] work for arbitrary monic specializations, so forgetting grading gives the same actual maps and identities there. No trace theorem was used to construct its own adjunction. [step 4.1, step 5.1, step 6.1, F1, F2, F3, algebra] ∎
