---
id: lem-fundamental-path-fibration-class-has-the-normalized-relative-lift
kind: lemma
title: "The fundamental path-fibration class has the normalized relative lift"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-mapping-path-factorization
  - cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient
  - thm-cellular-homology-computes-singular-homology
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - def-hurewicz-homomorphism
  - thm-absolute-hurewicz-theorem
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - def-axiom-of-choice
  - lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "Proof of Theorem 1.32, printed p. 55: the fundamental path-fibration transgression. Generator and UCT normalizations are proved locally using absolute Hurewicz and the pair long exact sequences."
verification:
  precheck: pass
---

## Statement

Assume AC. For $n\ge1$, in the marked path fibration $F=\Omega K_{n+1}\to P K_{n+1}\xrightarrow p K_{n+1}$, with the fiber identified in marked homology and cohomology with $K_n$ by the weak equivalence of the path-loop input lemma,

$$\delta\iota_n=p^*\iota_{n+1} \quad\text{in }H^{n+1}(P K_{n+1},F;\mathbb F_2).$$

## Facts & Assumptions

**Given:** AC; an integer $n\ge1$; the marked path fibration $F=\Omega K_{n+1}\to PK_{n+1}\xrightarrow p K_{n+1}$ with contractible total space, the strict fiber identified in marked homology and cohomology with $K_n$ by the weak equivalence of [[lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs]]; and the marked fundamental classes $\iota_n,\iota_{n+1}$.

[F1] The mapping-path factorization gives the actual path fibration with contractible total space and strict loop fiber, and the previous lemma supplies the marked weak equivalence and its mod-two cohomology comparison; the integral homology comparison follows separately from [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]] ([[thm-mapping-path-factorization]], [[lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs]]); the fibration long exact sequence marks the relevant homotopy groups ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F2] The absolute Hurewicz homomorphism and theorem identify the first nonzero homotopy and homology groups, with the degree-one case given by abelianization ([[def-hurewicz-homomorphism]], [[thm-absolute-hurewicz-theorem]]); the homology pair sequence is exact and its boundary computes relative classes of mapped chains ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F3] Relative homology of a good pair is the reduced homology of the quotient, and cellular homology computes singular homology with the characteristic-disk generator comparison ([[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]], [[thm-cellular-homology-computes-singular-homology]]).

[F4] The cohomology pair sequence, the universal coefficient theorem for cohomology, Eilenberg–Mac Lane representability and the Kronecker evaluation pairing with its representative-independence lemma compute the two evaluations ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]], [[thm-eilenberg-maclane-spaces-represent-singular-cohomology]], [[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F5] AC selects the representing sphere map, the triangulation chain, and the CW models ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Put $P=P K_{n+1}$ and $B=K_{n+1}$. Choose a based map $f:S^n\to F$ representing the marked nonzero element of $\pi_n(F)=\mathbb Z/2$. Its absolute Hurewicz image $h_F[f]=f_*[S^n]$ is the nonzero element of $H_n(F;\mathbb Z)$: for $n>1$, use the marked weak equivalence $h:K_n\to F$ of the path-loop input lemma. Absolute Hurewicz is an isomorphism on the CW source $K_n$; the weak-equivalence definition gives an isomorphism on homotopy, and the integral weak-equivalence homology theorem in [F1] gives the isomorphism on integral homology, and Hurewicz naturality therefore makes $h_F$ an isomorphism too. For $n=1$, absolute Hurewicz says abelianization for every path-connected space, and $\pi_1(F)=\mathbb Z/2$ is already abelian. [given, F1, F2]

2.1 Since $P$ is contractible, $f$, considered as a map into $P$, has a nullhomotopy. Cone that nullhomotopy to obtain a continuous map $A:D^{n+1}\to P$ restricting to $f$ on the boundary; identify the disk with the cone on the sphere and choose its boundary orientation accordingly. Let $c_D$ be a finite triangulated integral fundamental chain of the disk, whose boundary $c_S$ is the corresponding fundamental cycle of its sphere. The chain $A_*c_D$ is a relative cycle for $(P,F)$ since its boundary is $f_*c_S$ in $F$. Write $$z=[A_*c_D]\in H_{n+1}(P,F;\mathbb Z).$$ The homology pair-LES computes its boundary directly as $\partial z=[f_*c_S]=h_F[f]$. Because $P$ is contractible and $n\ge1$, that boundary map is an isomorphism $H_{n+1}(P,F;\mathbb Z)\to H_n(F;\mathbb Z)$. Thus $z$ is its nonzero generator. No relative Hurewicz map or theorem has been invoked. [step 1.1, F2, F5]

3.1 The composite $pA$ maps the whole boundary sphere to the marked basepoint. Hence it factors through the collapsed disk, giving $$g:D^{n+1}/\partial D^{n+1}\cong S^{n+1}\longrightarrow B.$$ In the fibration connecting construction, $A$ is a lift of this disk representative and its boundary lift is $f$; therefore the connecting homomorphism sends $[g]$ to $[f]$. It is an isomorphism because the path-space total is contractible. The fiber marking was defined by precisely this connecting isomorphism, so $[g]$ is the marked nonzero base element of $\pi_{n+1}(B)$. [step 2.1, F1]

4.1 On chains, $p_*z$ is the relative class of $(pA)_*c_D$. Collapsing the disk boundary sends its oriented relative fundamental class to the fundamental sphere class. The sphere boundary is a nonempty closed subspace with a radial collar retracting onto it, so `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` identifies relative disk homology with the reduced quotient homology. In the one-top-cell description of $D^{n+1}/\partial D^{n+1}$ the quotient sends the characteristic disk generator to the same top-cell generator; naturality of `thm-cellular-homology-computes-singular-homology` makes this the asserted comparison of actual singular classes. Choose the quotient sphere orientation accordingly. Thus, under $H_{n+1}(B,*;\mathbb Z)\cong H_{n+1}(B;\mathbb Z)$, $$p_*z=g_*[S^{n+1}]=h_B[g].$$ Absolute Hurewicz of the $n$-connected base identifies this with the nonzero generator of $H_{n+1}(B;\mathbb Z)=\mathbb Z/2$, including $n=1$, where the base is simply connected and its first nonzero homotopy degree is two. This is the required generator comparison entirely through the pair-LES and the two **absolute** Hurewicz maps. [step 3.1, F2, F3]

5.1 Check the UCT obstruction exactly in degree $n+1$. For the relative pair it is $$\operatorname{Ext}^1_{\mathbb Z} (H_n(P,F;\mathbb Z),\mathbb F_2).$$ For $n>1$, the homology pair-LES identifies $H_n(P,F)$ with $H_{n-1}(F)$, which is zero by the integral homology comparison with the $(n-1)$-connected CW model $K_n$ obtained by applying the integral weak-equivalence homology theorem in [F1] to its marked weak equivalence. For $n=1$, the relevant LES segment is $$0=H_1(P)\longrightarrow H_1(P,F)\longrightarrow H_0(F)\xrightarrow{\cong}H_0(P),$$ so again $H_1(P,F)=0$. Thus the relative Ext term is zero in every case. The base UCT Ext term is $\operatorname{Ext}^1(H_n(B),\mathbb F_2)=0$, since $H_n(B)=0$ for the $n$-connected base. For the fiber in degree $n$, its Ext term is zero because $H_{n-1}(F)=0$ if $n>1$, while $H_0(F)=\mathbb Z$ is free if $n=1$. The three evaluations are therefore the actual normalized fundamental-class evaluations, with no unidentified Ext summand. [step 4.1, F1, F2, F4]

6.1 Finally compute the two target evaluations. If $u$ represents $\iota_n$ on $F$ and $b$ extends $u$ to $P$, the cohomology pair connector is represented by $db$. Therefore $$\langle\delta\iota_n,z\rangle =(db)(A_*c_D)=b(f_*c_S) =\langle\iota_n,h_F[f]\rangle=1.$$ Naturality of the Kronecker pairing likewise gives $$\langle p^*\iota_{n+1},z\rangle =\langle\iota_{n+1},p_*z\rangle =\langle\iota_{n+1},h_B[g]\rangle=1.$$ The relative UCT, with its now-verified zero Ext term, says evaluation is an isomorphism onto $\operatorname{Hom}(\mathbb Z/2,\mathbb F_2)$. Equality of these evaluations proves the claimed equality of classes. Mod-two coefficients eliminate the possible boundary-orientation sign. [step 5.1, F4] ∎
