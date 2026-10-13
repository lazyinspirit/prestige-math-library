---
id: thm-graded-specht-heads-classify-the-graded-simple-modules
kind: theorem
title: "Graded Specht heads classify the graded simple modules"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 41
deps: [def-nondegenerate-root-of-unity-level-one-hecke-regime,
       prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       thm-graded-specht-module-has-homogeneous-tableau-basis,
       thm-graded-specht-classes-realize-standard-fock-vectors,
       cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group,
       thm-ariki-canonical-basis-theorem-in-characteristic-zero,
       thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       def-cellular-algebra-basis-and-cell-module,
       def-e-regular-and-e-restricted-partitions,
       def-dominance-order-on-partitions,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-cyclotomic-klr-induction-and-restriction-functors,
       lem-standard-fock-vectors-expand-in-the-upper-global-basis,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       cor-dj-bridge-specialization-and-composition-multiplicity-dictionary,
       thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       lem-graded-algebra-isomorphism-transports-the-graded-module-category,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 5.2-5.5, printed pp. 47-55: Theorems 5.10 and 5.13 with their proofs; the cellular head classification, the restricted distinguished shapes and the head/crystal label comparison. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 6.6-7, printed pp. 27-33: graded branching rules; Section 9.1-9.5, printed pp. 39-46: the graded canonical-basis and decomposition-number statements. Complete passages read."
verification:
  precheck: pass
---

## Statement

In the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]], for
$\lambda\in RP_\alpha$ the graded Specht module $S(\lambda)$ of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]] has irreducible
head, denoted $\dot D(\lambda)$, and
$\dot D(\lambda)^\circledast\cong\dot D(\lambda)$. Moreover:

1. the modules $\{\dot D(\lambda)\langle m\rangle:\lambda\in RP_\alpha,\ m\in\mathbb Z\}$
are a complete set of pairwise non-isomorphic graded simple
$R^\Lambda_\alpha$-modules (equivalently, of $H^\Lambda_\alpha$ with the
transported grading);

2. in $G_0^{\rm gr}(H^\Lambda_\alpha)$ one has
$[S(\lambda)]=[\dot D(\lambda)]+(\ast)$ if $\lambda$ is restricted and
$[S(\lambda)]=(\ast)$ otherwise, where $(\ast)$ is an $A$-linear combination of
$[\dot D(\mu)]$'s with $\mu\lhd\lambda$; consequently
$[S(\mu):\dot D(\lambda)]_q\ne0$ implies $\lambda\unlhd\mu$, and
$[S(\lambda):\dot D(\lambda)]_q=1$;

3. in branch (C0), $\dot D(\lambda)\cong D(\lambda)$, the normalized simple
with crystal label $\lambda$ of
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]] (4);
separately, after forgetting the grading and converting the ordinary right
modules through star, $\dot D(\lambda)\cong(D_{\rm DJ}^{\lambda'})^{\theta}$ by
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`. Thus the
conjugate $e$-regular ordinary label occurs with the explicit
sign-automorphism pullback, which reflects residue content and is not an
untwisted same-block identification. The ordinary module dictionary and radical
comparison hold in both field branches; the crystal-label comparison in this
part is the stated (C0) assertion.

Parts (1) and (2) hold in both branches (C0) and (CP); part (3) is stated in
branch (C0), the branch of the decomposition theorem it consumes. The branch
(CP) analogue of (3) is the identification [BK 2009, Theorem 5.18] and is NOT
asserted here. Choice is inherited only through the cited transported
global-basis suppliers, as recorded in the contract.

## Facts & Assumptions

**Given:** The nondegenerate level-one regime in either field branch, its
finite-dimensional graded block $B=R^\Lambda_\alpha$ (or the transported Hecke
block), the graded left Murphy cells $S(\mu)$ and dominance order.

[F1] The ungraded cells are the Murphy cells, their form quotients are
absolutely simple exactly at the restricted labels, and these quotients exhaust
the ungraded simples over every stated field
([[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]]).
Every proper submodule of a nonzero-form cell lies in its form radical;
$[S(\mu):D_\lambda]\ne0$ forces $\lambda\unlhd\mu$, and
$[S(\lambda):D_\lambda]=1$
([[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]]).
The left version is obtained through cellular star.

[F2] The homogeneous tableau basis supplies precisely the grading on these
same ungraded cells
([[thm-graded-specht-module-has-homogeneous-tableau-basis]],
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]).
The restricted labels and order are
[[def-e-regular-and-e-restricted-partitions]] and
[[def-dominance-order-on-partitions]].

[F3] In both branches the canonical restricted-dual identification sends
$[S(\mu)]$ to the standard coordinate functional $\operatorname{Std}_\mu$
([[thm-graded-specht-classes-realize-standard-fock-vectors]]).
The restricted coordinate functionals form an $A$-basis and satisfy
$\operatorname{Std}_\mu=\sum_\nu d_{(\nu,\mu)}(q)G^*(\nu)$ with dominance support
and restricted diagonal $1$
([[lem-standard-fock-vectors-expand-in-the-upper-global-basis]],
[[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]]).
Here the upper bar is the adjoint of lower bar and fixes $G^*(\nu)$.

[F4] In (C0) only, the crystal-labelled normalized simple classes are the
upper global vectors and their multiplicities are $d_{(\lambda,\mu)}(q)$
([[thm-ariki-canonical-basis-theorem-in-characteristic-zero]],
[[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]],
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

[F5] The ordinary signed-conjugate module and unit-scaled form dictionary are
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]],
[[lem-dj-bridge-sign-automorphism-and-star-dual]] and
[[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]].

[F6] In both branches each graded simple shift orbit has a unique
$D_\psi$-self-dual representative, independently of any characteristic-zero
global-basis theorem
([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]],
[[def-cyclotomic-klr-diagram-duality-and-graded-module-duals]]).
On the Hecke side the transported anti-involution is
$\rho\psi\rho^{-1}$; it is not identified with raw Murphy star
([[lem-graded-algebra-isomorphism-transports-the-graded-module-category]]).
Write $\circledast=D_\psi$ and use the shifts of
[[def-graded-ring-module-bimodule-and-internal-shift]].

[F7] The projective map sends the word projective $Be(\mathbf i)$ to the
corresponding negative-generator word on the vacuum; these words span the
highest-weight module over $\mathbb Q(q)$. The module map is defined by
$\Psi(M)(\phi(P))=T(P,M)$, where $T$ is the bilinear tensor pairing and
$h(P,M)=T(P^\#,M)$ is the first-bar-sesquilinear Hom pairing
([[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]],
[[thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module]],
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

[C1] Choice is inherited through the quantum highest-weight and global-basis
suppliers; the finite grading and pairing arguments add none
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The intrinsic radical is homogeneous.** For restricted $\lambda$, let $R_\lambda$ be the ungraded cell-form radical in $S(\lambda)$. By [F1] it is the unique maximal proper submodule, and the same is true after scalar extension to the infinite field $K=F(u)$: the Gram kernel extends to $K\otimes_F R_\lambda$ and the quotient remains simple. The same argument also works over an infinite algebraic closure; using $F(u)$ requires no algebraic-closure choice. For $t\in K^\times$ define $s_t(a)=t^ja$ on $B_j$ and $g_t(v)=t^kv$ on $S(\lambda)_k$. The grading gives $g_t(av)=s_t(a)g_t(v)$, so $g_t$ takes submodules to submodules and preserves the unique maximal one. If $v=\sum_{k\in E}v_k$ belongs to this radical, all $\sum_k t^kv_k$ do. The distinct Laurent monomials $t^k$ are linearly independent as functions on the infinite field: multiply a vanishing relation by a large power of $t$ and use the root bound for a polynomial. Thus one can select $|E|$ values of $t$ with invertible evaluation matrix, and solve for each $v_k$ in the radical. It is homogeneous over $K$, hence over $F$, since $v_k\otimes1\in K\otimes R_\lambda$ implies $v_k\in R_\lambda$. Therefore the quotient $\dot D(\lambda)=S(\lambda)/R_\lambda$ has its actual quotient grading and is irreducible even after forgetting that grading. No homogeneity or degree of the cellular form has been assumed. [F1, F2, algebra]

1.2 **Categorical duality transports to the adjoint upper bar in both branches.** The projective $Be(\mathbf i)$ is $\#$-self-dual: evaluation sends $\operatorname{HOM}_B(Be(\mathbf i),B)$ to $e(\mathbf i)B$, and twisting by the generator-fixing $\psi$ gives $Be(\mathbf i)$ with no shift. Under [F7] its image is a word $F_{i_d}\cdots F_{i_1}v_{\Lambda_0}$, which lower bar fixes since it fixes the vacuum and every $F_i$. These words span each rational weight space. Thus the semilinear projective duality transported by $\phi$ equals lower bar over $\mathbb Q(q)$, and hence on the integral lattice as well; ordinary words need not generate that lattice integrally. Evaluation of a tensor functional gives $D(P^\psi\otimes_BM)=\operatorname{HOM}_B(P,D_\psi M)$, so $\overline{T(P,M)}=h(P,D_\psi M)=T(P^\#,D_\psi M)$. Consequently $\Psi(D_\psi M)(x)=\overline{\Psi(M)(\overline{x})}$, the adjoint upper bar on the restricted dual. This uses only [F6, F7], so holds in (CP) as well as (C0), without identifying positive-characteristic simples with a global basis. [F6, F7, algebra]

2.1 **Completeness of the graded list and uniqueness of shifts.** Let $M$ be any finite-dimensional graded simple $B$-module. Its underlying module has a simple submodule, which is isomorphic to the underlying $\dot D(\lambda)$ for some restricted $\lambda$ by [F1]. An ungraded embedding $f:\dot D(\lambda)\to M$ decomposes into finitely many homogeneous maps $f_r$: for homogeneous $a,v$, comparing degree components in $f(av)=af(v)$ gives $f_r(av)=af_r(v)$. A nonzero $f_r$ has zero kernel since its source is ungraded simple, and its image is a nonzero graded submodule, hence all of $M$. It is therefore a graded isomorphism from the suitable shift of $\dot D(\lambda)$. The same decomposition applied to an ungraded isomorphism between two graded lifts proves that they differ by a shift. Distinct labels cannot become isomorphic by [F1]; a nonzero finite-dimensional graded vector space cannot equal a nonzero shift of itself because its finite degree support would have to be invariant under a nonzero translation. Thus the list in (1) is complete and pairwise distinct. [F1, F2, step 1.1, algebra]

2.2 **The standard-class bar difference is strictly lower.** By [F3], for restricted $\lambda$ the upper expansion is $\operatorname{Std}_\lambda=G^*(\lambda)+\sum_{\nu\lhd\lambda}d_{(\nu,\lambda)}G^*(\nu)$. Upper bar fixes every $G^*(\nu)$ and reverses coefficients, so its difference from $\operatorname{Std}_\lambda$ is a combination of strictly smaller upper vectors. The finite dominance-unitriangular restricted matrix has a triangular inverse over $A$; hence each smaller upper vector is itself a combination of restricted $\operatorname{Std}_\eta$ with $\eta\unlhd\nu\lhd\lambda$. Applying [F3] and step 1.2 gives $[S(\lambda)^\circledast]-[S(\lambda)]\in\sum_{\eta\lhd\lambda}A[S(\eta)]$. This is a statement in the upper integral dual lattice, not in an asserted self-dual lower lattice. [F3, step 1.2, algebra]

3.1 **The actual graded triangular expansion.** A finite graded composition series exists by repeatedly taking a proper graded submodule of maximal dimension. By step 2.1 its factors, after forgetting grading, are the absolutely simple heads of [F1]. Their ungraded multiplicities and dominance support therefore give $[S(\mu)]=\sum_{\lambda\unlhd\mu}c_{\lambda\mu}(q)[\dot D(\lambda)]$. If $\mu$ is unrestricted, every such restricted $\lambda$ is strictly smaller. If $\mu$ is restricted, the actual quotient map in step 1.1 has degree zero and supplies $\dot D(\mu)$ once; ungraded diagonal multiplicity $1$ in [F1] excludes all further shifts of that label, so $c_{\mu\mu}=1$. This proves every clause of (2), without extracting labels or grading shifts from a Grothendieck-group rank count. [F1, step 1.1, step 2.1, algebra]

4.1 **The intrinsic head has zero duality shift.** By [F6] the orbit of $\dot D(\lambda)$ contains a $D_\psi$-self-dual representative $L$. Write $\dot D(\lambda)\cong L\langle r\rangle$, so $\dot D(\lambda)^\circledast\cong\dot D(\lambda)\langle-2r\rangle$; denote this integer shift by $m$. This uses the separately proved normalization supplier, not an inference about a homogeneous cell form or its half-degree. Applying exact duality to the expansion in step 3.1 preserves every smaller label's orbit by the same [F6]. Thus the coefficient of $[\dot D(\lambda)]$ in $[S(\lambda)^\circledast]-[S(\lambda)]$ is $q^m-1$, while step 2.2 and the triangular expansions in step 3.1 make it zero. The simple shift-orbit classes are a free $A$-basis (graded Jordan--Hölder, step 2.1), so $q^m=1$ in $\mathbb Z[q,q^{-1}]$, forcing $m=0$. This proves the asserted self-duality in both branches and finishes (1). [F6, step 2.1, step 3.1, step 2.2, algebra]

5.1 **The (C0) crystal label is the intrinsic head label.** In (C0), [F4] gives $[S(\mu)]=\sum_{\lambda\unlhd\mu}d_{(\lambda,\mu)}[D(\lambda)]$ with diagonal $1$. Both the intrinsic heads of step 4.1 and the $D(\lambda)$ are normalized self-dual representatives of the same simple orbits, so their bases differ by a permutation, with no shifts. Induct through a finite linear extension of dominance: after the strictly smaller labels have been identified, subtract their terms from the two expansions of $S(\lambda)$. The remaining leading class is both $[\dot D(\lambda)]$ and $[D(\lambda)]$, proving equality and hence graded isomorphism. This establishes only the (C0) crystal-label clause of (3). [F4, step 3.1, step 4.1, algebra]

6.1 **The ordinary dictionary and Choice.** Independently, the intrinsic nondegenerate form on the ungraded cell head gives its raw-Murphy-star duality by $v\mapsto\langle v,-\rangle$. The Laurent-unit form identity of [F5] identifies the cell radicals and quotients, including the zero case, after every stated field specialization. Through the right-to-left star conversion and involutive sign pullback this gives the ungraded identification $\dot D(\lambda)\cong(D_{\rm DJ}^{\lambda'})^\theta$ in both branches, with the reflected ordinary residue content described in the Statement. This raw cellular-star comparison is separate from the transported $\psi$ duality used in the categorical duality argument; no equality of those anti-involutions has been inferred. The (CP) crystal-label assertion remains unasserted. All new grading and interpolation arguments are finite; Choice is precisely inherited through [C1]. [F5, F6, C1, step 5.1] ∎
