---
id: lem-smith-grid-cohomology-comparison
kind: lemma
title: "Grid cohomology from normalized ramification sections"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps: [def-twistable-galois-module-and-favored-twist-family, def-continuous-cohomology-of-a-profinite-group-with-discrete-module, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-tame-inertia-structure-and-frobenius-action]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the twist-family and local
  tame-inertia interfaces. The finite grid construction uses no stronger choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Definition 4.7 and Proposition 4.8"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§4, Definition 4.7, equations (4.2)–(4.3), and the proof of Proposition 4.8"
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families II, §5.2"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "§5.2, grid cohomology and explicit local conditions"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $F$ be a number field and let $N$ be a twistable module for $R=\mathbb Z_\ell[\xi]$ with $\omega=\xi-1$ and $M=N[\omega]$. Let $V_0$ contain the archimedean places, the places above $\ell$, and the finite places where $N$ is ramified. Let $S$ and $X$ be finite sets. For each $x\in X$ and $s\in S$, choose pairwise distinct finite places $v_s(x)\notin V_0$ and a twist $\chi_x$ unramified outside $V_0\cup\{v_s(x):s\in S\}$. Assume $\chi_x(I_{v_s(x)})$ contains $\xi$. Fix identifications of $M^{\operatorname{Frob}_{v_s(x)}}$ with a single $\mathbb F_\ell$-space $V_s$ as $x$ varies. Let $h_{x,s}:I_{v_s(x)}\to\mathbb F_\ell$ be the nonzero inertia character obtained by writing $\chi_x=\xi^a$ and reducing $a$ modulo $\ell$.

Suppose given homomorphisms $B_{x,s}:V_s\to H^1(G_F,M)$, unramified outside $V_0\cup\{v_s(x)\}$, whose inertia restriction at $v_s(x)$ sends $m$ to $i\mapsto h_{x,s}(i)m$. Write $H^1_{V_0}(F,M)$ for the subgroup unramified at every finite place outside $V_0$, and define $H^1_{V_0,x}(F,M)$ analogously with the selected places added. Then
$$\Psi_x:H^1_{V_0}(F,M)\oplus\bigoplus_{s\in S}V_s\xrightarrow{\sim}H^1_{V_0,x}(F,M),\qquad (\phi_0,(m_s)_s)\longmapsto\phi_0+\sum_sB_{x,s}(m_s)$$
is an isomorphism. The natural identification $N_{\chi_x}[\omega]=M$ transports it to the corresponding twisted cohomology.

At a selected place $v=v_s(x)$, let $\alpha$ be the localization of $\Psi_x(\phi_0,(m_t))$, and let $\delta_{\chi_x}$ be the connecting map from $N_{\chi_x}^{G_v}=M^{G_v}$ for multiplication by $\omega$ on $N_{\chi_x}$. The local zero Selmer condition is equivalent to
$$[\alpha-\delta_{\chi_x}(m_s)](\operatorname{Frob}_v)=0\quad\text{in }M/(\operatorname{Frob}_v-1)M,$$
where the difference is unramified. For $m\in M^{G_v}$, if $\delta$ is the untwisted connecting map associated with $0\to M\to N[\omega^2]\xrightarrow{\omega}M\to0$, then
$$\delta_{\chi_x}(m)=\delta(m)+(\chi_x\bmod\omega)\smile m.$$
The assertion is conditional on the displayed section maps; it does not assert their existence or independence under matching grid symbols.

## Statement references

[[def-twistable-galois-module-and-favored-twist-family]]

[[thm-tame-inertia-structure-and-frobenius-action]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Definition 4.7 and Proposition 4.8](https://arxiv.org/pdf/2207.05674)

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families II*, §5.2](https://arxiv.org/pdf/2207.05143)

## Facts & Assumptions

**Given:** The field, twistable module, finite grid, selected places, twists, and normalized section maps in the Statement.

[F1] The twist and local Selmer conventions, including the natural identification of $\omega$-torsion, are those in the twist-family definition. [[def-twistable-galois-module-and-favored-twist-family]]

[F2] At a finite place of residue characteristic different from $\ell$, tame inertia has pro-$\ell$ quotient $\mathbb Z_\ell(1)$ and Frobenius acts on it by the residue-field cardinality. [[thm-tame-inertia-structure-and-frobenius-action]]

[F3] Continuous cohomology uses the cochain and long-exact-sequence conventions in the stated definition. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Proof

1.1 Fix $x$ and $s$, and put $v=v_s(x)$. The original action on $N$ and $M$ is inertia-trivial at $v$. Since $M$ is an $\mathbb F_\ell$-space and the residue characteristic is not $\ell$, every continuous homomorphism $I_v\to M$ kills the pro-residue-characteristic wild inertia; [F2] identifies the remaining pro-$\ell$ inertia with $\mathbb Z_\ell(1)$. Frobenius invariance of the nonzero $h_{x,s}$ forces $\#\kappa(v)\equiv1\pmod\ell$. Thus every Frobenius-invariant inertia homomorphism has the unique form $i\mapsto h_{x,s}(i)m$ with $m\in M^{\operatorname{Frob}_v}=V_s$. [F2, given, algebra]

2.1 For a global class in $H^1_{V_0,x}(F,M)$, step 1.1 gives one parameter $m_s\in V_s$ at each selected place. Subtracting $\sum_sB_{x,s}(m_s)$ kills every selected inertia restriction by the normalization in the Statement and does not introduce ramification elsewhere. The remainder lies in $H^1_{V_0}(F,M)$, proving surjectivity of $\Psi_x$. Conversely, if $\Psi_x(\phi_0,(m_s))=0$, restriction to each selected inertia group gives $m_s=0$, after which $\phi_0=0$. Thus $\Psi_x$ is an isomorphism. The twist acts trivially modulo $\omega$, so [F1] identifies $N_{\chi_x}[\omega]$ with $M$. [F1, F3, step 1.1, given, algebra]

2.2 At a selected place, the image of inertia under $\chi_x$ contains $\xi$ while the original inertia action on $N$ is trivial. Hence the twisted inertia invariants are exactly $M$, and the full local invariants are $M^{G_v}=V_s$. The exact sequence $0\to M\to N_{\chi_x}\xrightarrow{\omega}N_{\chi_x}\to0$ is surjective on the right: a unit times a power of $\omega$ is $\ell$, which acts surjectively on the divisible module $N$. Its long exact cohomology sequence therefore identifies the kernel of $H^1(G_v,M)\to H^1(G_v,N_{\chi_x})$ with the image of $\delta_{\chi_x}:V_s\to H^1(G_v,M)$. [F1, F3, step 1.1, given, algebra]

3.1 For $m\in V_s$, choose $z\in N[\omega^2]$ with $\omega z=m$. If $\chi_x(g)=\xi^{a(g)}$, the twisted boundary is represented by $g\mapsto\xi^{a(g)}gz-z$. Since $\xi^{a(g)}\equiv1+a(g)\omega\pmod{\omega^2}$ and $g(m)=m$, this cocycle is the sum of the untwisted boundary and $g\mapsto(a(g)\bmod\ell)m$. This proves the displayed cup-product identity. [F1, F3, step 2.2, construct, algebra]

4.1 The localization $\alpha$ of $\Psi_x(\phi_0,(m_t))$ has inertia restriction $h_{x,s}m_s$. The untwisted boundary has zero inertia restriction because $N$ is inertia-trivial, while step 3.1 shows that $\delta_{\chi_x}(m_s)$ has the same inertia restriction as $\alpha$. Their difference is therefore unramified. An unramified cocycle factors through the procyclic residue Galois group and is zero in cohomology exactly when its Frobenius value lies in $(\operatorname{Frob}_v-1)M$. By step 2.2, this is precisely the selected-place zero Selmer condition. The other local conditions remain those stipulated at $V_0$ and the automatic unramified conditions elsewhere. [F1, F3, step 2.1, step 2.2, step 3.1, algebra] ∎
