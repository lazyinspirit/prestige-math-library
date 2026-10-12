---
id: lem-nrqm-composites-pure-state-separability-criterion
kind: lemma
domain: mathematics
title: 'Pure-state separability is equivalent to being a product: a Schmidt overlap
  witness'
status: draft
origin: session
dependency_level: 4
deps:
- def-countable-choice
- lem-nrqm-composites-hilbert-tensor-construction
- lem-nrqm-composites-rank-one-operator-calculus
- thm-nrqm-composites-infinite-schmidt-decomposition
- def-trace-class-operator
- thm-trace-class-is-a-two-sided-banach-operator-ideal
- thm-trace-is-absolutely-convergent-and-basis-independent
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-nrqm-composites-infinite-schmidt-decomposition: mathematical-premise
  def-trace-class-operator: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: 'MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8, Section 2: product
      and entangled pure vectors; the closed-convex-hull equivalence is proved locally
      here'
    url: https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H,K$ be arbitrary nonzero complex Hilbert spaces, with inner products linear in the first argument, and put $L=H\widehat\otimes K$ with the isometric inclusion $\kappa$ of [[lem-nrqm-composites-hilbert-tensor-construction]]. Write $T_{x,y}z=\langle z,y\rangle x$ as in [[lem-nrqm-composites-rank-one-operator-calculus]]. Set
$$\mathcal P=\{T_{\kappa(a\otimes b),\kappa(a\otimes b)}:\|a\|=\|b\|=1\},\qquad \mathcal S=\overline{\operatorname{conv}\mathcal P}^{\|\cdot\|_1},$$
with trace class as in [[def-trace-class-operator]], where the convex hull consists of finite convex combinations, and the closure is taken in the trace-class operators on $L$. For each unit $\Psi\in L$, let $P_\Psi=T_{\Psi,\Psi}$. Then
$$P_\Psi\in\mathcal S\quad\Longleftrightarrow\quad \Psi=\kappa(a\otimes b)\text{ for some unit }a\in H,\ b\in K.$$

More precisely, let $\Psi=\sum_{r\in J}s_r\kappa(v_r\otimes u_r)$ be any finite or countably infinite positive Schmidt expansion from [[thm-nrqm-composites-infinite-schmidt-decomposition]], and put $\lambda_r=s_r^2$. The number $m=\max_{r\in J}\lambda_r$ exists. Every pair of unit vectors $a,b$ satisfies $|\langle\Psi,\kappa(a\otimes b)\rangle|^2\le m$, with equality at a Schmidt pair whose weight is $m$. Every $\sigma\in\mathcal S$ satisfies $\operatorname{tr}(\sigma P_\Psi)\le m$, whereas $\operatorname{tr}(P_\Psi^2)=1$. If $\Psi$ is non-product then $m<1$ and, for every $\sigma\in\mathcal S$,
$$\|P_\Psi-\sigma\|_1\ge 1-m>0.$$
The factors need not be separable; only the support of the single tensor vector has a countable Schmidt expansion. These are mathematical trace pairings, with no measurement or Born-rule assumption.

## Facts & Assumptions

**Given:** Countable Choice; the Hilbert spaces $H,K$; $L$, $\kappa$, $\mathcal P$, $\mathcal S$ and unit $\Psi$ as above.

[F1] The completed tensor product is Hilbert, $\|\kappa(a\otimes b)\|=\|a\|\|b\|$, and $\langle\kappa(x\otimes y),\kappa(a\otimes b)\rangle=\langle x,a\rangle\langle y,b\rangle$, with linearity in the first argument ([[lem-nrqm-composites-hilbert-tensor-construction]] clauses (a), (c)).

[F2] Under Countable Choice, an arbitrary unit tensor vector has a nonempty at most countable positive Schmidt expansion, with orthonormal families $(v_r)$, $(u_r)$ and $\sum_rs_r^2=1$; it is a product vector exactly when there is one positive coefficient ([[thm-nrqm-composites-infinite-schmidt-decomposition]], Statement). No ambient Hilbert basis is assumed.

[F3] Rank-one operators are positive when their two vectors agree, have trace $\operatorname{tr}T_{x,y}=\langle x,y\rangle$, and for trace-class $T$ satisfy $\operatorname{tr}(TT_{x,y})=\langle Tx,y\rangle$. Trace is linear by [[thm-trace-is-absolutely-convergent-and-basis-independent]] clause 4, and $\|T\|\le\|T\|_1$ by [[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clause 1; the rank-one identities are [[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b), (c), (e).

## Proof

**Given:** The data of the statement and [F1]–[F3].

1.1 [Maximum and the strict gap] By [F2], $\lambda_r>0$ and $\sum_r\lambda_r=1$. Fix one $r_0\in J$ and put $c=\lambda_{r_0}>0$. The set $E=\{r:\lambda_r\ge c\}$ is nonempty and finite: any finite subset of $E$ with $N$ elements has weight sum at least $Nc\le1$, so $E$ has at most $\lfloor1/c\rfloor$ elements. The maximum $m$ on this finite set is a maximum on $J$, since every weight outside $E$ is below $c\le m$. If $\Psi$ is non-product, [F2] gives at least two positive weights; at an index $r_*$ attaining $m$, another positive weight implies $m<\sum_r\lambda_r=1$. [given, F2, algebra]

1.2 [Finite orthogonal estimates] For an orthonormal family $(e_r)$, a vector $x$ and a finite set $F$, expanding $\|x-\sum_{r\in F}\langle x,e_r\rangle e_r\|^2$ gives $\|x\|^2-\sum_{r\in F}|\langle x,e_r\rangle|^2\ge0$. Thus for unit $a,b$ the sums of $|\langle v_r,a\rangle|^2$ and $|\langle u_r,b\rangle|^2$ are each at most one, using conjugate symmetry and the supremum of finite sums. For finite complex sequences $(\alpha_r),(\beta_r)$, Cauchy–Schwarz gives $|\sum_r\alpha_r\beta_r|\le(\sum_r|\alpha_r|^2)^{1/2}(\sum_r|\beta_r|^2)^{1/2}$: this follows by expanding $\sum_r|\alpha_r-t\overline{\beta_r}|^2\ge0$ with $t=(\sum_r\alpha_r\beta_r)/(\sum_r|\beta_r|^2)$ when the denominator is positive, and is immediate otherwise. [given, F1, algebra]

1.3 [Exact continuity of the fixed trace witness] For every trace-class $T$ on $L$, [F3] gives $\operatorname{tr}(TP_\Psi)=\langle T\Psi,\Psi\rangle$ and $|\operatorname{tr}(TP_\Psi)|\le\|T\Psi\|\|\Psi\|\le\|T\|\le\|T\|_1$, since $\|\Psi\|=1$. Applying this estimate to $T-S$ proves $|\operatorname{tr}(TP_\Psi)-\operatorname{tr}(SP_\Psi)|\le\|T-S\|_1$. Thus this particular bounded trace functional is 1-Lipschitz; no unspecified continuity theorem or unbounded cyclicity is used. Also $P_\Psi\Psi=\Psi$, so $\operatorname{tr}(P_\Psi^2)=\langle P_\Psi\Psi,\Psi\rangle=1$. [given, F3, algebra]

2.1 [The overlap bound, with the conjugations fixed] For a finite Schmidt truncation $\Psi_F$, [F1] gives $\langle\Psi_F,\kappa(a\otimes b)\rangle=\sum_{r\in F}s_r\langle v_r,a\rangle\langle u_r,b\rangle$; equivalently it is the conjugate of $\sum_{r\in F}s_r\langle a,v_r\rangle\langle b,u_r\rangle$. Applying step 1.2 to $\alpha_r=s_r\langle v_r,a\rangle$ and $\beta_r=\langle u_r,b\rangle$ gives a modulus bound $(\sum_{r\in F}\lambda_r|\langle v_r,a\rangle|^2)^{1/2}(\sum_{r\in F}|\langle u_r,b\rangle|^2)^{1/2}\le\sqrt m$. The Schmidt truncations converge in norm [F2], so continuity of the Hilbert pairing passes this bound to $\Psi$. At $a=v_{r_*}$ and $b=u_{r_*}$, orthonormality gives overlap $s_{r_*}$ and squared overlap $m$. [step 1.1, step 1.2, F1, F2, algebra]

3.1 [Convex hull and its closure] For unit product $q=\kappa(a\otimes b)$, [F3] and first-linear conjugate symmetry give $\operatorname{tr}(T_{q,q}P_\Psi)=\langle T_{q,q}\Psi,\Psi\rangle=\langle\Psi,q\rangle\langle q,\Psi\rangle=|\langle\Psi,q\rangle|^2\le m$ by step 2.1. Trace linearity gives the same real bound for finite convex combinations. For $\sigma\in\mathcal S$ and every $\varepsilon>0$, the definition of closure supplies a single $\tau\in\operatorname{conv}\mathcal P$ with $\|\sigma-\tau\|_1<\varepsilon$. Step 1.3 gives $|\operatorname{tr}(\sigma P_\Psi)-\operatorname{tr}(\tau P_\Psi)|<\varepsilon$; letting $\varepsilon\downarrow0$ shows that $\operatorname{tr}(\sigma P_\Psi)$ is real and at most $m$. This neighborhood argument does not select a sequence of approximants. [step 2.1, step 1.3, F3, algebra]

4.1 [Equivalence and distance] If $\Psi$ is non-product, steps 1.1, 1.3 and 3.1 give $\operatorname{tr}(P_\Psi^2)=1>m\ge\operatorname{tr}(\sigma P_\Psi)$ for all $\sigma\in\mathcal S$, so $P_\Psi\notin\mathcal S$. Moreover step 1.3 gives $\|P_\Psi-\sigma\|_1\ge|\operatorname{tr}((P_\Psi-\sigma)P_\Psi)|=1-\operatorname{tr}(\sigma P_\Psi)\ge1-m$. Conversely a unit product vector has $P_\Psi\in\mathcal P\subseteq\mathcal S$. If initially $\Psi=\kappa(x\otimes y)$ with arbitrary nonzero factors, [F1] gives $\|x\|\|y\|=1$; therefore $a=x/\|x\|$ and $b=\|x\|y$ are unit and $\Psi=\kappa(a\otimes b)$. This proves the full claimed equivalence for the declared trace-norm closure and the strict witness bound. [step 1.1, step 1.3, step 3.1, F1, algebra] ∎
