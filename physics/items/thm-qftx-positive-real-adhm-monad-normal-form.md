---
id: thm-qftx-positive-real-adhm-monad-normal-form
kind: theorem
title: Positive real linear monad normal forms
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 7
deps:
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-qftx-positive-real-monad-hyperplane-twist-sequences
  - def-axiom-of-choice
  - def-qftx-adhm-linear-data-stability-and-regularity
  - thm-qftx-adhm-real-complex-quotient-correspondence
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
  - def-qftx-positive-real-monad-first-order-families
  - lem-qftx-positive-real-monad-analytic-twist-cohomology
  - lem-qftx-positive-real-monad-chain-lift
  - lem-qftx-positive-real-monad-flat-splitting
  - lem-qftx-positive-real-monad-internal-positivity
  - lem-qftx-positive-real-monad-rank-stability-criterion
  - lem-qftx-positive-real-monad-charge-normalization
dependency_roles:
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  lem-qftx-positive-real-monad-hyperplane-twist-sequences: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  thm-qftx-adhm-real-complex-quotient-correspondence: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
  def-qftx-positive-real-monad-first-order-families: mathematical-premise
  lem-qftx-positive-real-monad-analytic-twist-cohomology: mathematical-premise
  lem-qftx-positive-real-monad-chain-lift: mathematical-premise
  lem-qftx-positive-real-monad-flat-splitting: mathematical-premise
  lem-qftx-positive-real-monad-internal-positivity: mathematical-premise
  lem-qftx-positive-real-monad-rank-stability-criterion: mathematical-premise
  lem-qftx-positive-real-monad-charge-normalization: mathematical-premise
axiom_base: "ZF + full AC inherited through the named analytic cohomology and finite-dimensional suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J.-L. Verdier, Exposé VII, Astérisque 71–72"
      url: https://numdam.org/item/AST_1980__71-72__1_0.pdf
      locator: "Lemma 6.10, Proposition 6.11, and proof 6.13–6.18, printed pp. 125–130: the arbitrary-rank positivity mechanism; only the explicitly reconstructed finite calculation is used."
    - title: "W. Barth and K. Hulek, Monads and Moduli of Vector Bundles"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf
      locator: "Section 3 Proposition 4 and Section 4 Propositions 5–6, printed pp. 331–334: monad morphism lifting and bilinear duality comparison; the sigma-Hermitian lift is proved locally."
    - title: "Simon K. Donaldson, The ADHM construction of Yang–Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "Sections 3–4 and 6, printed pp. 4–6 and 10–11: twistor incidence, ADHM monads and orientation; its matrix convention is not substituted."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "Section 3.1, printed pp. 17–19: framed data and locally-free locus; the proof below uses the declared raw convention."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full AC. Let $k\ge0$ and
$N\ge2$. On $\mathbb P^3(\mathbb C)$ with homogeneous coordinates
$(\lambda_1,\lambda_2,\mu_1,\mu_2)$, set
$$j(\lambda_1,\lambda_2,\mu_1,\mu_2) =(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1), \qquad \sigma([z])=[jz].$$
For each $(z_1,z_2)\in\mathbb C^2$, let $\ell_z$ be the real twistor line
defined by
$$\mu_1=z_1\lambda_1-\bar z_2\lambda_2,\qquad \mu_2=z_2\lambda_1+\bar z_1\lambda_2,$$
and let $\ell_\infty=\{\lambda_1=\lambda_2=0\}$. Suppose
$$\mathcal O(-1)\otimes U\xrightarrow{\alpha} \mathcal O\otimes S\xrightarrow{\beta} \mathcal O(1)\otimes U'$$
is a complex of holomorphic vector bundles with $\beta\alpha=0$, locally split
injective and surjective end maps, and locally free middle cohomology
$F=\ker\beta/\operatorname{im}\alpha$ of rank $N$, where
$\dim_\mathbb C U=\dim_\mathbb C U'=k$ and
$\dim_\mathbb C S=2k+N$. Suppose $F|_{\ell_z}$ is holomorphically trivial for
every $z$, and it has a nondegenerate holomorphic $\sigma$-Hermitian pairing
$h_F:F\to D(F)$ fixed by the canonical double-dual identification, where
$D(F)=(\sigma^*\overline F)^\vee$. For a $\sigma$-invariant real line $\ell$
and sections $s,t\in H^0(\ell,F|_\ell)$, the induced first-slot-linear
Hermitian form is the constant value of
$x\mapsto h_{F,x}(s(x))(\overline{t(\sigma x)})$; assume it is positive
definite. This is the line-form convention of the preceding first-order
real-structure definition. At the monad level, for a homogeneous linear
matrix $P$ set $P^\#(z)=P(jz)^\dagger$; the signed dual monad has
differentials $-\beta^\#$ and $\alpha^\#$, so its cohomology is $D(F)$ and
its double dual is the original monad under the induced identifications.
Suppose also that a
unitary framing identifies $F|_{\ell_\infty}$ isometrically with
$W\otimes\mathcal O_{\ell_\infty}$ for a fixed Hermitian space $W$ of dimension
$N$.

Then there are Hermitian
spaces $V$ and $W$ of dimensions $k$ and $N$, with $W$ carrying the prescribed
framing, and maps
$$B_1,B_2\in\operatorname{End}(V),\qquad I:W\to V,\qquad J:V\to W$$
such that, after a pairing-preserving framed chain identification, the monad
maps are
$$\alpha= \begin{pmatrix} A\\ C\\ J\lambda_1+I^\dagger\lambda_2 \end{pmatrix}, \qquad \beta=(-C,\ A,\ I\lambda_1-J^\dagger\lambda_2),$$
where
$$A=B_1\lambda_1-B_2^\dagger\lambda_2-\mu_1,\qquad C=B_2\lambda_1+B_1^\dagger\lambda_2-\mu_2.$$
The extracted maps satisfy both zero-moment equations
$$\mu_{\mathbb C}=[B_1,B_2]+IJ=0,\qquad \mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J=0.$$
They are stable, meaning the vectors
$B_{i_1}\cdots B_{i_m}I(w)$ span $V$, and costable, meaning no nonzero
subspace invariant under both $B_i$ is contained in $\ker J$. Conversely,
every such regular datum with both moments zero gives a locally split monad
with the stated real-line positivity and infinity framing.
Here $\dagger$ denotes adjoint in the indicated Hermitian spaces.

In the next assertion, a normalized framed isomorphism is a chain
isomorphism preserving the lifted pairing and the specified infinity frame.
Such isomorphisms correspond exactly to the simultaneous $U(V)$ action
$$(B_1,B_2,I,J)\longmapsto (gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1}),\qquad g\in U(V).$$
Thus inverse coefficient extraction recovers precisely one $U(V)$ orbit; when
$k=0$, $U(0)$ is trivial, and every constant flat summand is retained as an
unused orthogonal subspace of $W$.

For $t_1,t_2\in U(1)$, choose an orthonormal framed basis
$w_1,\ldots,w_N$ of $W$ and phases $e_1,\ldots,e_N\in U(1)$, and let
$h(w_a)=e_a^{-1}w_a$. The coordinate action
$(\lambda_1,\lambda_2,\mu_1,\mu_2)\mapsto
(\lambda_1,t_1t_2\lambda_2,t_1\mu_1,t_2\mu_2)$ acts on data by
$$(B_1,B_2,I,J)\mapsto (t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ).$$
The corresponding chain factors on the source, middle and target terms are,
respectively,
$(t_1t_2)^{-1}$, $\operatorname{diag}(t_2^{-1},t_1^{-1},h)$, and $1$.

The same extraction and classification hold naturally for first-order
families over $A=\mathbb C[\epsilon]/(\epsilon^2)$ with
$\bar\epsilon=\epsilon$ in the following exact locally-free/base-change
range: the three modules are free of ranks $k,2k+N,k$, the end maps are
locally split, the middle cohomology is locally free and commutes with
reduction, its global section module is free and commutes with reduction, the
coefficient-image submodule in the middle term is a direct summand and
commutes with reduction, and each fixed real-line restriction is trivial
with its section module commuting with reduction. The framing and pairing
are defined over $A$, while positivity is required only on the reduced
complex; adjoints on these modules use the coefficient involution and the
induced $A$-Hermitian forms. Call an $A$-valued datum regular when its
reduction is stable and costable. The extracted matrices lie over $A$ and
obey the same moment equations. Conversely, every $A$-valued regular datum
whose raw
monad satisfies these same global-section, coefficient-image and real-line
base-change conditions gives a family in this range. Pairing-preserving
framed family isomorphisms correspond exactly to
$U(k,A)=\{g:g^\dagger g=1\}$. This assertion is restricted to reduction and
the involution-preserving base maps $\epsilon\mapsto r\epsilon$ with
$r\in\mathbb R$.

For the finite algebraic monad resolution, let
$H_{\rm alg}=c_1^{\rm alg}(\mathcal O_{\mathbb P^3}(1))$ and
$H_{\rm top}=c_1^{\rm top}(\mathcal O_{\mathbb P^3}(1))$. The hyperplane cycle
map identifies these classes in their respective theories. Then
$\operatorname{ch}(F)=N-kH_{\rm alg}^2$ and
$c_2^{\rm alg}(F)=kH_{\rm alg}^2$. Its topological line class is the same
$H_{\rm top}$ and $c_2^{\rm top}(F)=kH_{\rm top}^2$. Define
$\jmath:\mathbb C^4\to\mathbb C^4$ by
$\jmath(\lambda_1,\lambda_2,\mu_1,\mu_2)=(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1)$,
so $\jmath^2=-1$. Identify $S^4=\mathbb H\mathbb P^1$ with the set of
$\jmath$-invariant complex two-planes in $\mathbb C^4$, and define the twistor
quotient map $\pi:\mathbb P(\mathbb C^4)\to S^4$ by
$\pi([v])=\operatorname{span}_{\mathbb C}(v,\jmath v)$. This is independent
of the representative of $[v]$ since $\jmath(cv)=\bar c\,\jmath v$, and
$v,\jmath v$ are linearly independent for $v\ne0$ because $\jmath^2=-1$.
Its fiber over a plane $L$ is $\mathbb P(L)\cong\mathbb P^1(\mathbb C)$; in
the finite stereographic chart these fibers are the displayed $\ell_z$, and
the remaining fiber is $\ell_\infty$. Write $z_1=x^0+ix^1$ and
$z_2=x^2+ix^3$, orient the finite base chart by
$dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and orient each fiber by its
complex orientation. These orientations induce the complex orientation of
$\mathbb P^3$ in base-then-fiber order; swapping these factors has sign
$(-1)^{4\cdot2}=+1$, so this also agrees with fiber-then-base order. Let
$u\in H^4(S^4;\mathbb Z)$ be the positive point class. For this positive
twistor orientation, $\pi^*u=H_{\rm top}^2$; consequently, if the underlying
topological bundle is $\pi^*E$ for a bundle $E\to S^4$ with $c_1(E)=0$, then
$c_2(E)=ku$.

## Statement references

[[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[[def-qftx-positive-real-monad-first-order-families]]

[[lem-qftx-positive-real-monad-chain-lift]]

[[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[[lem-qftx-positive-real-monad-flat-splitting]]

[[lem-qftx-positive-real-monad-internal-positivity]]

[[lem-qftx-positive-real-monad-rank-stability-criterion]]

[[lem-qftx-positive-real-monad-charge-normalization]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[thm-qftx-adhm-real-complex-quotient-correspondence]]

[Verdier, Exposé VII, Lemma 6.10, Proposition 6.11, and calculation 6.13–6.18](https://numdam.org/item/AST_1980__71-72__1_0.pdf)

[Barth–Hulek, Sections 3–4, Propositions 4–6](https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf)

[Donaldson, Sections 3–4 and 6](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, Section 3.1](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The monad, its real-line trivializations, positive pairing and unitary infinity framing from the Statement, together with its explicit first-order extension when the family clause is used.

[A1] Under full AC, the batch-67 scalar cohomology theorem states $H^0(\mathbb P^r,\mathcal O)=\mathbb C$ and $H^q(\mathbb P^r,\mathcal O)=0$ for $q>0$ for $0\le r\le3$. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[A2] Full AC is the stated axiom base inherited by the analytic and finite-dimensional suppliers used in this construction. [[def-axiom-of-choice]]

[F1] Under the negative-twist vanishings derived from [A1], every holomorphic map of the stated monad cohomology bundles lifts uniquely to a constant chain map; the signed self-dual lift is Hermitian and obeys $\beta(z)=\alpha(jz)^\dagger H$ and $\beta(jz)^\dagger=-H\alpha(z)$. [[lem-qftx-positive-real-monad-chain-lift]]

[F9] The analytic negative-twist groups $H^q(\mathbb P^3,\mathcal O(-1))=0$ for all $q$ and $H^q(\mathbb P^3,\mathcal O(-2))=0$ for $q=0,1,2$ follow from the hyperplane sequences and the scalar cohomology input. [[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[F2] The constant global section space is $L=\bigcap_i\ker\beta_i=M^{\perp_H}$ for $M=\sum_i\operatorname{im}\alpha_i$; the monad splits orthogonally as $L\otimes\mathcal O$ plus a reduced monad with no global sections, and the form on $L$ and every real-line section space is positive. [[lem-qftx-positive-real-monad-flat-splitting]]

[F3] On the reduced monad, the lifted middle Hermitian form is positive definite; the proof identifies the actual real-line positive complement and uses its inverse-Gram Laplacian inequality, uniform decay and the elementary minimum principle, without assuming a sign for the infinity Gram matrix. [[lem-qftx-positive-real-monad-internal-positivity]]

[F4] The ADHM convention is $\mu_{\mathbb C}=[B_1,B_2]+IJ$, $\mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J$; stability is the word-span condition and costability is the invariant-kernel condition. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F5] For these raw coefficients, affine injectivity of $a_z$ is equivalent to costability, affine surjectivity of $b_z^\dagger$ is equivalent to stability, and zero moments plus regularity give the displayed homogeneous bundle monad. [[lem-qftx-positive-real-monad-rank-stability-criterion]]

[F6] A first-order family is a locally split monad of free modules over $A=\mathbb C[\epsilon]/(\epsilon^2)$ with locally free cohomology commuting with reduction, free global sections and a direct-summand coefficient image commuting with reduction, and trivial real-line restrictions whose section modules commute with reduction; positivity is imposed on its reduced section forms, and the allowed base maps are reduction and $\epsilon\mapsto r\epsilon$ for real $r$. [[def-qftx-positive-real-monad-first-order-families]]

[F7] The finite algebraic resolution gives $\operatorname{ch}^{\rm alg}(F)=N-kH_{\rm alg}^2$, $c_1^{\rm alg}(F)=0$, $c_2^{\rm alg}(F)=kH_{\rm alg}^2$, and $\chi(F)=N-2k$; the topological second Chern class is $c_2^{\rm top}(F)=kH_{\rm top}^2$. The quaternionic quotient map is $\pi([v])=\operatorname{span}_{\mathbb C}(v,\jmath v)$, with fibers $\ell_z$ and $\ell_\infty$ and the positive orientation in the Statement; the transverse Thom pullback gives $\pi^*u=H_{\rm top}^2$. The conclusion $c_2(E)=ku$ requires the stated topological pullback hypothesis. [[lem-qftx-positive-real-monad-charge-normalization]]

[F8] At zero real moment level, regular complex orbits correspond to unique unitary orbits. This applies to the extracted stable data and is used only when passing from the explicit framed chain classification to the usual zero-level ADHM quotient. [[thm-qftx-adhm-real-complex-quotient-correspondence]]

[F10] For each integer $m$, the analytic hyperplane sequence is $0\to\mathcal O_{\mathbb P^r}(m-1)\to\mathcal O_{\mathbb P^r}(m)\to i_*\mathcal O_{\mathbb P^{r-1}}(m)\to0$. [[lem-qftx-positive-real-monad-hyperplane-twist-sequences]]

[F11] For any commutative coefficient ring $A$ with identity and $n>0$, the algebraic twisting-sheaf theorem states $H^0(\mathbb P^n_A,\mathcal O(d))=0$ for $d<0$; in particular $H^0(\mathbb P^1_A,\mathcal O(-1))=0$. For $n=3$ it also gives $H^0(\mathbb P^3_A,\mathcal O)=A$, acyclicity of $\mathcal O(-1)$ and $\mathcal O(-2)$, and homogeneous-polynomial global sections in nonnegative degree. In its Laurent-monomial calculation the modules and maps commute with coefficient homomorphisms. A fixed real line $\ell$ is the projectivization of a complex two-plane, so $\ell_A=\ell\times_{\mathbb C}\operatorname{Spec}A\cong\mathbb P^1_A$; restriction of the homogeneous degree $-1$ twisting sheaf from $\mathbb P^3_A$ is $\mathcal O_{\ell_A}(-1)$. These are algebraic statements about the $\operatorname{Proj}A$ family objects, not an analytic GAGA assertion. [[thm-cohomology-projective-space-twisting-sheaves]]

## Proof

**Given:** The Statement's monad and pairing, and [A1] whenever analytic cohomology is used.

1.1 First the holomorphic monad maps have homogeneous linear entries. Indeed, in the $m=1$ sequence of [F10], $H^1(\mathbb P^r,\mathcal O)=0$ by [A1], so restriction $H^0(\mathbb P^r,\mathcal O(1))\to H^0(\mathbb P^{r-1},\mathcal O(1))$ is surjective and its kernel is the defining hyperplane coordinate times $H^0(\mathcal O)=\mathbb C$. Starting with $r=0$, where $\mathcal O(1)$ on a point has one-dimensional section space, induction shows that every section is a linear combination of the homogeneous coordinates: subtract the global coordinate lifts of its restriction, then the remaining section is a constant multiple of the defining coordinate. This applies to entries of both $\operatorname{Hom}(\mathcal O(-1),\mathcal O)$ and $\operatorname{Hom}(\mathcal O,\mathcal O(1))$. Thus no algebraic/analytic comparison is needed to introduce their four coefficient maps. By [A1] and [F9], the hyperplane sequences and analytic scalar theorem give exactly the negative-twist vanishings required by [F1]. Apply [F1] to the pairing isomorphism; it gives the unique constant Hermitian lift $H$ with the signed identities there. Thus no algebraic cohomology group is being substituted for the analytic lifting groups. [A1, A2, F1, F9, F10, construct]

1.2 The first-order families here are the algebraic locally free sheaves on $\mathbb P^3_A$ specified in [F6]. The algebraic cohomology calculation [F11] gives $H^0(\mathbb P^3_A,\mathcal O)=A$ and the required vanishing of $\mathcal O(-1)$ and $\mathcal O(-2)$ over $A$, with the monomial modules and maps commuting with coefficient homomorphisms. The lifting calculation in [F1] uses only locally split kernel/image sequences, the long exact sequence, these cohomology groups, and the fact that global maps between equal twists are their constant coefficient matrices. The same calculation over $A$ therefore lifts the family pairing uniquely to an $A$-linear constant chain isomorphism with Hermitian middle matrix $H_A$; its inverse exists because its reduction is invertible. In both kernel/image sequences the vanishings identify $H^0(F_A)$ with the constant coefficient kernel $L_A$ of $\beta_A$. The specified global-section base-change condition makes the reduction of $L_A\hookrightarrow S_A$ injective; a full-rank minor is then a unit, so $L_A$ is a direct summand. [A1, A2, F1, F6, F11, construct]

2.1 By [F2], the global constant subspace $L$ is positive and $S=L\oplus M$ orthogonally, and the reduced monad on $M$ preserves the full framing. Apply [F3] to that reduced monad; it proves $H|_M$ positive. Since $H|_L$ is positive and the sum is orthogonal, $H$ is positive definite on all of $S$. In particular the argument also covers $k=0$, where $M=0$. [F2, F3, step 1.1]

2.2 By hypothesis the coefficient-image module $M_A$ is a direct summand. The coefficient identities give $M_A^\perp=L_A$; for a direct summand in a finite free module with a perfect pairing, the restriction map to its dual is split-surjective, so taking orthogonal complements twice returns that summand. Hence $M_A=L_A^\perp$ and $S_A=L_A\oplus M_A$. For each reduced real line $\ell$, its $\jmath$-invariant two-plane gives $\ell\cong\mathbb P^1_{\mathbb C}$ and $\ell_A\cong\mathbb P^1_A$. The restricted kernel/image sequence has kernel term $U_A\otimes_A\mathcal O_{\ell_A}(-1)$; by [F11], $H^0(\ell_A,\mathcal O_{\ell_A}(-1))=0$. Thus global sections of $K_A|_{\ell_A}$ inject into those of $F_A|_{\ell_A}$. A constant vector $l\in L_A\subseteq S_A$ gives a section of $K_A|_{\ell_A}$, and if its image in $H^0(\ell_A,F_A|_{\ell_A})$ vanishes then that section, and hence $l$, vanishes. The line-section base-change hypothesis identifies the reduced section space, so the reduced line positivity gives positivity on $L_0$. The internal-positivity proof applies to the reduction on $M_0$, so its reduced form is positive too. On infinity the family framing identifies the remaining orthogonal complement isometrically with $W_A$. [F1, F2, F3, F6, F9, F11, step 1.2, algebra]

3.1 Write the four coefficient maps of $\alpha$ as $P=\alpha_{\lambda_1}$, $Q=\alpha_{\lambda_2}$, $R=\alpha_{\mu_1}$, and $T=\alpha_{\mu_2}$. From the first-slot convention and $j^2=-1$, the corresponding coefficients of $\beta$ are $Q^\dagger H,-P^\dagger H,T^\dagger H,-R^\dagger H$ in that order. The $\mu_1^2,\mu_2^2,\mu_1\mu_2$ coefficients of $\beta\alpha=0$ give $T^\dagger HR=R^\dagger HT=0$ and $R^\dagger HR=T^\dagger HT$. The maps $R,T$ are injective by exactness at the two coordinate points of $\ell_\infty$. Positivity of $H$ therefore makes their common Gram matrix $G$ positive definite. Replacing the paired end bases by $G^{-1/2}$ normalizes both maps to isometries with orthogonal images. Choosing an orthonormal basis of $S$ then identifies $R=-\iota_1$, $T=-\iota_2$ and $S=(V\oplus V)\oplus W_0$, with $W_0$ their orthogonal complement. [given, step 2.1, algebra]

4.1 At infinity the maps are $\alpha_\infty=-\mu_1\iota_1-\mu_2\iota_2$ and $\beta_\infty=\mu_2\iota_1^\dagger-\mu_1\iota_2^\dagger$. For every $[\mu_1:\mu_2]\in\mathbb P^1$, the kernel of $\beta_\infty$ in $V\oplus V$ is the line-valued copy $\{(\mu_1v,\mu_2v):v\in V\}$, which is exactly the image of $\alpha_\infty$; $W_0$ is killed by $\beta_\infty$ and meets that image trivially. Therefore the restricted cohomology and its section pairing are canonically $W_0\otimes\mathcal O_{\ell_\infty}$ and its standard positive form. The specified unitary framing identifies $W_0$ with $W$ without discarding any flat summand. [step 3.1, given, algebra]

4.2 Relative to $S=V\oplus V\oplus W$, write $P=(B_1,B_2,J)^T$ and $Q=(Q_1,Q_2,Q_W)^T$. The coefficient of $\lambda_1\mu_1$ in $\beta\alpha=0$ is $Q^\dagger HR+T^\dagger HP=0$, so $Q_1=-B_2^\dagger$; the coefficient of $\lambda_1\mu_2$ is $Q^\dagger HT-R^\dagger HP=0$, so $Q_2=B_1^\dagger$. Define $I^\dagger=Q_W$. These definitions give exactly the displayed $\alpha$ and, by the lifted reality identity, the displayed $\beta$. [step 3.1, algebra]

5.1 The $\lambda_1^2$ coefficient of $\beta\alpha=0$ is $Q^\dagger HP=0$. Substitution of the blocks gives $-[B_2,B_1]+IJ=[B_1,B_2]+IJ=0$. The $\lambda_1\lambda_2$ coefficient is $Q^\dagger HQ-P^\dagger HP=0$. Expanding it gives $[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J=0$, which is $\mu_{\mathbb R}=0$. Conversely, these two moment equations make all coefficients of $\beta\alpha$ vanish, and direct substitution yields $$\beta\alpha=\lambda_1^2\mu_{\mathbb C} +\lambda_1\lambda_2\mu_{\mathbb R} -\lambda_2^2\mu_{\mathbb C}^\dagger=0.$$ [step 4.2, algebra]

5.2 Let a normalized framed chain isomorphism have domain, middle and target maps $g_-,g_0,g_+$. It preserves $H$, so $g_0$ is unitary. Comparing the two $\mu$ coefficients forces $g_0|_{V\oplus0}=g_-$ and $g_0|_{0\oplus V}=g_-$; unitarity then preserves $W_0$. The infinity framing is fixed, so $g_0|_{W_0}=1$. Thus $g_0=\operatorname{diag}(g,g,1)$ for one $g\in U(V)$, and the $\lambda$ coefficients force $B_i'=gB_ig^{-1}$, $I'=gI$, and $J'=Jg^{-1}$. Surjectivity of $\beta$ makes $g_+$ uniquely determined and equal to $g$. Conversely, each such $g$ defines the displayed pairing-preserving framed chain isomorphism. Hence there are no residual transformations beyond simultaneous $U(V)$. [step 3.1, step 4.1, step 4.2, algebra]

6.1 On the affine chart $[\lambda_1:\lambda_2:\mu_1:\mu_2] =[1:0:z_1:z_2]$, the raw maps are $a_z$ and $b_z^\dagger$ from [F5]. Since the original $\alpha,\beta$ have their required ranks at every point, [F5] gives costability and stability. Thus the extracted zero-moment datum is regular. Conversely, for stable and costable data, [F5] proves full homogeneous rank, composition zero, and local splitting, so the raw formula does define the required monad. [F4, F5, step 5.1, algebra]

6.2 Put $B_1'=t_1B_1$, $B_2'=t_2B_2$, $I'=Ih^{-1}$, and $J'=t_1t_2hJ$. Substituting $(\lambda_1,t_1t_2\lambda_2,t_1\mu_1,t_2\mu_2)$ into the primed $A,C$ gives $A'=t_1A$ and $C'=t_2C$. Substitution into $\alpha'$ then gives $$\alpha'(g_tz)(t_1t_2)^{-1} =\operatorname{diag}(t_2^{-1},t_1^{-1},h)\alpha(z).$$ The same substitution into $\beta'$ gives $\beta'(g_tz)\operatorname{diag}(t_2^{-1},t_1^{-1},h)=\beta(z)$. The factors therefore are the stated chain maps; on the framed flavor coordinates $h=\operatorname{diag}(e_a^{-1})$ supplies the stated weights. [step 4.2, step 5.1, algebra]

6.3 After lifting reduced orthonormal bases, the common Gram matrix of the two $\mu$ coefficient maps has the form $I+\epsilon K$ with $K=K^\dagger$. The change $T=I-\tfrac12\epsilon K$ satisfies $T^\dagger(I+\epsilon K)T=I$ using $\epsilon^2=0$ and $\bar\epsilon=\epsilon$. Replacing the source basis by this change and the target by its paired change normalizes both $\mu$ maps over $A$ without ordering nilpotent elements or asserting nilpotent positivity. For a normalized framed family chain isomorphism with maps $g_-,g_0,g_+$, the $\mu_1$ and $\mu_2$ coefficients force $g_0\iota_1=\iota_1g_-$ and $g_0\iota_2=\iota_2g_-$. The fixed framing gives $g_0|_{W_0}=1$, so $g_0=\operatorname{diag}(g_-,g_-,1)$. Since $\iota_1$ is isometric and $g_0$ preserves the middle Hermitian form, $g_-^\dagger g_-=1$. The $\lambda$ coefficients then force exactly the transformations of $B_i,I,J$, and conversely each $g_-\in U(k,A)$ defines a normalized framed chain isomorphism. Thus the residual group is $U(k,A)$ and coefficient extraction is independent of the normalized basis on isomorphism classes. [F6, step 3.1, step 5.2, step 2.2, algebra]

7.1 For any such raw datum and finite $z$, write $a_z=(B_1-z_1,B_2-z_2,J)^T$ and $b_z^\dagger=(-B_2+z_2,B_1-z_1,I)$. The two moment equations give $b_z^\dagger a_z=0$ and $a_z^\dagger a_z=b_z^\dagger b_z=:f_z$. Regularity makes both maps full rank, so $f_z$ is positive definite. On $\ell_z$ the monad is $\alpha=a_z\lambda_1+b_z\lambda_2$ and $\beta=b_z^\dagger\lambda_1-a_z^\dagger\lambda_2$. The cross Gram terms vanish, and $a_z,b_z$ identify two orthogonal copies of $V$ after applying $f_z^{-1/2}$. In these orthonormal coordinates the end maps on the first two copies are $(\lambda_1,\lambda_2)^T$ and $(-\lambda_2,\lambda_1)$, the Euler complex $V\mathcal O(-1)\to(V\oplus V)\mathcal O\to V\mathcal O(1)$; the complementary term is $E_z\mathcal O$. Hence $H^0(F|_{\ell_z})=E_z$ with its positive induced form, and $F|_{\ell_z}$ is trivial. At infinity the same calculation in step 4.1 gives $W\otimes\mathcal O$ and its framing. The maps in step 6.1 are exactly the required locally split end maps. [F5, step 4.1, step 5.1, step 6.1, algebra]

7.2 The zero-level quotient result [F8] applies because step 6.1 established stability and both zero moments; it identifies each regular complex orbit with its unique unitary orbit. The explicit argument in step 5.2 is stronger for the framed real monads: it identifies their actual normalized isomorphisms with $U(V)$ and fixes the inverse extraction orbit. If a constant flat summand is present, [F2] places it in the framed $W_0$ complement and the same fixed-frame argument leaves it unchanged. When $k=0$, every map into or out of $V=0$ is zero and $U(0)$ has one element. Because all coefficient images lie in $M=L^\perp$, $J$ has no component in the framed flat subspace $L\subset W$ and $I$ vanishes on that subspace. Thus flat directions remain as unused directions of $W$. [F2, F4, F8, step 6.1, step 5.2, algebra]

7.3 The coefficient equations in steps 4.2 and 5.1 are polynomial identities, so over $A$ they give the same block form and both moment equations. Conversely, take an $A$-valued zero-moment datum whose reduction is regular. Every full-rank minor of its reduced raw maps lifts to a unit in the local rings of the first-order thickening; thus the end maps are locally split and the cohomology is locally free. On a fixed real line the matrices $a_z,b_z$ have full-rank reductions, so their common Gram $f_z$ is invertible over $A$. Their orthogonal images split off two free copies of $V_A$, leaving a free rank-$N$ complement; the line complex is the Euler complex plus that constant complement, so its sections commute with reduction. The global section and coefficient-image conditions are exactly the additional range conditions imposed in the Statement. The standard middle form induces a nondegenerate real pairing, positive after reduction. Thus such data give families in the stated range. The residual group is $U(k,A)$ by step 6.3. Reduction and each map $\epsilon\mapsto r\epsilon$ commute with coefficient extraction and with the correction $T$. This proves first-order naturality for precisely the stated base changes. [F6, step 4.2, step 5.1, step 6.3, algebra]

8.1 The finite monad resolution and its locally free cohomology give the algebraic Chern character and Chern classes in [F7]. Its same finite line resolution yields the topological classes after the hyperplane cycle class is identified with the Euler class of the complex normal line. The positive incidence-fiber Thom calculation in [F7] gives $\pi^*u=H_{\rm top}^2$. If the topological bundle is $\pi^*E$, naturality gives $\pi^*c_2(E)=kH_{\rm top}^2=k\pi^*u$; since $\pi^*u$ is a generator, $c_2(E)=ku$. This is conditional on the pullback hypothesis and asserts no Ward correspondence. [F7, step 5.1, algebra] ∎
