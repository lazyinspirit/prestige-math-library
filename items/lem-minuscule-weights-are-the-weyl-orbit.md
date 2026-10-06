---
id: lem-minuscule-weights-are-the-weyl-orbit
kind: lemma
title: Minuscule weights have exactly the Weyl orbit as their weights
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
proof_strategy: direct
deps:
  - def-minuscule-weight
  - def-axiom-of-choice
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - lem-highest-weight-modules-have-weights-below-the-top-weight
  - prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one
  - lem-finite-weyl-closed-chambers-and-stabilizers
  - def-integral-dominant-and-strictly-dominant-weights
  - lem-positive-root-pairings-of-a-dominant-integral-weight
  - prop-root-vectors-shift-weight-spaces
  - def-fundamental-weights
  - prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights
  - def-finite-weyl-root-system-lattice-and-chamber-conventions
  - thm-the-root-set-is-a-reduced-crystallographic-root-system
  - thm-root-sl-two-triple
  - thm-finite-dimensional-representations-of-sl-two
  - def-height-of-a-root-and-highest-root
  - prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system
  - def-coroot-and-dual-root-system
  - def-positive-system-and-base-of-simple-roots
  - thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
  - def-reducible-and-irreducible-root-system
  - prop-root-systems-decompose-uniquely-into-irreducible-components
  - lem-finite-weyl-positive-roots-and-simple-reflections
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§30.1, printed pp. 158--160: the paragraph after Definition 30.1 (minuscule weights are fundamental, via the maximal coroot with strictly positive coefficients), Lemma 30.2, Lemma 30.3 with its complete proof, Proposition 30.4 (1)⇔(2)⇔(3) with the complete proof reproduced here, and Corollary 30.5 (orbit-sum character)."
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Birkhäuser 2002"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §1 and Ch. VI §1: Weyl group action on weights, invariant form and sl2-strings (companion treatment of the weight-orbit invariance used in the proof)."
---

## Statement

Assume the Axiom of Choice. For a dominant integral weight
$\omega\in\Lambda^+$ of a finite-dimensional complex simple Lie algebra
$\mathfrak g$, the following are equivalent ([[def-minuscule-weight]]):

1. $\omega$ is minuscule;
2. every weight of the finite-dimensional simple module $L(\omega)$ belongs
   to the Weyl orbit $W\omega$;
3. every dominant integral weight $\lambda$ with $\omega-\lambda\in Q_+$
   equals $\omega$.

Consequently, if $\omega$ is minuscule, then each weight space of $L(\omega)$
is at most one-dimensional, $L(\omega)$ has exactly $|W\omega|$ distinct
weights, and $\operatorname{ch}L(\omega)=\sum_{\gamma\in W\omega}e^\gamma$.

## Facts & Assumptions

**Given:** AC, a finite-dimensional complex simple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$, root system $\Phi$, positive system $\Phi^+$, Weyl group $W$, root lattice $Q=\sum_i\mathbb Z\alpha_i$ with positive cone $Q_+$, weight lattice $P$, dominant integral weights $\Lambda^+$, and a dominant integral weight $\omega$ ([[def-finite-weyl-root-system-lattice-and-chamber-conventions]], [[def-integral-dominant-and-strictly-dominant-weights]], [[def-minuscule-weight]]).

[F1] $\omega$ is minuscule exactly when $|\langle\omega,\beta^\vee\rangle|\le1$ for every root $\beta$; for dominant integral $\omega$ this forces $\langle\omega,\alpha_i^\vee\rangle\in\{0,1\}$ for each simple root. If $\omega\ne0$ is minuscule, let $\theta$ be the highest root and write its coroot as $\theta^\vee=\sum_i c_i\alpha_i^\vee$, with each $c_i$ a positive integer. Here is the needed support argument. Write $\theta=\sum_i n_i\alpha_i$ with $n_i\ge0$. Its support is nonempty. If it omitted a simple root, connectedness of the irreducible Dynkin graph would give an omitted vertex $j$ adjacent to the support. All off-diagonal simple-root inner products are nonpositive, with a negative one along that edge, so $(\theta,\alpha_j)<0$, contradicting the dominance of $\theta$. Thus every $n_i>0$. Since $\theta^\vee=\sum_i n_i(\alpha_i,\alpha_i)/(\theta,\theta)\,\alpha_i^\vee$ and simple coroots form an integral basis of the coroot group, every $c_i$ is a positive integer. Then
$$1\ge\langle\omega,\theta^\vee\rangle=\sum_i c_i\langle\omega,\alpha_i^\vee\rangle\ge\#\{i:\langle\omega,\alpha_i^\vee\rangle=1\}\ge1,$$
so exactly one simple coroot, say $\alpha_i^\vee$, pairs nontrivially with $\omega$, and its pairing is $1$. Thus $\omega=\omega_i$ and $c_i=\langle\omega_i,\theta^\vee\rangle=1$. This proves that every nonzero minuscule weight is a fundamental weight; it does not assert that every fundamental weight is minuscule. ([[def-minuscule-weight]], [[def-height-of-a-root-and-highest-root]], [[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]], [[def-coroot-and-dual-root-system]], [[def-fundamental-weights]]).

[F2] There is a $W$-invariant positive definite inner product $(\cdot,\cdot)$ on the real span of $\Phi$ with $\langle\lambda,\alpha^\vee\rangle=2(\lambda,\alpha)/(\alpha,\alpha)$; in particular $\langle\omega,\alpha^\vee\rangle=2(\omega,\alpha)/(\alpha,\alpha)$ and $W$-conjugate weights have equal norms ([[def-finite-weyl-root-system-lattice-and-chamber-conventions]], [[thm-the-root-set-is-a-reduced-crystallographic-root-system]], [[lem-positive-root-pairings-of-a-dominant-integral-weight]]).

[F3] Every weight of a highest weight module with highest weight $\omega$ lies in $\omega-Q_+$; the weights in the Weyl orbit $W\omega$ occur in $L(\omega)$ with multiplicity exactly one ([[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]]).

[F4] Every Weyl orbit in the real span of the roots meets the closed dominant chamber; for integral weights the representative is dominant integral, because $W$ permutes the roots and preserves the weight lattice and the pairings ([[lem-finite-weyl-closed-chambers-and-stabilizers]], [[def-integral-dominant-and-strictly-dominant-weights]], [[def-fundamental-weights]]).

[F5] For a root $\alpha$, the root vectors $x_\alpha$, $x_{-\alpha}$ and $h_\alpha$ span a subalgebra isomorphic to $\mathfrak{sl}_2$ ([[thm-root-sl-two-triple]]). Finite-dimensional $\mathfrak{sl}_2$-modules are direct sums of the irreducible modules with $h$-eigenvalues $m,m-2,\dots,-m$, and the space of vectors of a fixed eigenvalue has dimension the multiplicity of that eigenvalue; root vectors shift weight spaces by $\pm\alpha$ ([[thm-finite-dimensional-representations-of-sl-two]], [[prop-root-vectors-shift-weight-spaces]]).

[F6] If $J$ is a subset of the simple roots, then $\Phi_J:=\Phi\cap\operatorname{span}_{\mathbb R}J$ is a root subsystem with positive simple system $J$: reflections in roots of $\Phi_J$ preserve $\Phi$ and $\operatorname{span}J$, and a positive root supported in $J$ can only decompose into positive roots supported in $J$. Write $J=\bigsqcup_C C$ for the connected components of its induced Dynkin graph. The spans of distinct $C$ are orthogonal; the simple-reflection generation and root-orbit property show that every root of $\Phi_J$ lies in the span of one such $C$. Each resulting subsystem is irreducible, since an orthogonal decomposition would partition its simple roots into nonempty orthogonal sets and disconnect the graph. Thus these are exactly the irreducible components ([[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-reducible-and-irreducible-root-system]], [[prop-root-systems-decompose-uniquely-into-irreducible-components]], [[lem-finite-weyl-positive-roots-and-simple-reflections]]).

## Proof

1.1 First suppose that $\omega$ is minuscule and nonzero; by [F1] it is a fundamental weight $\omega_i$. We argue by induction on the rank of the irreducible root system. Let $\lambda$ be dominant integral and write $\beta:=\omega_i-\lambda=\sum_jm_j\alpha_j\in Q_+$. If some $k\ne i$ has $m_k=0$, delete the vertex $k$ from the Dynkin diagram. By [F6], the root subsystem generated by the remaining simple roots is the orthogonal direct sum of the subsystems $\Phi_C$ for the connected components $C$ of the deleted diagram; their spans are mutually orthogonal, and $\beta$ is the sum of its component projections $\beta_C$. In each component not containing $i$, the projection of $\omega_i$ is zero, so $\beta_C=-\lambda_C$, where $\lambda_C$ is dominant for that component. Writing $\beta_C=\sum_{j\in C}m_j\alpha_j$, we have $(\beta_C,\beta_C)=-\sum_{j\in C}m_j(\lambda_C,\alpha_j)\le0$ because $(\lambda_C,\alpha_j)=\tfrac12(\alpha_j,\alpha_j)\langle\lambda_C,\alpha_j^\vee\rangle\ge0$. Positive definiteness gives $\beta_C=\lambda_C=0$. The component $C_i$ containing $i$ has smaller rank; the projection of $\omega_i$ is its fundamental weight, still minuscule, and $\lambda_{C_i}$ is dominant integral with $\omega_i|_{C_i}-\lambda_{C_i}=\beta_{C_i}\in Q_+(C_i)$. The induction hypothesis applies to the irreducible lower-rank system $\Phi_{C_i}$ and gives $\beta_{C_i}=0$, hence $\beta=0$. Thus, if $\beta\ne0$, then $m_j>0$ for every $j\ne i$. [F1, F6, given, algebra]

1.2 A root-lattice element with all pairings bounded by $1$ vanishes: if $\xi\in Q$ satisfies $|\langle\xi,\beta^\vee\rangle|\le1$ for every coroot $\beta^\vee$, then $\xi=0$. Suppose not, and choose a counterexample $\xi=\sum_km_k\alpha_k$ with $\sum_k|m_k|$ minimal. Then $(\xi,\xi)=\sum_km_k(\xi,\alpha_k)>0$ by positive definiteness, so some $k$ has $m_k\ne0$ and $(\xi,\alpha_k)$ of the same sign as $m_k$; replacing $\xi$ by $-\xi$ if necessary, we may assume $m_k>0$ and $(\xi,\alpha_k)>0$, so $\langle\xi,\alpha_k^\vee\rangle=2(\xi,\alpha_k)/(\alpha_k,\alpha_k)=1$ by the bound. Then $s_k\xi=\xi-\alpha_k$ is again a counterexample, since $|\langle s_k\xi,\beta^\vee\rangle|=|\langle\xi,s_k\beta^\vee\rangle|\le1$ for all coroots (the set of coroots is $W$-stable), and it has coordinate sum $\sum_j|m_j|-1$, contradicting minimality. Hence $\xi=0$. [F1, F2, given, algebra]

1.3 The weight set of a finite-dimensional module is $W$-stable. Let $M$ be such a module, let $\mu$ be a weight, and let $\alpha=\alpha_k$ be simple with $t=\langle\mu,\alpha^\vee\rangle$. The subalgebra $\mathfrak{sl}_2(\alpha)$ acts on $M$. Decompose it into irreducibles and write a nonzero weight vector $v$ as the sum of its components in their weight-$t$ spaces. In each irreducible summand where that component is nonzero, the highest weight is some $m\ge|t|$ with $m\equiv t\pmod 2$. If $t\ge0$, lowering that component by $t$ steps is nonzero and has weight $-t$; if $t<0$, raising it by $-t$ steps is nonzero and has weight $-t$. Their direct sum is nonzero and has weight $\mu-t\alpha=s_k\mu$. Thus each simple reflection preserves the set of weights, and these reflections generate $W$. [F5, given, algebra]

1.4 (2)$\Rightarrow$(1): suppose (2) holds and $\omega$ is not minuscule. Then by [F1] there is a positive root $\alpha$ with $\langle\omega,\alpha^\vee\rangle\ge2$. Let $v_\omega\ne0$ be a highest weight vector; the root vector $x_{-\alpha}$ of the $\mathfrak{sl}_2(\alpha)$-triple [F5] satisfies $x_{-\alpha}v_\omega\ne0$, because $v_\omega$ is annihilated by all positive root vectors and spans the highest weight space of the $\mathfrak{sl}_2(\alpha)$-module it generates, of highest weight $\langle\omega,\alpha^\vee\rangle\ge1$; this vector has weight $\omega-\alpha$ ([[prop-root-vectors-shift-weight-spaces]]). By (2) there is $w\in W$ with $\omega-\alpha=w\omega$, and the $W$-invariance of the form [F2] gives $(\omega-\alpha,\omega-\alpha)=(\omega,\omega)$, while $$(\omega-\alpha,\omega-\alpha)=(\omega,\omega)-2(\omega,\alpha)+(\alpha,\alpha)<(\omega,\omega)$$ because $2(\omega,\alpha)=\langle\omega,\alpha^\vee\rangle(\alpha,\alpha)\ge2(\alpha,\alpha)>(\alpha,\alpha)$. This contradiction proves (2)$\Rightarrow$(1). [F1, F2, F5, given, algebra]

2.1 Suppose $\langle\omega_i-\lambda,\alpha_i^\vee\rangle\le0$. For every $j\ne i$, $\langle\omega_i-\lambda,\alpha_j^\vee\rangle=-\langle\lambda,\alpha_j^\vee\rangle\le0$, since $\omega_i$ is the $i$th fundamental weight and $\lambda$ is dominant. Together with the assumed nonpositivity at $i$, all simple-coroot pairings of $\beta=\omega_i-\lambda=\sum_km_k\alpha_k$ are nonpositive. Therefore $(\beta,\beta)=\sum_km_k(\beta,\alpha_k)=\sum_km_k\frac{(\alpha_k,\alpha_k)}2\langle\beta,\alpha_k^\vee\rangle\le0$, because each $m_k\ge0$. Positive definiteness gives $\beta=0$ and $\lambda=\omega_i$. [F1, F2, step 1.1, algebra]

2.2 It remains to exclude the case $\langle\omega_i-\lambda,\alpha_i^\vee\rangle>0$, which is $1$ because $\omega_i$ pairs by $1$ and $\lambda$ is dominant integral. Write $\beta=\omega_i-\lambda=\sum_km_k\alpha_k$. Then $m_k>0$ for $k\ne i$ by step 1.1, and the Cartan-integer formula gives $1=\langle\beta,\alpha_i^\vee\rangle=2m_i+\sum_{j\ne i}m_j\langle\alpha_j,\alpha_i^\vee\rangle$. The off-diagonal Cartan integers are nonpositive, so $2m_i\ge1$ and the integer $m_i$ is positive; hence every $m_j\ge1$. Let $\theta$ be the highest root and write $\theta^\vee=\sum_jc_j\alpha_j^\vee$ with all $c_j>0$ as in [F1]. By [[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]], $(\theta,\alpha_j)\ge0$ for every simple root. Since $\theta^\vee$ is a positive scalar multiple of $\theta$, this gives $\langle\alpha_j,\theta^\vee\rangle=2(\alpha_j,\theta)/(\theta,\theta)\ge0$; at least one is positive because the simple roots span and $\theta\ne0$. Therefore $\beta(\theta^\vee)=\sum_jm_j\langle\alpha_j,\theta^\vee\rangle>0$. By [F1], $\langle\omega_i,\theta^\vee\rangle=c_i=1$, so $\lambda(\theta^\vee)=1-\beta(\theta^\vee)<1$. This is a nonnegative integer because $\lambda$ is dominant integral and every $c_j>0$; hence it is zero, all simple-coroot pairings of $\lambda$ vanish, and $\lambda=0$. Thus $\beta=\omega_i$; since $\beta$ was in $Q_+$, this proves $\omega_i\in Q$ before applying the root-lattice lemma. [F1, F2, step 1.1, algebra]

2.3 (3)$\Rightarrow$(2): let $\mu$ be a weight of $L(\omega)$. By [F4] choose $w\in W$ with $\lambda:=w\mu$ dominant; by step 1.3 and induction on a decomposition of $w$ into simple reflections, $\lambda$ is again a weight of $L(\omega)$, hence $\omega-\lambda\in Q_+$ by [F3]. Assumption (3) gives $\lambda=\omega$, so $\mu=w^{-1}\omega\in W\omega$. [F3, F4, step 1.3, algebra]

3.1 Conclusion of (1)$\Rightarrow$(3): if the case of step 2.2 occurs, it gives $\lambda=0$ and $\beta=\omega_i\in Q$. The nonzero minuscule weight $\omega_i$ has all coroot pairings bounded in absolute value by $1$, so step 1.2 now applies and forces $\omega_i=0$, a contradiction. Together with step 2.1, this proves $\beta=0$ and $\lambda=\omega_i=\omega$. If $\omega=0$ and $-\lambda=\sum_km_k\alpha_k\in Q_+$ with $m_k\ge0$, then $(\lambda,\lambda)=-\sum_km_k(\lambda,\alpha_k)\le0$ because $\lambda$ is dominant; positive definiteness gives $\lambda=0$. This proves (1)$\Rightarrow$(3). [F1, F2, step 1.1, step 2.1, step 2.2, step 1.2, algebra]

4.1 Consequences. Assume $\omega$ is minuscule. By (2) every weight of $L(\omega)$ lies in $W\omega$, and by [F3] every element of $W\omega$ occurs with multiplicity exactly one; hence every weight space is one-dimensional (in particular at most one-dimensional), there are exactly $|W\omega|$ distinct weights, and $\operatorname{ch}L(\omega)=\sum_{\gamma\in W\omega}e^\gamma$. [F3, step 3.1, step 2.3, step 1.4, algebra] ∎
