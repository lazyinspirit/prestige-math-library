---
id: lem-cm-projective-curve-canonical-positive-twist-vanishing-generation
kind: lemma
title: "Positive canonical twists on projective Cohen\u2013Macaulay curves"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          cor-cohen-macaulay-modules-have-no-embedded-associated-primes, cor-flat-local-depth-additivity,
                    def-axiom-of-choice, def-degree-invertible-sheaf-proper-dimension-one, def-dependent-choice,
                    lem-finite-closed-immersion-derived-coinduction-adjunction,
                    lem-projective-pure-cm-dualizing-complex-concentration,
                    lem-surface-flat-base-change-coherent-cohomology-by-cech,
                    thm-cohomology-projective-space-twisting-sheaves, thm-nakayama-lemma,
                    thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves: vanishing-twist, globally-generated and tensor-omega-with-globally-generated-invertible; complete omitted-detail argument"
      url: "https://raw.githubusercontent.com/stacks/stacks-project/master/curves.tex"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $E$ be a projective pure CM curve over a field $\kappa$, with $H^0(E,O_E)=\kappa$ and canonical module $\omega_E$. If $L$ is globally generated and nontrivial, $H^1(E,\omega_E\otimes L)=0$. If $L$ is very ample with $\deg_\kappa L\ge2$, then $\omega_E\otimes L$ is globally generated. These statements allow nonreduced $E$.

## Facts & Assumptions

**Given:** A projective pure Cohen--Macaulay curve $E$ over a field $\kappa$ with $H^0(E,\mathcal O_E)=\kappa$ and canonical module $\omega_E$, a globally generated nontrivial invertible sheaf $L$ on $E$, and in the generation part a very ample $L$ with $\deg_\kappa L\ge2$.

[F1] *cor-cohen-macaulay-modules-have-no-embedded-associated-primes.* Under the hypotheses of `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension`, every associated prime of $M$ is minimal in $\operatorname{Supp}_R(M)$. Thus $M$ has no embedded associated primes. ([[cor-cohen-macaulay-modules-have-no-embedded-associated-primes]])

[F2] *cor-flat-local-depth-additivity.* Assume the Axiom of Choice. For a flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of Noetherian local rings, $\operatorname{depth}(S)=\operatorname{depth}(R) +\operatorname{depth}(S/\mathfrak mS).$ ([[cor-flat-local-depth-additivity]])

[F3] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F4] *def-degree-invertible-sheaf-proper-dimension-one.* Assume the Axiom of Choice, inherited from the Euler-characteristic supplier below ([[def-axiom-of-choice]]). Let $k$ be a field (def-field) and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space is Noetherian of dimension at most one (def-dimension-noetherian-topological-space, def-locally-noetherian-and-noetherian-scheme). ([[def-degree-invertible-sheaf-proper-dimension-one]])

[F5] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F6] *lem-finite-closed-immersion-derived-coinduction-adjunction.* Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. ([[lem-finite-closed-immersion-derived-coinduction-adjunction]])

[F7] *lem-projective-pure-cm-dualizing-complex-concentration.* Assume AC. If $X$ is projective over a field, Cohen–Macaulay and pure of dimension $d$, its normalized dualizing complex has the canonical concentration $D_X\cong\omega_X[d],\qquad \omega_X=\mathcal H^{-d}(D_X).$ For $i:X\hookrightarrow\mathbb P^N_k$, $i_*\omega_X=\mathcal Ext_P^{N-d}(i_*\mathcal O_X,\omega_P).$ The sheaf $\omega_X$ is coherent, has support $X$, and is CM. ([[lem-projective-pure-cm-dualizing-complex-concentration]])

[F8] *lem-surface-flat-base-change-coherent-cohomology-by-cech.* Assume AC and DC. For a quasi-compact separated scheme $X$ over a ring $A$, a quasi-coherent sheaf $F$ and a flat $A$-algebra $C$, the canonical maps $H^q(X,F)\otimes_AC\to H^q(X_C,F_C)$ are isomorphisms for every $q$. No flatness of $F$ over $A$ is required. ([[lem-surface-flat-base-change-coherent-cohomology-by-cech]])

[F9] *thm-cohomology-projective-space-twisting-sheaves.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$ (def-commutative-ring), let $n\ge0$, let $d\in\mathbb Z$ and let $X=\mathbb P^n_A\cong\operatorname{Proj}A[x_0,\dots,x_n]$ be relative projective space (def-relative-projective-space-standard-charts, def-polynomial-ring-on-a-family-of-indeterminates), with twisting sheaf  ([[thm-cohomology-projective-space-twisting-sheaves]])

[F10] *thm-nakayama-lemma.* Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$. ([[thm-nakayama-lemma]])

[F11] *thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme.* Assume AC. Let $k$ be a field and let $X$ be a projective, pure $d$-dimensional Cohen–Macaulay $k$-scheme. Let $D_X=\omega_X[d]$ be its normalized dualizing complex, and let $t_X:H^d(X,\omega_X)\to k$ be its trace. ([[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]])

## Proof

1.1 Serre duality and canonical-module homothety identify $H^1(E,\omega_E\otimes L)^\vee$ with $\operatorname{Hom}(\omega_E\otimes L,\omega_E)=H^0(E,L^{-1})$, so the vanishing statement is equivalent to the vanishing of $H^0(E,L^{-1})$ for globally generated nontrivial $L$. [F4, F7, F11, given]

2.1 If $0\ne t\in H^0(E,L^{-1})$ and $\ell_1,\dots,\ell_m$ generate $L$, then some product $t\ell_j\in H^0(E,\mathcal O_E)=\kappa$ is nonzero, since otherwise $t$ would annihilate all local generators and hence vanish; the nonzero scalar product exhibits $t$ as a trivialization of $L^{-1}$, whence $L\cong\mathcal O_E$, contradicting nontriviality. [F7, step 1.1]

3.1 For the generation statement, pass to an algebraic closure $\overline\kappa$: flat Cech base change preserves $H^0(\mathcal O)=\kappa$, the degree and global generation, the finite free ambient resolutions identify the base change of $\omega_E$ with the canonical module of $E_{\overline\kappa}$, and pure Cohen--Macaulayness survives because flat-local depth additivity applies with zero-dimensional Cohen--Macaulay fibres and unchanged dimension. [F2, F7, F8, step 2.1]

4.1 Fix a closed point $e$ of $E_{\overline\kappa}$. Since $L$ is very ample over the infinite algebraically closed field, there is a hyperplane section $s\in H^0(L)$ vanishing at $e$ and nonzero at every generic point of $E$: the hyperplanes through $e$ containing a fixed positive-dimensional component form a proper linear subspace of the parameter space, and finitely many such subspaces do not cover it. [F8, step 3.1, given]

5.1 Cohen--Macaulayness excludes embedded associated points, so the section $s$ is regular; let $D=Z(s)$ with $0\to\mathcal O_E\to L\to\mathcal O_D\to0$. Cartier coinduction from this two-term resolution gives $\omega_D=(\omega_E\otimes L)|_D$ with finite-module duality at each Artinian stalk, and $h^0(\omega_D)=h^0(\mathcal O_D)=\deg_\kappa L\ge2$ by the multiplication-by-$s$ sequence and the Euler-characteristic description of the degree. [F1, F4, F6, step 4.1]

6.1 Put $F=\omega_E\otimes L$. The sequence $0\to\omega_E\to F\to\omega_D\to0$ has quotient of dimension at least two, while $h^1(\omega_E)=h^0(\mathcal O_E)^\vee=1$; let $F'\subseteq F$ be the subsheaf generated by the global sections of $F$ together with the image of $\omega_E$. A global section of $F$ has nonzero image in $\omega_D$, since the boundary map has one-dimensional target. [F11, step 5.1]

7.1 If $H^1(F')\ne0$, then $H^1(\omega_E)\to H^1(F')$ is an isomorphism, and Serre duality represents $H^1(-)^\vee$ by morphisms to $\omega_E$; the resulting map $F'\to\omega_E$ composed with $\omega_E\to F'$ is the identity by homothety and its nonzero action on $H^1$. Then $F'$ splits as $\omega_E$ plus a nonzero finite-support quotient, which would be a nonzero finite-support subsheaf of the Cohen--Macaulay sheaf $F$, impossible. Hence $H^1(F')=0$. [F1, F10, F11, step 6.1]

8.1 If $F/F'\ne0$, the long exact sequence would surject $H^0(F)$ onto the nonzero finite-support global sections of the quotient; this map is zero because every global section of $F$ lies in $F'$ by construction. Hence $F=F'$. [F10, F11, step 7.1]

9.1 The image of $\omega_E$ in $F$ is $sF$, so the stalk at $e$ of the quotient of $F$ by the subsheaf generated by global sections is $s$ times itself with $s\in\mathfrak m_e$; Nakayama at the Artinian stalk makes that quotient zero at $e$. Since $e$ was an arbitrary closed point, $F=\omega_E\otimes L$ is globally generated over $\overline\kappa$, and generation descends along the faithfully flat field extension. [F8, F10, step 8.1]

10.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the duality and base-change suppliers; the argument nowhere assumes that $E$ is reduced or geometrically integral. [F3, F5, step 9.1, F9] ∎

## Remarks

- The two statements are proved together: vanishing is the Hom-form of Serre duality, and generation is reduced to a Nakayama computation at an arbitrary point after splitting off $\omega_E$.
- The base change to the algebraic closure is used only to find hyperplane sections avoiding finitely many generic points; both conclusions descend.
