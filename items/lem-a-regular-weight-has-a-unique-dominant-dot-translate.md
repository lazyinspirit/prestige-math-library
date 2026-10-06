---
id: lem-a-regular-weight-has-a-unique-dominant-dot-translate
kind: lemma
title: A regular weight has a unique dominant dot translate
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
- lem-finite-weyl-closed-chambers-and-stabilizers
- prop-weyl-length-equals-positive-root-inversion-number
- def-length-and-longest-element-of-a-finite-weyl-group
- def-open-and-closed-weyl-chambers
- lem-finite-weyl-positive-roots-and-simple-reflections
- def-root-reflections-and-the-weyl-group-action
- def-dot-action-facets-and-single-wall-translation-data
- def-weyl-vector-rho
- def-integral-dominant-and-strictly-dominant-weights
- prop-weyl-vector-is-the-sum-of-fundamental-weights
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem
      url: https://www.math.harvard.edu/~lurie/papers/bwb.pdf
      locator: "Complete note, pp. 1-3, in particular the reduction of Theorem 5 to the rank-one shift along a monotone chain of wall crossings"
    - title: George Boxer and Vincent Pilloni, Notes on Higher Coleman Theory (Montreal 2020)
      url: https://www.imo.universite-paris-saclay.fr/~vincent.pilloni/montrealnotes.pdf
      locator: "Lecture 1, Sections 1.1.1-1.1.6, printed pp. 2-6: the dotted action and the regular versus singular dichotomy of Borel-Weil-Bott"
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system with positive
system $\Phi^{+}$, Weyl group $W$, and Weyl vector $\rho$
([[def-weyl-vector-rho]]), and let $\lambda\in X^{*}(T)$ be an integral weight
([[def-integral-dominant-and-strictly-dominant-weights]]). Let
$\mu=\lambda+\rho$ be **regular**, so
$\langle\mu,\alpha^{\vee}\rangle\ne0$ for every root $\alpha$, and put
$$N(\mu)=\#\{\alpha\in\Phi^{+}:\langle\mu,\alpha^{\vee}\rangle<0\}.$$
Then:

1. there is a unique $w\in W$ with $w\mu$ dominant, equivalently a unique $w$
   with $w\cdot\lambda$ dominant, and $N(\mu)=\ell(w)$;
2. if $\alpha$ is simple with $\langle\mu,\alpha^{\vee}\rangle<0$ then
   $N(s_{\alpha}\mu)=N(\mu)-1$, while if
   $\langle\mu,\alpha^{\vee}\rangle>0$ then
   $N(s_{\alpha}\mu)=N(\mu)+1$;
3. consequently there is a reduced expression
   $w=s_{i_{\ell}}\cdots s_{i_{1}}$ with $\ell=N(\mu)$ whose partial products
   $w_{j}=s_{i_{j}}\cdots s_{i_{1}}$ satisfy
   $N(w_{j}\mu)=N(\mu)-j$ and are regular for every $j$; and if $\mu$ is
   dominant there is a reduced expression $w_{0}=s_{i_{N}}\cdots s_{i_{1}}$ of
   the longest element whose partial products
   $w_{j}=s_{i_{j}}\cdots s_{i_{1}}$ satisfy $N(w_{j}\mu)=j$ for every $j$ and
   end at the strictly antidominant weight $w_{0}\mu$;
4. for every $w\in W$ one has
   $\ell(w_{0}w)=|\Phi^{+}|-\ell(w)$.

The lemma is choice-free: $\rho$ is used only through
$(\rho,\alpha_{i}^{\vee})=1$, and the dot action enters only through the
explicit formula $w\cdot\lambda=w(\lambda+\rho)-\rho$
([[def-dot-action-facets-and-single-wall-translation-data]]).

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi\subseteq E$ with positive system $\Phi^{+}$, simple roots $\alpha_{1},\dots,\alpha_{r}$, Weyl group $W$, Weyl vector $\rho$, an integral weight $\lambda$ and the regular weight $\mu=\lambda+\rho$ with $N(\mu)$ as in the Statement.

[F1] The hyperplane complement $E\setminus\bigcup_{\alpha}L_{\alpha}$ has the open Weyl chambers as connected components, $W$ permutes these chambers, the fundamental chamber is $C=\{x\in E:(x,\alpha_{i})>0\text{ for all }i\}$ with closure $\overline C$ cut out by the same inequalities with $\ge$ in place of $>$, and for a positive root $\beta=\sum_{i}n_{i}\alpha_{i}$ with $n_{i}\ge0$ one has $(x,\beta)=\sum_{i}n_{i}(x,\alpha_{i})$, so a strictly dominant point pairs positively with every positive root ([[def-open-and-closed-weyl-chambers]]).

[F2] Every $W$-orbit in $E$ has exactly one point in $\overline C$; $W$ acts simply transitively on open chambers; there is a unique longest element $w_{0}$, characterized by $w_{0}\Phi^{+}=\Phi^{-}$, with $w_{0}^{2}=1$ and $\ell(w_{0})=|\Phi^{+}|$; all of this holds without AC ([[lem-finite-weyl-closed-chambers-and-stabilizers]]).

[F3] The inversion set and length are $N(w)=\{\alpha\in\Phi^{+}:w\alpha\in\Phi^{-}\}$ and $\ell(w)=|N(w)|$, and $\ell(w)$ is the minimal number of simple reflections in an expression of $w$ ([[def-length-and-longest-element-of-a-finite-weyl-group]], [[prop-weyl-length-equals-positive-root-inversion-number]]).

[F4] Each simple reflection $s_{i}$ permutes $\Phi^{+}\setminus\{\alpha_{i}\}$ and sends $\alpha_{i}$ to $-\alpha_{i}$; the simple reflections generate $W$; the simple roots form an integral basis of the root lattice and the simple coroots an integral basis of the coroot lattice, so every coroot is an integral combination of simple coroots ([[lem-finite-weyl-positive-roots-and-simple-reflections]]).

[F5] The reflection formula is $s_{\alpha}(\nu)=\nu-\langle\nu,\alpha^{\vee}\rangle\alpha$, and the pairing is $W$-invariant: $\langle w\nu,(w\alpha)^{\vee}\rangle=\langle\nu,\alpha^{\vee}\rangle$ for all $w\in W$ ([[def-root-reflections-and-the-weyl-group-action]]).

[F6] Dominance means $\langle\nu,\alpha_{i}^{\vee}\rangle\ge0$ for all $i$, strict dominance means $>0$ for all $i$, and integrality means $\langle\lambda,\alpha_{i}^{\vee}\rangle\in\mathbb Z$ for all $i$; the dot action is $w\cdot\lambda=w(\lambda+\rho)-\rho$, and regularity of $\mu=\lambda+\rho$ means $\langle\mu,\alpha^{\vee}\rangle\ne0$ for every root $\alpha$ ([[def-integral-dominant-and-strictly-dominant-weights]], [[def-dot-action-facets-and-single-wall-translation-data]]).

[F7] The Weyl vector satisfies $(\rho,\alpha_{i}^{\vee})=1$ for the simple coroots ([[prop-weyl-vector-is-the-sum-of-fundamental-weights]]); with the identification of [F1] this is the pairing $\langle\rho,\alpha_{i}^{\vee}\rangle=1$ used below, and it makes $\langle\rho,\beta^{\vee}\rangle$ an integer for every coroot $\beta^{\vee}$ by [F4].

## Proof

1.1 Since $\mu$ is regular it is not fixed by any reflection, so it lies in exactly one open chamber $D$ of [F1]. By [F2] the orbit $W\mu$ meets the closed chamber $\overline C$ in exactly one point, necessarily regular and hence in $C$; this gives existence and uniqueness of $w$ with $w\mu$ dominant. For that $w$ and each $i$, $\langle w\cdot\lambda,\alpha_{i}^{\vee}\rangle=\langle w\mu-\rho,\alpha_{i}^{\vee}\rangle=\langle w\mu,\alpha_{i}^{\vee}\rangle-\langle\rho,\alpha_{i}^{\vee}\rangle$; here $\langle w\mu,\alpha_{i}^{\vee}\rangle=\langle\lambda,(w^{-1}\alpha_{i})^{\vee}\rangle+\langle\rho,(w^{-1}\alpha_{i})^{\vee}\rangle$ is a nonzero integer by [F4], [F6] and [F7], and $\langle\rho,\alpha_{i}^{\vee}\rangle=1$ by [F7]. Hence $w\cdot\lambda$ is dominant exactly when $\langle w\mu,\alpha_{i}^{\vee}\rangle$ is a nonnegative integer for all $i$, that is exactly when $w\mu$ is dominant; uniqueness transfers as well. [F1, F2, F4, F6, F7, given, algebra]

1.2 Let $\alpha$ be simple. By [F4] the map $\beta\mapsto s_{\alpha}\beta$ is an involution of $\Phi^{+}\setminus\{\alpha\}$ and sends $\alpha$ to $-\alpha$. For $\beta\in\Phi^{+}\setminus\{\alpha\}$ the $W$-invariance [F5] gives $\langle s_{\alpha}\mu,s_{\alpha}\beta^{\vee}\rangle=\langle\mu,\beta^{\vee}\rangle$, while $\langle s_{\alpha}\mu,\alpha^{\vee}\rangle=-\langle\mu,\alpha^{\vee}\rangle$. Since $s_{\alpha}$ permutes $\Phi^{+}\setminus\{\alpha\}$, summing the defining conditions of $N$ over $\Phi^{+}$ gives $N(s_{\alpha}\mu)=\#\{\beta\in\Phi^{+}\setminus\{\alpha\}:\langle\mu,\beta^{\vee}\rangle<0\}+[\langle\mu,\alpha^{\vee}\rangle>0]$, that is $N(s_{\alpha}\mu)=N(\mu)-[\langle\mu,\alpha^{\vee}\rangle<0]+[\langle\mu,\alpha^{\vee}\rangle>0]$; regularity of $\mu$ makes exactly one bracket equal to $1$, which gives the two asserted values. [F4, F5, F6, given, algebra]

2.1 For $\alpha\in\Phi^{+}$ one has $\langle\mu,\alpha^{\vee}\rangle<0$ if and only if $\langle w\mu,(w\alpha)^{\vee}\rangle<0$ by $W$-invariance [F5]. As $\alpha$ runs over $\Phi^{+}$, $w\alpha$ runs over $w\Phi^{+}$; since $w\mu$ is strictly dominant, it pairs negatively with $w\alpha$ exactly when $w\alpha\in\Phi^{-}$. Thus $N(\mu)=\#\{\alpha\in\Phi^{+}:w\alpha\in\Phi^{-}\}=|\operatorname{Inv}(w)|=\ell(w)$ by [F3]. [F2, F3, F5, step 1.1, algebra]

3.1 Write $M=N(\mu)$ and let $w$ be as in step 1.1, so $\ell(w)=M$ by step 2.1. Assume $w_{j}=s_{i_{j}}\cdots s_{i_{1}}$ has been constructed with $N(w_{j}\mu)=M-j$ and $j<M$. Then $w_{j}\mu$ is regular, because $W$-invariance [F5] shows $\langle w_{j}\mu,\gamma^{\vee}\rangle=0$ only if $\langle\mu,(w_{j}^{-1}\gamma)^{\vee}\rangle=0$, and $w_{j}^{-1}\gamma$ runs over all roots. Also $N(w_{j}\mu)=M-j>0$, so $w_{j}\mu$ is not dominant: if it were dominant then every positive root would pair nonnegatively with it by [F1], contradicting $N(w_{j}\mu)>0$. As dominance is tested on the simple coroots [F6] and $w_{j}\mu$ is regular, some simple $\alpha$ has $\langle w_{j}\mu,\alpha^{\vee}\rangle<0$; put $s_{i_{j+1}}=s_\alpha$, so step 1.2 gives $N(w_{j+1}\mu)=M-j-1$. Starting at $j=0$ this produces $w_{M}$ with $N(w_{M}\mu)=0$, so $w_{M}\mu$ is strictly dominant and hence $w_{M}=w$ by the uniqueness in step 1.1. To see the word is reduced, apply step 1.1 to the regular weight $w_{j}\mu$: the unique element $u_{j}$ with $u_{j}w_{j}\mu$ dominant satisfies $\ell(u_{j})=N(w_{j}\mu)=M-j$ by step 2.1 and $u_{j}w_{j}\mu=w\mu$, so $u_{j}w_{j}=w$ by uniqueness; hence $\ell(ww_{j}^{-1})=M-j$, while $\ell(w)=M$ and subadditivity give $M=\ell(ww_{j}^{-1}w_{j})\le\ell(ww_{j}^{-1})+\ell(w_{j})=M-j+\ell(w_{j})$, that is $\ell(w_{j})\ge j$. Since $w_{j}$ is a product of $j$ simple reflections, $\ell(w_{j})\le j$ by [F3], so $\ell(w_{j})=j$ and the expression is reduced. This proves the first part of (iii) with $\ell=M$. [F1, F3, F5, F6, step 1.1, step 2.1, step 1.2, algebra]

4.1 Now suppose in addition that $\mu$ is dominant, so $N(\mu)=0$ and $\mu$ is strictly dominant by regularity. Repeat the construction of step 3.1 with the opposite choice: given $w_{j}$ with $N(w_{j}\mu)=j<N$, the regular weight $w_{j}\mu$ is not strictly antidominant, and strict antidominance is tested on the simple coroots [F6]; hence some simple $\alpha$ has $\langle w_{j}\mu,\alpha^{\vee}\rangle>0$, and step 1.2 increases $N$ by one. Starting at $j=0$ produces $w_{N}$ with $N(w_{N}\mu)=N=|\Phi^{+}|$: every positive root pairs negatively with $w_{N}\mu$ by [F1], so $w_{N}\mu$ lies in the chamber of $w_{0}\mu$ by [F2]; regularity gives $w_{N}=w_{0}$, and $w_{N}\mu=w_{0}\mu$ is strictly antidominant. The word has $N$ factors and $w_{N}=w_{0}$ has length $N$ by [F2], so it is reduced. [F1, F2, F3, F6, step 1.2, algebra]

5.1 Let $w\in W$ and $\alpha\in\Phi^{+}$. Since $w_{0}$ sends positive roots to negative roots and negative roots to positive roots [F2], the root $w_{0}w\alpha$ is negative exactly when $w\alpha$ is positive. Counting positive roots gives $\ell(w_{0}w)=\#\{\alpha\in\Phi^{+}:w_{0}w\alpha\in\Phi^{-}\}=\#\{\alpha\in\Phi^{+}:w\alpha\in\Phi^{+}\}=|\Phi^{+}|-\ell(w)$, which is (iv). All the cited inputs are choice-free, and no step invokes a choice principle. [F2, F3, given, algebra] ∎ 
