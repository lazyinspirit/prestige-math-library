---
id: thm-higher-yoneda-ext-agrees-with-derived-ext
kind: theorem
title: "Higher Yoneda Ext agrees with derived Ext"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-n-fold-yoneda-extension, def-equivalence-of-n-fold-extensions, def-ext-via-a-projective-resolution-of-the-first-variable, def-ext-via-an-injective-resolution-of-the-second-variable, thm-projective-object-characterisations, cor-the-pushout-of-a-monomorphism-is-a-monomorphism, thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume Dependent Choice. Let $\mathcal A$ be an abelian category with enough projectives and supplied projective resolution data $P$ on all its objects. Assume the relevant classes of extensions form sets. For every $n\geq1$ there is a natural isomorphism
$$\operatorname{YExt}^n(M,N)\cong H^n\operatorname{Hom}(P_\bullet(M),N)=\operatorname{Ext}_P^n(M,N).$$
Dually, with enough injectives and supplied injective data $I$, there is a natural isomorphism $\operatorname{YExt}^n(M,N)\cong\operatorname{Ext}_I^n(M,N)$. Here derived Ext means the indicated one-sided construction; the projective assertion does not require enough injectives, nor the injective assertion enough projectives. The isomorphisms respect Baer addition, defined in every positive degree by direct sum followed by diagonal pullback and codiagonal pushout.

## Facts & Assumptions

**Given:** Objects $M,N$, $n\geq1$, and the stated supplied resolutions and smallness assumptions.

[F1] Extensions and their generated equivalence relation are as in [[def-n-fold-yoneda-extension]] and [[def-equivalence-of-n-fold-extensions]].

[F2] Projective objects lift through epimorphisms ([[thm-projective-object-characterisations]]); pushouts preserve monomorphisms in an abelian category ([[cor-the-pushout-of-a-monomorphism-is-a-monomorphism]]).

[F3] Comparison maps between projective resolutions exist and are homotopy-unique under DC ([[thm-projective-comparison-map-exists]], [[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

[F4] The two one-sided Ext constructions are the indicated Hom cohomologies ([[def-ext-via-a-projective-resolution-of-the-first-variable]], [[def-ext-via-an-injective-resolution-of-the-second-variable]]).

## Proof

**Proof technique:** direct.

1.1 Fix $P_\bullet\to M$ and an extension $E$ with inclusion $i:N\to E_{n-1}$. By [F2], successively lift the augmentation to $u_k:P_k\to E_k$ for $0\leq k<n$, respecting differentials. Exactness makes $u_{n-1}d_n$ factor uniquely as $i c$ for $c:P_n\to N$. Since $i$ is monic and $d_nd_{n+1}=0$, $cd_{n+1}=0$, so $c$ is a cocycle. [F1, F2, given, construct]

1.2 A cocycle $c:P_n\to N$ factors uniquely as $c=f\bar d_n$, where $\bar d_n:P_n\twoheadrightarrow\Omega^nM=\operatorname{im}d_n$; its kernel is $\operatorname{im}d_{n+1}$. Push out $0\to\Omega^nM\xrightarrow{j}P_{n-1}\to\cdots\to P_0\to M\to0$ along $f$. The new first middle object is $E(f)=\operatorname{coker}((f,-j):\Omega^nM\to N\oplus P_{n-1})$. Its inclusion of $N$ is monic by [F2], and its cokernel is the unchanged cokernel of $j$, so this is an exact $n$-extension. [F1, F2, given, construct]

2.1 Two lift systems $u,v$ in step 1.1 have the same terminal cocycle class. Indeed, projectivity and exactness construct homotopy components $h_k:P_k\to E_{k+1}$ through $k=n-2$ satisfying $u_k-v_k=d_Eh_k+h_{k-1}d_P$, with $h_{-1}=0$. At $k=n-1$ the remaining difference factors uniquely through $i$ as $i t$, with $t:P_{n-1}\to N$. Applying $d_n$ then gives $c-c'=t d_n$. For $n=1$ this last factorization is the entire argument. A chain map of extensions fixing endpoints carries one lift system to another with the same cocycle, so the class is constant on the generated equivalence relation. [F1, F2, step 1.1, construct]

2.2 If $c'=c+t d_n$, then $f'=f+t j$. The automorphism $(a,p)\mapsto(a-tp,p)$ of $N\oplus P_{n-1}$ carries the relation $(f,-j)$ to $(f',-j)$, so it induces an isomorphism $E(f)\to E(f')$, identity on both endpoints and on the unchanged tail. This notation denotes a biproduct matrix, and requires no element description of the abelian category. Thus step 1.2 descends from cocycles to cohomology classes. [step 1.2, algebra]

3.1 For an extension and lifts from step 1.1, the map $(i,u_{n-1}):N\oplus P_{n-1}\to E_{n-1}$ kills $(f,-j)$, since $i f=u_{n-1}j$ after canceling the epimorphism $\bar d_n$. It induces a chain map from the pushout extension back to the original, with identity endpoints. Conversely the canonical map $P_{n-1}\to E(f)$, together with the identity maps on the remaining $P_k$, is a lift system for the pushout extension and has terminal cocycle $f\bar d_n=c$. The two constructions are therefore inverse on classes. [F1, step 2.1, step 2.2, algebra]

4.1 A map $N\to N'$ sends $c$ to its postcomposition and sends $E(f)$ to its endpoint pushout. A map $M'\to M$ has a comparison lift $P(M')\to P(M)$ by [F3]; composing the lift system in step 1.1 with it computes the endpoint pullback, with cocycle obtained by precomposition. Homotopic comparison maps induce cochain-homotopic Hom maps by $s^k(\phi)=\phi h_{k-1}$, so these cohomology maps are independent of the comparison. In particular comparisons over identity give resolution independence. This proves both-variable naturality. Direct sums of lift systems give direct sums of cocycles; diagonal pullback followed by codiagonal pushout sends $(c,c')$ to $c+c'$. Hence the bijection respects Baer addition and transports the abelian group laws to extension classes. [F3, step 3.1, algebra]

5.1 By [F4], the target just proved is exactly $\operatorname{Ext}_P^n(M,N)$, without using balanced Ext. Apply the same argument in $\mathcal A^{\mathrm{op}}$: injective coresolutions become projective resolutions, extensions reverse endpoints, and pushouts become pullbacks. Translating back yields the asserted natural identification with $\operatorname{Ext}_I^n(M,N)$ and its addition. [F4, step 4.1, algebra] ∎
