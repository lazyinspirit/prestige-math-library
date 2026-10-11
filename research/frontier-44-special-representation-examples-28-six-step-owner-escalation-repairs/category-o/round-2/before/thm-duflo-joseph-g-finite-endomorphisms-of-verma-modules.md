---
id: thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules
kind: theorem
title: Duflo–Joseph g-finite endomorphisms of every Verma module
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank,
       lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain,
       thm-pbw-model-of-a-verma-module,
       thm-universal-property-of-verma-modules,
       lem-a-nonzero-verma-homomorphism-is-injective,
       thm-every-category-o-object-has-finite-length,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       thm-existence-and-uniqueness-of-the-shapovalov-form,
       prop-the-shapovalov-radical-is-the-maximal-submodule,
       lem-standard-costandard-hom-and-ext-vanishing,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       def-axiom-of-choice,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       rem-hopf-algebra-structure-on-the-enveloping-algebra,
       def-verma-module, def-standard-and-costandard-objects-in-category-o,
       prop-casimir-eigenvalue-on-a-highest-weight-module,
       thm-verma-homomorphism-spaces-have-dimension-at-most-one]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, MIT18.757 full lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 18.1, Proposition 18.5 (printed p. 93); Section 18.2, Proposition 18.7 and Corollary 18.8 (printed pp. 94-95). The full PBW-growth, Hopf tensor freeness, simple-Verma restriction and nilcone-domain prerequisites are expanded locally"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra and let $\mu$ be a highest weight. The action of
$U(\mathfrak g)$ on the Verma module $M(\mu)$ induces an algebra isomorphism
$$U(\mathfrak g)/U(\mathfrak g)\ker\chi_\mu\ \xrightarrow{\ \sim\ }\ \bigl(\operatorname{End}_{\mathbb C}M(\mu)\bigr)^{\operatorname{ad}\mathfrak g\text{-finite}},$$
where the target is the locally finite part of the endomorphism algebra for
the adjoint action $x\mapsto[x,-]$. In particular
$\operatorname{Ann}M(\mu)=U(\mathfrak g)\ker\chi_\mu$. Moreover, for every
finite-dimensional $\mathfrak g$-module $E$,
$$\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))=\dim E_0,$$
and the action identifies each finite adjoint isotypic multiplicity with that
dimension.

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a highest weight $\mu$, its central character $\chi_\mu$, and a finite-dimensional $\mathfrak g$-module $E$.

[F1] The PBW model identifies $M(\mu)$ with $U(\mathfrak n^-)$ via $u v_\mu\leftrightarrow u$, with weights $\mu-\beta$ for $\beta\in Q^+$; the structure constants of the action of $\mathfrak n^+$ on the PBW basis are polynomial in $\mu$, and $\dim(M(\mu)_{<\mu})\cap F_nU(\mathfrak n^-)$ grows like $n^N$ with $N=\dim\mathfrak n^-$, while $U(\mathfrak n^-)$ is a domain ([[thm-pbw-model-of-a-verma-module]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

[F2] Every object of $\mathcal O$ has finite length; the simple objects are the $L(\lambda)$; a nonzero homomorphism of Verma modules is injective; and $\operatorname{Hom}_{\mathfrak g}(M(\lambda),M(\mu))\cong\mathbb C$ when nonzero with the universal property determining it ([[thm-every-category-o-object-has-finite-length]], [[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[lem-a-nonzero-verma-homomorphism-is-injective]], [[thm-universal-property-of-verma-modules]], [[thm-verma-homomorphism-spaces-have-dimension-at-most-one]]).

[F3] The Shapovalov form exists and is unique up to a nonzero scalar on each $M(\lambda)$; its radical is the maximal submodule, and in each weight it pairs $U(\mathfrak n^+)_\beta$ with $U(\mathfrak n^-)_{-\beta}$ perfectly after restricting to a simple Verma ([[thm-existence-and-uniqueness-of-the-shapovalov-form]], [[prop-the-shapovalov-radical-is-the-maximal-submodule]]).

[F4] Restricted duality $D$ is an exact contravariant involution with $D\,M(\lambda)=\nabla(\lambda)$ and $D\,L(\lambda)=L(\lambda)$; tensoring a Verma-filtered object by a finite-dimensional module preserves Verma flags with multiplicity $\dim E_\nu$ at $\Delta(\lambda+\nu)$; $\operatorname{Hom}(\Delta(\lambda),\nabla(\lambda'))=0$ unless $\lambda=\lambda'$ and $\operatorname{Ext}^1(\Delta(\lambda),\nabla(\lambda'))=0$ ([[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]], [[lem-standard-costandard-hom-and-ext-vanishing]]).

[F5] $U(\mathfrak g)$ is a cocommutative Hopf algebra with counit and antipode ([[rem-hopf-algebra-structure-on-the-enveloping-algebra]]), so for a left $U(\mathfrak n^-)$-module $N$ the diagonal action makes $E\otimes U(\mathfrak n^-)$ a free $U(\mathfrak n^-)$-module of rank $\dim E$ via the map from the free-action tensor product to the diagonal-action one
$$e\otimes u\longmapsto\sum u_{(1)}e\otimes u_{(2)},$$
with inverse $e\otimes u\mapsto\sum S(u_{(1)})e\otimes u_{(2)}$.
Here $\Delta(u)=\sum u_{(1)}\otimes u_{(2)}$; coassociativity and the
antipode identities verify both composites, and the coproduct verifies
$U(\mathfrak n^-)$-linearity.

[F6] The adjoint isotypic multiplicity lemma: $\operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g))$ is free over $Z(U(\mathfrak g))$ of rank $\dim E_0$, and $U(\mathfrak g)/U(\mathfrak g)\ker\chi$ has associated graded $A=S(\mathfrak g)/(p_1,\dots,p_r)$ for every central character, a reduced integral domain with Hilbert series $\prod_i(1-t^{d_i})/(1-t)^{2N+r}$ and $2N=\dim\mathfrak g-r$ ([[lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank]], [[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]]).

[F7] The quadratic Casimir acts on a cyclic highest-weight module of highest weight $\lambda$ by $(\lambda,\lambda+2\rho)$, for the pairing induced by the Killing form ([[prop-casimir-eigenvalue-on-a-highest-weight-module]], [[thm-verma-homomorphism-spaces-have-dimension-at-most-one]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak g=0$ then $U(\mathfrak g)=\mathbb C$, $M(\mu)=\mathbb C$ and everything is immediate; assume $\mathfrak g\neq0$, so $N=\dim\mathfrak n^->0$. By [F2] the Verma module $M(\mu)$ has finite length, so it contains a simple submodule; by [F2] every simple object is some $L(\eta)$ and the universal map $M(\eta)\to L(\eta)\hookrightarrow M(\mu)$ is injective; hence $M(\mu)$ contains $M(\eta)$ for a highest weight $\eta$. Writing $M(\mu)\cong U(\mathfrak n^-)$ by [F1], the submodule generated by the singular vector $p\,v_\mu$ is $U(\mathfrak n^-)p$: its embedding is right multiplication $u\mapsto up$ by a nonzero element $p\in U(\mathfrak n^-)$. [F1, F2]

1.2 Growth: the PBW filtration of $U(\mathfrak n^-)$ has $\dim F_nU(\mathfrak n^-)$ asymptotic to $n^N/N!$, while the quotient $U(\mathfrak n^-)/U(\mathfrak n^-)p$ has associated graded $S(\mathfrak n^-)/(\bar p)$ for the nonzero leading form $\bar p$ of $p$, so its Hilbert series is of the form $(1-t^d)/(1-t)^N$ and $\dim(U(\mathfrak n^-)/U(\mathfrak n^-)p)_{\le n}=O(n^{N-1})$; the same bound therefore holds for $M(\mu)/M(\eta)$ and, after tensoring by the finite-dimensional $E$, for $E\otimes(M(\mu)/M(\eta))$, because $\dim(E\otimes X)_{\le n}\le(\dim E)\dim X_{\le n}$. [F1, algebra]

1.3 The diagonal $U(\mathfrak n^-)$-action makes $E\otimes M(\mu)$ a free $U(\mathfrak n^-)$-module of rank $\dim E$, by [F5] applied to the identification $M(\mu)\cong U(\mathfrak n^-)$ of [F1]. In particular every nonzero vector $x$ of $E\otimes M(\mu)$ generates a copy $U(\mathfrak n^-)x$ of the domain $U(\mathfrak n^-)$, of growth $n^N$. [F1, F5]

1.4 The Hom space as a kernel: $\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))$ is the space of $\mathfrak n^+$-invariants in the weight-$\mu$ space $(E\otimes M(\mu))_\mu$, i.e. the kernel of the finitely many raising maps $e_i:(E\otimes M(\mu))_\mu\to(E\otimes M(\mu))_{\mu+\alpha_i}$. This weight space has $\mu$-independent dimension $\sum_\nu\dim E_\nu\cdot\dim U(\mathfrak n^-)_{-\nu}$, and the matrices of the raising maps on fixed PBW bases have entries polynomial in $\mu$ by [F1]. [F1, algebra]

1.5 Simple-Verma case: if $M(\mu)=L(\mu)$ is simple, then $D\,M(\mu)=M(\mu)$ by [F4] and $M(\mu)=\nabla(\mu)$, and the tensor-hom adjunction plus [F4] give $$\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))=\dim\operatorname{Hom}_{\mathfrak g}(E^{*}\otimes M(\mu),M(\mu)),$$ which is the multiplicity of $\Delta(\mu)$ in the standard flag of $E^{*}\otimes M(\mu)$, namely $\dim E^{*}_0=\dim E_0$: by [F4] the flag factors are the $\Delta(\mu+\nu)$ with multiplicity $\dim E^{*}_\nu$, and $\operatorname{Hom}(\Delta(\lambda),\nabla(\mu))=\mathbb C\delta_{\lambda\mu}$ while $\operatorname{Ext}^1$ vanishes. [F4, algebra]

2.1 Lower bound for all $\mu$: first the weights of simple Verma modules are Zariski dense. Indeed, if a Verma module has a nonzero proper submodule, choose a nonzero weight vector of minimal positive height $\beta\in Q^+\setminus\{0\}$ in it; every simple-root raising operator kills this vector, whose weight is $\mu-\beta$. The Casimir scalar on its cyclic highest-weight submodule equals that on $M(\mu)$, so [F7] gives $2(\mu+\rho,\beta)=(\beta,\beta)$. On the real root span the pairing is positive definite; this equality is impossible when $(\mu+\rho,\alpha_i)<0$ for every simple root. This nonempty real open chamber therefore consists of simple-Verma weights and is Zariski dense, since a complex polynomial vanishing on a real open set vanishes identically. The polynomial matrix of step 1.4 has a nonempty Zariski-open maximal-rank locus, which meets this dense set. At such an intersection step 1.5 gives kernel dimension $\dim E_0$; rank can only decrease at other weights, so $\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))\ge\dim E_0$ for every $\mu$. [F1, F7, step 1.4, step 1.5, algebra]

2.2 Upper bound: the restriction map $$\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))\longrightarrow\operatorname{Hom}_{\mathfrak g}(M(\eta),E\otimes M(\eta))$$ is injective. First, every $\varphi$ takes $M(\eta)$ into $E\otimes M(\eta)$: otherwise the composition with the projection $E\otimes(M(\mu)/M(\eta))$ would embed the simple $M(\eta)$, a copy of $U(\mathfrak n^-)$ of growth $n^N$ by step 1.1, into the module of growth $O(n^{N-1})$ from step 1.2, impossible. Second, if $\varphi\neq0$ killed $M(\eta)$, it would factor through $M(\mu)/M(\eta)$ and its nonzero image would contain, by step 1.3, a copy of the domain $U(\mathfrak n^-)$ of growth $n^N$, again contradicting step 1.2. [step 1.1, step 1.2, step 1.3]

2.3 Action injectivity setup: let $v$ be the highest vector of the simple Verma $M(\eta)\subseteq M(\mu)$ found in step 1.1 and pair $U(\mathfrak n^+)_\beta$ with $U(\mathfrak n^-)_{-\beta}$ by the Shapovalov form of $M(\eta)$, perfect in each weight by [F3]. For $0\neq x=\sum_\beta x_\beta$ in $U(\mathfrak n^-)\otimes U(\mathfrak n^+)$, choose a minimal $\beta$ with $x_\beta=\sum_i b_i\otimes a_i\neq0$ and a dual PBW vector $a_j^{*}\in U(\mathfrak n^-)_{-\beta}$ with $\langle a_i,a_j^{*}\rangle=\delta_{ij}$; acting on $a_j^{*}v$ all components of weight other than $\beta$ vanish by minimality and highest-weight support, and the surviving component is $b_jv$ for the index $j$ with $b_j\neq0$. Hence the composite $U(\mathfrak n^-)\otimes U(\mathfrak n^+)\to U(\mathfrak g)\to\operatorname{End}_{\mathbb C}M(\mu)$ is injective; its image has cumulative PBW growth bounded below by a positive multiple of $n^{2N}$. [F3, step 1.1]

3.1 Combining steps 1.5, 2.1 and 2.2, $$\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))=\dim E_0$$ for every highest weight $\mu$ and every finite-dimensional $E$; the same computation with $E$ replaced by its dual identifies the adjoint isotypic multiplicity in $U(\mathfrak g)$-modules with $\dim E_0$, by the freeness statement of [F6]. [F6, step 1.5, step 2.1, step 2.2]

3.2 Suppose the action had nonzero kernel $K$ in $U_\chi=U(\mathfrak g)/U(\mathfrak g)\ker\chi_\mu$. Then the associated graded $\operatorname{gr}(K)$ is a nonzero graded ideal of the domain $A$ of [F6], so it contains $Af$ for a nonzero homogeneous $f$; multiplication by $f$ is injective and the complete-intersection Hilbert series of $A$ gives $\dim(A/Af)_{\le n}=O(n^{2N-1})$. Consequently the image of $U(\mathfrak n^-)\otimes U(\mathfrak n^+)$ in $U_\chi$ has cumulative growth $O(n^{2N-1})$, contradicting the lower bound of step 2.3. Hence the action $U_\chi\to\operatorname{End}_{\mathbb C}M(\mu)$ is injective. [F6, step 2.3]

4.1 Surjectivity onto the locally finite part: the map of step 3.2 is $\mathfrak g$-equivariant for the adjoint actions, so it maps the $E$-isotypic component to the $E$-isotypic component for every finite-dimensional simple $E$. The source $E$-isotypic multiplicity is $\dim\operatorname{Hom}_{\mathfrak g}(E,U_\chi)=\dim E_0$ by [F6], and the target multiplicity is $\dim\operatorname{Hom}_{\mathfrak g}(E,\operatorname{End}_{\mathbb C}M(\mu))=\dim\operatorname{Hom}_{\mathfrak g}(E\otimes M(\mu),M(\mu))=\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),E^{*}\otimes M(\mu))=\dim E_0$ by step 3.1. An injective linear map between spaces of equal finite dimension is an isomorphism, so the action is an isomorphism onto each isotypic component, hence onto the locally finite part. [F6, step 3.1, step 3.2]

5.1 Since the kernel of $U(\mathfrak g)\to\operatorname{End}_{\mathbb C}M(\mu)$ is exactly $\operatorname{Ann}M(\mu)$ and the image of $U(\mathfrak g)\ker\chi_\mu$ lies in that kernel, steps 3.2 and 4.1 give both the algebra isomorphism and $\operatorname{Ann}M(\mu)=U(\mathfrak g)\ker\chi_\mu$; the multiplicity statement is step 3.1 read through the isomorphism. The Axiom of Choice is inherited from the published category-$\mathcal O$ and invariant-theory suppliers. [F6, step 3.1, step 4.1, algebra] ∎
