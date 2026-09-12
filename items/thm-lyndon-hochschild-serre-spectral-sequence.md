---
id: "thm-lyndon-hochschild-serre-spectral-sequence"
kind: "theorem"
title: "Lyndon-Hochschild-Serre spectral sequence"
deps: ["thm-grothendieck-spectral-sequence", "lem-invariants-for-a-group-extension-compose", "lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules", "def-group-cohomology-as-a-derived-functor", "def-dependent-choice", "lem-restriction-of-injective-group-modules-is-injective", "prop-the-invariants-functor-is-left-exact", "lem-cartan-eilenberg-comparisons-preserve-both-filtrations", "def-injective-object"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Theorem 6.8.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Sharifi, Hochschild-Serre spectral sequence"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
landmark: true
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Assume DC and supplied resolution data. For an extension $1\to N\to G\to Q\to1$ and a left $G$-module $M$ there is a natural strongly convergent spectral sequence
$$E_2^{p,q}=H^p(Q,H^q(N,M))\Longrightarrow H^{p+q}(G,M),\qquad d_r:(p,q)\mapsto(p+r,q-r+1).$$
Here the $Q$-module $H^q(N,M)$ is computed by $(I^\bullet)^N$ for a supplied $G$-injective resolution $M\to I^\bullet$, with the induced quotient action. This action and the sequence are independent of comparisons from $E_2$ onward. The abutment has a finite decreasing filtration, $F^0H^n=H^n$, $F^{n+1}H^n=0$, with graded pieces $E_\infty^{p,n-p}$. With all replacements, comparisons and homotopies supplied, the corresponding relative cohomology statement is valid in ZF. Naturality includes maps of extensions $\phi:(N,G,Q)\to(N',G',Q')$ and coefficient maps $u:\operatorname{Res}_{\phi}M'\to M$: these induce a spectral-sequence map from the primed sequence to the unprimed sequence, with the usual restriction/coefficient maps on $E_2$ and on the target.

## Facts & Assumptions

**Given:** The extension, module and data/choice convention above.

[F1] The two invariants functors compose to $G$-invariants, with a well-defined quotient action ([[lem-invariants-for-a-group-extension-compose]]).

[F2] Invariants are left exact, and $N$-invariants carry injective $G$-modules to injective, hence acyclic, $Q$-modules ([[prop-the-invariants-functor-is-left-exact]], [[lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules]]).

[F3] Restriction of a $G$-injective resolution is an $N$-injective resolution ([[lem-restriction-of-injective-group-modules-is-injective]]).

[F4] Group cohomology is the cohomology of invariants of the supplied injective resolution, with DC for its resolution-independent interface ([[def-group-cohomology-as-a-derived-functor]]).

[F5] The Grothendieck theorem constructs the natural finite-filtered sequence of a composite with the injective-image acyclicity property ([[thm-grothendieck-spectral-sequence]]).

[F6] An admissibly exact source has a Cartan–Eilenberg comparison into an injective target, unique up to vertical homotopy; source injectivity is not required ([[lem-cartan-eilenberg-comparisons-preserve-both-filtrations]]).

[F7] Maps into an injective object extend across a monomorphism ([[def-injective-object]]).

## Proof

1.1 Put $F=(-)^N:G\text{-}\mathrm{Mod}\to Q\text{-}\mathrm{Mod}$ and $T=(-)^Q:Q\text{-}\mathrm{Mod}\to\mathbf{Ab}$. By F1, $TF=(-)^G$. F2 proves both functors additive and left exact and verifies the required injective-image acyclicity. These are exactly the Grothendieck hypotheses; no exactness of $N$-invariants is asserted. The supplied resolution systems give the needed injective models in these module categories. [F1, F2]

1.2 For the supplied $M\to I$, F3 says its restriction resolves $M$ by $N$-injectives. Thus $R^qF(M)=H^q(I^N)$ has underlying abelian group $H^q(N,M)$ by F4. Its $Q$-action is the one induced termwise from F1. A $G$-linear resolution comparison and its homotopy restrict to $Q$-linear maps and homotopies on $N$-invariants. They therefore give the same cohomology map, proving this $Q$-module identification is canonical under the declared data convention. Similarly $R^pT(V)=H^p(Q,V)$ and $R^n(TF)(M)=H^n(G,M)$. [F1, F3, F4]

1.3 For a map of extensions as stated, write $U:G'\text{-}\mathrm{Mod}\to G\text{-}\mathrm{Mod}$ and $V:Q'\text{-}\mathrm{Mod}\to Q\text{-}\mathrm{Mod}$ for restriction of actions. These are exact because underlying groups and maps do not change. There are natural maps $V((-)^{N'})\to(U(-))^N$ and $(-)^{Q'}\to(V(-))^Q$, given by inclusion of fixed subgroups: being fixed by all elements of the primed group implies being fixed by their images from the unprimed group. These maps are compatible with the composite inclusion of $G'$-fixed into $G$-fixed elements. [F1]

2.1 Apply F5 and substitute step 1.2. It gives the displayed page, differential, filtration endpoints and associated graded identification. In particular degree zero is $H^0(G,M)=M^G=(M^N)^Q$; all indices are nonnegative, and below total degree zero the target vanishes. Naturality is the comparison naturality of F5 and step 1.2. For $M=0$ the zero models give zero throughout. If $N=1$ or $Q=1$, invariants for the trivial group are the identity exact functor, whose applied resolution is exact in positive degrees; consequently the sequence has only one row or column and reconstructs the remaining group's cohomology. DC is confined to obtaining the countable replacement/comparison choices and the F4 notation. Supplied data give the same construction without that assumption. [F1, F4, F5, step 1.1, step 1.2]

2.2 Let $M'\to I'$ and $M\to I$ be injective resolutions. Although $UI'$ need not be injective, its augmentation is exact. The map $UM'\xrightarrow{u}M\to I^0$ extends across $UM'\hookrightarrow UI'^0$ by F7. Its differential vanishes on the augmentation image, so it descends to the next image submodule and extends into $I^1$. Repeating gives a map $a:UI'\to I$ over $u$. For two lifts, their difference kills the augmentation; factoring through the next image and extending constructs a homotopy recursively, exactly by the same difference-minus-previous-homotopy calculation. These are countably many extensions in fixed Hom sets, supplied or chosen by DC. Hence the resulting cohomology restriction/coefficient map is canonical without assuming $U$ preserves injectives. [F7, step 1.3]

3.1 For CE resolutions $F'I'\to J'$ and $FI\to J$, the composite $VF'I'\to FUI'\xrightarrow{F(a)}FI$ is a cochain map. Exactness of $V$ preserves kernels, images and quotients, so $VJ'$ is an augmented source exact on terms, horizontal boundaries, cycles and cohomology. F6 lifts that map to $VJ'\to J$. Compose $(J')^{Q'}\to(VJ')^Q\to J^Q$. It preserves resolution degree and therefore defines a map of the LHS sequences. On $E_2$ it is $H^p(Q',H^q(N',M'))\to H^p(Q,H^q(N,M))$, computed by the same inclusion-of-invariants and resolution comparisons just constructed. On the target the commuting augmentation square identifies it with $H^n(G',M')\to H^n(G,M)$. These descriptions also define the usual derived restriction/coefficient maps for noninjective pullbacks: an exact augmented pullback resolution maps into the chosen injective resolution by step 2.2. [F1, F4, F5, F6, step 1.3, step 2.2]

4.1 Different choices of $a$ are homotopic and give the same map on $H^q(N,-)$. Different CE lifts give the same $E_2$ and target maps by F6. Equality on later pages follows by taking page homology. Identity and composite extension maps yield the same $E_2$ maps as the identity and composites of these constructions; their target maps agree by the resolution homotopies of step 2.2 and the augmentation square. Thus this is natural for extension and coefficient maps, in addition to fixed-extension module maps. The trivial extension maps and zero coefficient maps are included; no global family of choices is asserted. [F4, F5, F6, step 2.2, step 3.1] ∎
