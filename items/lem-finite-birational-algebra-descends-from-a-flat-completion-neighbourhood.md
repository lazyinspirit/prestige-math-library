---
id: lem-finite-birational-algebra-descends-from-a-flat-completion-neighbourhood
kind: lemma
title: "Finite birational algebras descend across a flat completion neighbourhood"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one,
                    thm-faithfully-flat-ring-map-characterisations, cor-faithfully-flat-ring-maps-are-injective,
                    thm-localisation-of-modules-is-exact,
                    thm-finitely-generated-modules-over-noetherian-rings-are-noetherian,
                    cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, 54.8.8 and 54.11.6: exact imports replaced by the local argument"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $B\to C$ be a faithfully flat map of Noetherian domains and let $0\ne I\subset B$ be a finitely generated ideal such that $B/I^n\to C/I^nC$ is an isomorphism for every $n\ge1$. Let $C\subset C'$ be a finite birational algebra inside $\operatorname{Frac}C$, with $C'/C$ annihilated by a power of $IC$. Then there is a finite birational algebra $B\subset B'\subset\operatorname{Frac}B$, isomorphic to $B$ away from $V(I)$, and an isomorphism $B'\otimes_B C\cong C'$ as $C$-algebras.

## Facts & Assumptions

**Given:** A faithfully flat map $B\to C$ of Noetherian domains, a finitely generated ideal $0\ne I\subset B$ with $B/I^n\to C/I^nC$ an isomorphism for every $n\ge1$, and a finite birational algebra $C\subset C'\subset\operatorname{Frac}C$ with $C'/C$ annihilated by a power of $IC$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one.* Assume the Axiom of Dependent Choice, the balanced-Ext hypotheses of def-balanced-ext-bifunctor, and that the extension classes in question form a set. Sending an extension of $M$ by $N$ to the connecting image of $1_M$ gives a natural isomorphism of abelian groups $\operatorname{YExt}^1(M,N)\cong\operatorname{Ext}^1(M,N).$ ([[thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one]])

[F4] *thm-faithfully-flat-ring-map-characterisations.* Assume the Axiom of Choice for the prime and maximal ideal existence used in the spectral reformulations. Let $f:R\to S$ be a flat homomorphism of commutative rings. The following are equivalent: 1. $f$ is faithfully flat. 2. For every proper ideal $I\subsetneq R$, the extended ideal $IS$ is proper. 3. Every maximal ideal of $R$ has a prime ideal of $S$ lying over it. 4. ([[thm-faithfully-flat-ring-map-characterisations]])

[F5] *cor-faithfully-flat-ring-maps-are-injective.* Assume the Axiom of Choice. Every faithfully flat homomorphism of commutative rings is injective. ([[cor-faithfully-flat-ring-maps-are-injective]])

[F6] *thm-localisation-of-modules-is-exact.* If $ 0 \longrightarrow M' \xrightarrow{f} M \xrightarrow{g} M'' \longrightarrow 0 $ is a short exact sequence of $R$-modules, then $ 0 \longrightarrow S^{-1}M' \xrightarrow{S^{-1}f} S^{-1}M \xrightarrow{S^{-1}g} S^{-1}M'' \longrightarrow 0 $ is a short exact sequence of $S^{-1}R$-modules. ([[thm-localisation-of-modules-is-exact]])

[F7] *thm-finitely-generated-modules-over-noetherian-rings-are-noetherian.* Every finitely generated left module over a left Noetherian ring is Noetherian. See def-noetherian-ring. ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]])

[F8] *cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable.* Assume the Axiom of Dependent Choice and the hypotheses of def-balanced-ext-bifunctor. If $Q$ is any other supplied projective resolution datum on the same class of objects, then for every $M,N$ and $n\geq0$, $\operatorname{Ext}^n_{\mathcal A}(M,N)\cong H^n\operatorname{Hom}(Q_\bullet,N),$ naturally in $M$ and $N$. ([[cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]])

## Proof

1.1 Put $Q=C'/C$ and choose $n\ge1$ with $I^nQ=0$. Since $C'$ is finite over $C$ the quotient $Q$ is a finite $C$-module killed by $I^nC$, so it is a finite module over $C/I^nC\cong B/I^n$ and hence a finite $B$-module. [F4, given]

2.1 Because $Q$ is a $B/I^n$-module, $Q\otimes_BC\cong Q\otimes_{B/I^n}(C/I^nC)\cong Q\otimes_{B/I^n}(B/I^n)=Q$, using the given identification $B/I^n\cong C/I^nC$; faithfully flat base change also makes $Q\to Q\otimes_BC$ injective. [F4, F5, step 1.1]

3.1 Since $B$ is Noetherian and $Q$ is finite, $Q$ is Noetherian, so a finite free presentation can be extended indefinitely: all syzygies of $Q$ are finitely generated, and $Q$ admits a projective resolution $F_\bullet\to Q\to0$ with every $F_i$ a finite free $B$-module. [F5, F7, step 1.1, step 2.1]

4.1 Base change of the resolution along $B\to C$ computes the Ext of $Q$ over $C$, because $C$ is flat over $B$ and Hom of a finite free module commutes with the base change: $\operatorname{Ext}^1_B(Q,B)\otimes_BC\cong\operatorname{Ext}^1_C(Q\otimes_BC,C)=\operatorname{Ext}^1_C(Q,C)$, with $F_\bullet\otimes_BC$ a resolution of $Q$ by finite free $C$-modules. [F4, F6, F8, step 2.1, step 3.1]

5.1 Every element of $I^n$ kills $\operatorname{Ext}^1_B(Q,B)$: multiplication by $x\in I^n$ is zero on $Q$, so on the resolution it is a chain map lifting the zero map and, by successive projective lifts, is chain homotopic to zero, hence induces zero on the cohomology of the Hom complex. [F7, F8, step 1.1, step 4.1]

6.1 Since $I^n$ kills $\operatorname{Ext}^1_B(Q,B)$, the same argument as for $Q$ shows $\operatorname{Ext}^1_B(Q,B)\otimes_BC\cong\operatorname{Ext}^1_B(Q,B)$; combined with the previous step the base-change map $\operatorname{Ext}^1_B(Q,B)\to\operatorname{Ext}^1_C(Q,C)$ is an isomorphism. [F4, step 2.1, step 4.1, step 5.1]

7.1 The extension class of $0\to C\to C'\to Q\to0$ in $\operatorname{Ext}^1_C(Q,C)$ therefore has a unique preimage in $\operatorname{Ext}^1_B(Q,B)$, which is the class of a short exact sequence $0\to B\to E\to Q\to0$ of $B$-modules whose base change to $C$ is isomorphic to $0\to C\to C'\to Q\to0$. The module $E$ is finite over $B$ because $B$ and $Q$ are. [F3, F8, step 6.1]

8.1 Choose $0\ne a\in I$. Since $Q$ is killed by $I^n$, we have $Q_a=0$, so localizing the extension at $a$ identifies $E_a$ with $B_a$. The kernel $K$ of $E\to E_a$ is killed by a power of $a$: it is a submodule of the finite $B$-module $E$, hence finite because $B$ is Noetherian, and each of its finitely many generators is killed by some power of $a$. After tensoring with the flat ring map $B\to C$, this kernel is the kernel of $C'\to C'_a$, which is zero because $C'\subset\operatorname{Frac}C$ is a domain and localization is injective. Faithful-flatness detects zero modules here: for any nonzero module element $m$, its cyclic submodule is $B/J$ for a proper annihilator $J$; flatness embeds $(B/J)\otimes_BC=C/JC$ into the tensor of the module, and [F4] makes $C/JC$ nonzero. Thus $K=0$, and $E$ embeds as a $B$-submodule of $B_a\subset\operatorname{Frac}B$. [F4, F5, F6, F7, step 7.1]

9.1 Let $M:=B_a/E$. Flatness identifies $M\otimes_BC$ with the quotient of $C_a=B_a\otimes_BC$ by the image of $E\otimes_BC$. The extension isomorphism $E\otimes_BC\cong C'$ respects the submodule $C$; after localizing at $a$, both middle terms identify with $C_a$, and the isomorphism is the identity on this submodule. Therefore the image of $E\otimes_BC$ in $C_a$ is exactly $C'$. For $u,v\in E$, the class $m:=uv+E$ maps in $M\otimes_BC\cong C_a/C'$ to zero, since the images of $u$ and $v$ lie in the ring $C'$. The faithful-flat detection argument in step 8.1 shows that $M\to M\otimes_BC$ is injective, so $m=0$ and $uv\in E$. With this multiplication $E=:B'$ is a ring, finite over $B$, with $B\subset B'\subset\operatorname{Frac}B$, and the extension isomorphism $E\otimes_BC\cong C'$ is an isomorphism of $C$-algebras. [F4, F6, step 7.1, step 8.1]

10.1 Let $\mathfrak p\notin V(I)$. Choose $b\in I\setminus\mathfrak p$. Since $I^nQ=0$, localization at $b$ gives $Q_b=0$, so the exact sequence in step 7.1 makes $B_b\to E_b$ an isomorphism of modules. It is already a ring map, and both rings have the multiplication inherited from $E\subseteq B_a$, so it is an isomorphism of rings. These principal opens cover $\operatorname{Spec}(B)\setminus V(I)$, proving that $B'$ agrees with $B$ away from $V(I)$. The algebra is birational because $B\subseteq B'\subseteq\operatorname{Frac}(B)$. AC and DC are inherited from the Ext-one classification and resolution suppliers; no formal-gluing theorem is used. [F1, F2, step 7.1, step 9.1] ∎

## Remarks

- The construction is explicit: the descended algebra is the middle term of the unique lifted extension, and it is a subring of the localization $B_a$ rather than an abstract glued object.
- The hypothesis that the maps $B/I^n\to C/I^nC$ are isomorphisms for all $n$ is used twice, once to make $Q$ a $B/I^n$-module and once to identify the base change of the Ext group with itself.
