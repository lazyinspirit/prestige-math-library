---
id: thm-serre-duality-curves-coherent-sheaves
kind: theorem
title: "Serre duality for coherent sheaves on a smooth proper curve, Ext form"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - cor-projective-embedding-every-smooth-proper-curve
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-canonical-line-bundle-curve
  - def-coherent-module-scheme
  - def-dimension-noetherian-topological-space
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-module-on-ringed-space
  - def-projective-morphism-pre-proj
  - def-proper-morphism
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-ext-for-coherent-modules
  - def-sheaf-hom
  - def-sheaf-tensor-product
  - def-very-ample-invertible-sheaf-relative
  - lem-field-is-noetherian
  - lem-eventual-global-generation-coherent-twists
  - lem-global-sheaf-ext-long-exact-in-first-variable
  - lem-injective-modules-flasque-and-ext-of-structure-sheaf
  - lem-smooth-curve-coherent-torsion-free-locally-free
  - lem-very-ample-implies-ample
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-cohomological-dimension-noetherian-scheme
  - thm-exactness-of-sheaves-stalkwise
  - thm-five-lemma-for-modules
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-serre-duality-curves-vector-bundles
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the duality and
coherent-cohomology suppliers. Let $C$ be a smooth proper geometrically
integral curve over an arbitrary field $k$ and let $\mathcal F$ be a coherent
$\mathcal O_C$-module. Then there are canonical $k$-linear isomorphisms
$$\operatorname{Hom}_{\mathcal O_C}(\mathcal F,\omega_C)\cong H^1(C,\mathcal F)^\ast,\qquad \operatorname{Ext}^1_{\mathcal O_C}(\mathcal F,\omega_C)\cong H^0(C,\mathcal F)^\ast,$$
both functorial in $\mathcal F$, where $\operatorname{Ext}$ is the global
sheaf Ext of [[def-sheaf-ext-for-coherent-modules]]. In particular
$h^1(C,\mathcal F)=\dim_k\operatorname{Hom}_{\mathcal O_C}(\mathcal F,\omega_C)$
for every coherent $\mathcal F$, and for $\mathcal F$ finite locally free the
first isomorphism is the vector-bundle duality of
[[thm-serre-duality-curves-vector-bundles]].

## Facts & Assumptions

**Given:** AC, a field $k$, a smooth proper geometrically integral curve $C/k$, and a coherent $\mathcal O_C$-module $\mathcal F$.

[F1] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]). It is inherited by the injective-resolution, coherent-cohomology, and duality suppliers below.

[F2] A curve over $k$ is separated, of finite type, and has underlying chain dimension one; properness is an additional hypothesis ([[def-algebraic-curve-over-field]], [[def-proper-morphism]]). A field is Noetherian ([[lem-field-is-noetherian]]), so finite-type affine charts of $C$ have Noetherian coordinate rings ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). Properness makes $C$ quasi-compact. Thus $C$ is a Noetherian scheme and its underlying topological space is Noetherian: take a finite affine cover by Noetherian spectra and restrict any ascending chain of opens to each member. Its dimension is one by the curve definition ([[def-locally-noetherian-and-noetherian-scheme]], [[thm-noetherian-ring-has-noetherian-spectrum]], [[def-dimension-noetherian-topological-space]]).

[F3] The canonical sheaf $\omega_C=\Omega^1_{C/k}$ is an invertible $\mathcal O_C$-module ([[def-canonical-line-bundle-curve]], [[def-invertible-sheaf]]).

[F4] On a smooth curve, a coherent subsheaf of a finite locally free sheaf is torsion-free, and every coherent torsion-free sheaf is finite locally free ([[lem-smooth-curve-coherent-torsion-free-locally-free]]).

[F5] On a locally Noetherian scheme, coherent modules are closed under kernels; finite locally free modules are coherent; and tensoring a coherent module by an invertible sheaf preserves coherence ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]]).

[F6] If $C$ is projective over the Noetherian ring $k$, $L$ is ample and $\mathcal G$ is coherent, then $\mathcal G\otimes L^{\otimes m}$ is globally generated for all sufficiently large $m$ ([[lem-eventual-global-generation-coherent-twists]]). A globally generated sheaf has surjective evaluation from all its global sections ([[def-globally-generated-sheaf]]).

[F7] For a proper scheme over a field and a coherent sheaf, every $H^q$ is finite-dimensional ([[cor-projective-cohomology-finite-dimensional-field]]).

[F8] If a separated Noetherian scheme has Noetherian underlying space of dimension at most $d$, then its quasi-coherent sheaves have $H^q=0$ for $q>d$ ([[thm-cohomological-dimension-noetherian-scheme]]). The hypotheses hold for $C$ by [F2].

[F9] Sheaf cohomology $H^q(C,-)$ is the right-derived functor of global sections on the underlying abelian sheaf ([[def-sheaf-cohomology-derived-global-sections]], [[def-module-on-ringed-space]]). A short exact sequence of sheaves of abelian groups has its natural long exact sequence in sheaf cohomology ([[thm-long-exact-sequence-sheaf-cohomology]]). Exactness of a sequence of module sheaves is stalkwise, so forgetting the module structures preserves a short exact sequence ([[thm-exactness-of-sheaves-stalkwise]]).

[F10] Global $\operatorname{Ext}^q_{\mathcal O_C}(\mathcal A,\mathcal G)$ is computed from $\operatorname{Hom}_{\mathcal O_C}(\mathcal A,I^\bullet)$ for an $\mathcal O_C$-injective resolution $\mathcal G\to I^\bullet$ ([[def-sheaf-ext-for-coherent-modules]]). It has the natural long exact sequence in the first variable, beginning with $0\to\operatorname{Hom}(\mathcal F'',\mathcal G)\to\operatorname{Hom}(\mathcal F,\mathcal G)\to\operatorname{Hom}(\mathcal F',\mathcal G)\to\operatorname{Ext}^1(\mathcal F'',\mathcal G)$ for $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ ([[lem-global-sheaf-ext-long-exact-in-first-variable]]).

[F11] For every $\mathcal O_C$-module $\mathcal G$, the canonical comparison $\operatorname{Ext}^q_{\mathcal O_C}(\mathcal O_C,\mathcal G)\cong H^q(C,\mathcal G)$ is natural, and $\mathcal O_C$-injective modules are flasque as underlying abelian sheaves ([[lem-injective-modules-flasque-and-ext-of-structure-sheaf]]). In particular, an $\mathcal O_C$-injective resolution is an acyclic resolution for computing the cohomology of its underlying sheaf.

[F12] Finite locally free sheaves have the natural tensor-Hom identifications $\mathcal Hom(\mathcal E,\mathcal G)=\mathcal E^\vee\otimes\mathcal G$ and $\operatorname{Hom}(\mathcal E,\mathcal I)=\Gamma(C,\mathcal E^\vee\otimes\mathcal I)$; tensoring by $\mathcal E$ or $\mathcal E^\vee$ is exact. These identities follow locally from a finite free basis and are natural in the sheaves ([[def-locally-free-sheaf-finite-rank]], [[def-sheaf-hom]], [[def-sheaf-tensor-product]]).

[F13] For a finite locally free $\mathcal E$, vector-bundle Serre duality gives the perfect pairing $H^1(C,\mathcal E)\times H^0(C,\mathcal E^\vee\otimes\omega_C)\to k$ by contraction and the fixed normalized trace $t_C:H^1(C,\omega_C)\to k$ ([[thm-serre-duality-curves-vector-bundles]]).

[F14] In a commutative diagram of modules with exact rows, the middle vertical map is an isomorphism if the other four vertical maps are isomorphisms ([[thm-five-lemma-for-modules]]).

## Proof

**Proof technique:** construct both trace pairings first, resolve the coherent sheaf by two finite locally free sheaves, use a kernel comparison for the first pairing and the five lemma for the second.

1.1 By [F2], $C$ is a separated Noetherian scheme with Noetherian underlying space of dimension one. Hence [F8] gives $H^q(C,\mathcal G)=0$ for every quasi-coherent $\mathcal G$ and every $q>1$; the sheaves used below are coherent or finite locally free, hence quasi-coherent. The sheaf $\omega_C$ is invertible by [F3]. [F2, F3, F8]

1.2 The projective-embedding corollary gives a closed immersion $i:C\hookrightarrow\mathbf P^N_k$ ([[cor-projective-embedding-every-smooth-proper-curve]]). Put $L=i^\ast\mathcal O_{\mathbf P^N_k}(1)$. This is very ample by the relative definition and therefore ample by [[lem-very-ample-implies-ample]]. The closed immersion makes $C$ projective over $k$ by [[def-projective-morphism-pre-proj]], in the convention of the global-generation lemma. [F2, F6, construct]

1.3 For any $\mathcal O_C$-module $\mathcal G$, fix an injective resolution $\mathcal G\to I^\bullet$. By [F11], $\operatorname{Ext}^q(\mathcal O_C,\mathcal G)\cong H^q(C,\mathcal G)$ naturally. For finite locally free $\mathcal E$, $\mathcal E^\vee\otimes I^\bullet$ is an injective resolution of $\mathcal E^\vee\otimes\mathcal G$: exactness follows from [F12], and $\mathcal E^\vee\otimes-$ is right adjoint to the exact functor $\mathcal E\otimes-$, so it preserves injectives. Termwise $\Gamma(C,\mathcal E^\vee\otimes I^\bullet)=\operatorname{Hom}(\mathcal E,I^\bullet)$; its terms are flasque by [F11], so it computes cohomology. Thus $\operatorname{Ext}^q(\mathcal E,\mathcal G)\cong H^q(C,\mathcal E^\vee\otimes\mathcal G)$ naturally, from global Ext itself and not global sections of sheaf Ext. [F10, F11, F12]

1.4 Write $t_C:H^1(C,\omega_C)\to k$ for the same fixed normalized trace as in [F13]. Define $\Phi_F:\operatorname{Hom}(F,\omega_C)\to H^1(F)^\ast$ by $\Phi_F(\alpha)(u)=t_C(H^1(\alpha)(u))$. By [F11], this is the Yoneda pairing of $\operatorname{Ext}^1(\mathcal O_C,F)\cong H^1(F)$ with $\alpha$, followed by the fixed trace; it is canonical and natural contravariantly in $F$. For finite locally free $\mathcal E$, $\operatorname{Hom}(\mathcal E,\omega_C)=H^0(\mathcal E^\vee\otimes\omega_C)$ by [F12], so [F13] makes $\Phi_E$ an isomorphism. [F11, F12, F13]

1.5 Define $\Psi_F:\operatorname{Ext}^1(F,\omega_C)\to H^0(F)^\ast$ by $\Psi_F(\xi)(s)=t_C(\chi_{\omega_C}(\operatorname{Ext}^1(s,\omega_C)(\xi)))$, where $s:\mathcal O_C\to F$ is the global section and $\chi_{\omega_C}:\operatorname{Ext}^1(\mathcal O_C,\omega_C)\to H^1(C,\omega_C)$ is [F11]. This is the Yoneda pairing followed by the fixed trace, and is canonical and natural contravariantly in $F$. [F10, F11]

2.1 Choose $n\ge0$ so that $\mathcal F(n):=\mathcal F\otimes L^{\otimes n}$ is globally generated, using [F6]. This twist is coherent. By [F7], $H^0(C,\mathcal F(n))$ is finite-dimensional over $k$; choose a finite $k$-basis $s_1,\dots,s_N$. [F5, F6, F7, step 1.2]

2.2 For finite locally free $\mathcal E$, step 1.3 identifies $\operatorname{Ext}^1(E,\omega_C)$ with $H^1(E^\vee\otimes\omega_C)$; pullback along $s:\mathcal O_C\to E$ is induced by contraction $E^\vee\otimes\omega_C\to\omega_C$. The vector-bundle pairing [F13] for $E^\vee\otimes\omega_C$, whose dual bundle tensored with $\omega_C$ is canonically $E$, is exactly $\Psi_E$. Hence $\Psi_E$ and $\Psi_{E'}$ are isomorphisms. [F12, F13, step 1.3, step 1.5]

3.1 The evaluation map from all global sections is surjective by [F6]. Every global section is a $k$-linear combination of the $s_i$, with $k$ acting through $\mathcal O_C$; hence at each stalk the values of the $s_i$ generate $\mathcal F(n)$ over $\mathcal O_C$. Thus $\mathcal O_C^{\oplus N}\twoheadrightarrow\mathcal F(n)$, and after twisting by $L^{-n}$ there is a surjection $p:\mathcal E:=(L^{-n})^{\oplus N}\twoheadrightarrow\mathcal F$ with $\mathcal E$ finite locally free. [F6, step 2.1]

4.1 Let $\mathcal E':=\ker p$. It is coherent by [F5], and as a subsheaf of $\mathcal E$ it is torsion-free; [F4] makes it finite locally free. We obtain a two-term finite locally free resolution for every coherent $\mathcal F$, including torsion sheaves: [F4, F5, step 3.1]
$$0\longrightarrow\mathcal E'\xrightarrow{\jmath}\mathcal E\xrightarrow{p}\mathcal F\longrightarrow0.$$

5.1 By [F9] and [F8], this short exact sequence gives the cohomology sequence below; it is exact at the final term because $H^2(C,\mathcal E')=0$. Every term is finite-dimensional by [F7]: [F7, F8, F9, step 4.1]
$$0\to H^0(E')\to H^0(E)\to H^0(F)\xrightarrow{\delta_H}H^1(E')\to H^1(E)\to H^1(F)\to0,$$
where $H^q(G)$ abbreviates $H^q(C,\mathcal G)$.

5.2 With $\mathcal G=\omega_C$, the exact first-variable Ext sequence supplied by [F10] is $0\to\operatorname{Hom}(F,\omega_C)\to\operatorname{Hom}(E,\omega_C)\to\operatorname{Hom}(E',\omega_C)\xrightarrow{\delta_{\rm Ext}}\operatorname{Ext}^1(F,\omega_C)\to\operatorname{Ext}^1(E,\omega_C)\to\operatorname{Ext}^1(E',\omega_C)$. [F10, step 4.1]

6.1 Dualizing the finite-dimensional cohomology tail $H^1(E')\to H^1(E)\to H^1(F)\to0$ gives $0\to H^1(F)^\ast\to H^1(E)^\ast\to H^1(E')^\ast$. The Ext sequence in 5.2 identifies $\operatorname{Hom}(F,\omega_C)$ with the kernel of $\operatorname{Hom}(E,\omega_C)\to\operatorname{Hom}(E',\omega_C)$. Naturality of $\Phi$ for both $p:E\to F$ and $\jmath:E'\to E$ identifies this kernel map with the dual cohomology kernel map; since $\Phi_E$ and $\Phi_{E'}$ are isomorphisms by step 1.4, the induced map on kernels, precisely $\Phi_F$, is an isomorphism. [F7, F10, step 1.4, step 5.1, step 5.2]

6.2 Dualizing the cohomology sequence of 5.1 gives the exact row $H^1(E)^\ast\to H^1(E')^\ast\to H^0(F)^\ast\to H^0(E)^\ast\to H^0(E')^\ast$. Together with 5.2 the five-lemma diagram is the following; its vertical maps, in order, are $\Phi_E,\Phi_{E'},\Psi_F,\Psi_E,\Psi_{E'}$: [F7, F10, step 1.4, step 1.5, step 2.2, step 5.1, step 5.2]
$$\begin{array}{ccccccccc}\operatorname{Hom}(E,\omega_C)&\to&\operatorname{Hom}(E',\omega_C)&\to&\operatorname{Ext}^1(F,\omega_C)&\to&\operatorname{Ext}^1(E,\omega_C)&\to&\operatorname{Ext}^1(E',\omega_C)\\\downarrow\Phi_E&&\downarrow\Phi_{E'}&&\downarrow\Psi_F&&\downarrow\Psi_E&&\downarrow\Psi_{E'}\\H^1(E)^\ast&\to&H^1(E')^\ast&\to&H^0(F)^\ast&\to&H^0(E)^\ast&\to&H^0(E')^\ast.\end{array}$$
The square over $\operatorname{Hom}(E)\to\operatorname{Hom}(E')$ commutes by naturality of $\Phi$, and the squares over $\operatorname{Ext}^1(F)\to\operatorname{Ext}^1(E)\to\operatorname{Ext}^1(E')$ commute by naturality of $\Psi$. [F10, step 1.4, step 1.5]

6.3 Let $\alpha:E'\to\omega_C$ and $s:\mathcal O_C\to F$. In the injective resolution $\omega_C\to I^\bullet$, extend $j\alpha:E'\to I^0$ to $\widetilde\alpha:E\to I^0$, with $j:\omega_C\to I^0$ the coaugmentation. The connecting class $\delta_{\rm Ext}(\alpha)$ is represented by $d^0\widetilde\alpha:E\to I^1$, which vanishes on $E'$ and factors as $c\circ p$ for a cocycle $c:F\to I^1$. The pushout $P=(\omega_C\oplus E)/\{(\alpha(e'),-\jmath(e')):e'\in E'\}$ maps to $Q_c:=\{(x,z)\in F\oplus I^0:c(x)=d^0z\}$ by $[w,e]\mapsto(p(e),j(w)+\widetilde\alpha(e))$; this is well-defined and induces the identity on kernel $\omega_C$ and quotient $F$, so its Yoneda class is the cocycle class $\delta_{\rm Ext}(\alpha)$ with positive sign. Precomposition by $s$ sends $c$ to $c\circ s$, the cocycle of the pullback extension. Under [F11], this Yoneda class maps to the cohomology boundary of $1$: for an extension $0\to G\to P_s\to\mathcal O_C\to0$, extend $G\to I^0$ to $b:P_s\to I^0$; $d^0b$ factors through $\mathcal O_C$ and represents both the injective-resolution Ext class and, since $I^\bullet$ is flasque, the cohomology boundary. Thus the comparison introduces no sign. Naturality of the cohomology long exact sequence for the pushout diagram gives $\chi_{\omega_C}(\operatorname{Ext}^1(s,\omega_C)(\delta_{\rm Ext}(\alpha)))=H^1(\alpha)(\delta_H(s))$. Equivalently, local lifts $e_i$ of $s(1)$ give differences $e_j-e_i$; in $P$ these become $[0,e_j-e_i]=[\alpha(e_j-e_i),0]$, again with positive sign. Applying $t_C$ verifies the middle square. [F9, F10, F11, step 1.3, step 5.2]

7.1 By [F14], the five lemma applies to the exact rows in 6.2: the outer vertical maps are isomorphisms by steps 1.4 and 2.2, while the explicitly defined middle map is $\Psi_F$. Thus $\Psi_F$ is an isomorphism. No vanishing of $\operatorname{Ext}^2(F,\omega_C)$ is needed. [F10, F14, step 1.4, step 2.2, step 6.2, step 6.3]

8.1 Both maps are composition with the fixed normalized trace and are independent of the chosen resolution, which is used only to establish bijectivity. The first isomorphism gives the stated dimension identity, and for finite locally free $F$ it is vector-bundle duality by its defining pairing. The field is arbitrary; no perfectness or extra qualifier is introduced. [F1, F11, F13, step 1.4, step 6.1, step 7.1] ∎
