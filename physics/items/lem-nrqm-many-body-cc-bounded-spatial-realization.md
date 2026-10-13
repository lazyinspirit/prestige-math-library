---
id: lem-nrqm-many-body-cc-bounded-spatial-realization
kind: lemma
domain: mathematics
title: "CC realization of the bounded spatial operator on a finite-component H² domain"
status: published
origin: session
dependency_level: 0
deps: [def-countable-choice, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-fourier-transform-on-l-one-of-rn, thm-plancherel, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, lem-weak-derivatives-are-polynomial-fourier-multipliers, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-dominated-convergence]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, bounded perturbations of the free operator; concrete CC realization proved locally here"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Fix integers $N,M\ge1$, $a>0$, and a real measurable function $V:\mathbb R^{3N}\to\mathbb R$ with $v=\operatorname{ess\,sup}|V|<\infty$. Put
$$\mathcal H=L^2(\mathbb R^{3N};\mathbb C^M),\qquad Y=W^{2,2}(\mathbb R^{3N};\mathbb C^M)=H^2(\mathbb R^{3N};\mathbb C^M),$$
where the vector space, pairing and Sobolev norm are the finite component sums of the scalar conventions of [[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-sobolev-space-wkp-and-its-norm]]. Use the componentwise Plancherel unitary of [[thm-plancherel]], with the negative-sign $2\pi$ convention of [[def-fourier-transform-on-l-one-of-rn]]. Define
$$w(\xi)=4\pi^2a|\xi|^2,\qquad K=\mathcal F_2^{-1}M_w\mathcal F_2,\qquad D(K)=\{u:w\mathcal F_2u\in\mathcal H\}.$$
Then $D(K)=Y$, and $Ku=-a\Delta u$ for every $u\in Y$, with the distributional Laplacian acting componentwise. The operator
$$H=K+M_V=-a\Delta+V,\qquad D(H)=Y,$$
is densely defined and self-adjoint on exactly $Y$, and $H\ge-v$. Both $K$ and $H$ have graph norms equivalent to the stated Sobolev norm, and $C_c^\infty(\mathbb R^{3N};\mathbb C^M)$ is a core for both. For $z=\pm i\mu$ with $\mu>v$, there is the concrete two-sided inverse
$$R_H(z)=(H-z)^{-1}=R_0(z)\sum_{k\ge0}(-M_VR_0(z))^k,\qquad R_0(z)=\mathcal F_2^{-1}M_{(w-z)^{-1}}\mathcal F_2,$$
with range exactly $Y$ and $\|R_H(z)\|\le(\mu-v)^{-1}$.

This realizes the equal-mass bounded spatial operator used at fixed $N$ by setting $a=\hbar^2/(2m)$ and any finite spin multiplicity $M$; for an $N$-fold spin-$s$ tensor the full multiplicity is $M=(2s+1)^N$. The lemma makes no statement about Coulomb potentials, unequal-mass operators, thermodynamic limits, or physical assignments. It uses no Axiom of Choice or Kato–Rellich theorem.

## Facts & Assumptions

**Given:** CC; $N,M,a,V,v,\mathcal H,Y,w$ as above. Pairings are linear in the first argument.

[F1] Under CC, the scalar Plancherel transform is a surjective complex-linear isometry preserving the pairing ([[thm-plancherel]], Statement). Under CC, $W^{2,2}$ equals the weighted Fourier space, with its Sobolev norm equivalent to $\|(1+|\xi|^2)\mathcal F_2u\|_2$, and the $2\pi$ derivative multiplier is $\mathcal F_2(D^\alpha u)=(2\pi i\xi)^\alpha\mathcal F_2u$ when the weak derivative is in $L^2$ ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], Statement (1),(2), [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], Statement). Finite component sums preserve these identities and norm equivalences.

[F2] For a densely defined operator, the adjoint domain consists of vectors admitting a representing vector in its pairing identity; a symmetric operator is self-adjoint exactly when its adjoint has the same domain and action ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). A self-adjoint operator is closed.

[F3] Under CC, $C_c^\infty(\mathbb R^{3N};\mathbb C)$ is dense in $W^{2,2}$ and in $L^2$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], Statement with $(k,p)=(2,2)$ and $(0,2)$). The same holds for finitely many components. Dominated convergence holds for the squared cutoff tails ([[thm-dominated-convergence]]).

## Proof

**Given:** The data of the statement and [F1]–[F3].

1.1 [Concrete multiplier, including the adjoint domain] For any real finite-valued measurable function $b$ on $\mathbb R^{3N}$, multiplication on $D(M_b)=\{f:bf\in\mathcal H\}$ is densely defined: $f_L=\mathbf1_{|b|\le L}f$ belongs to this domain and tends to $f$ by dominated convergence. It is symmetric because $b$ is real and the pairings are integrable by Cauchy–Schwarz. If $g\in D(M_b^*)$ with representing vector $h$, every $f\in\mathcal H$ supported on $E_L=\{|b|\le L\}$ belongs to the multiplier domain and satisfies $\langle f,bg-h\rangle=0$ on that set. The vector $\mathbf1_{E_L}(bg-h)$ lies in $\mathcal H$, so testing with that vector proves $h=bg$ a.e. on $E_L$. Increasing the integer $L$ covers the space up to null sets, proving $bg=h\in\mathcal H$ and $g\in D(M_b)$. Conversely the symmetry identity gives every vector of $D(M_b)$ in the adjoint domain with adjoint value $bg$. Thus $M_b$ is self-adjoint on the exact maximal domain, including for the weight $w$. This proof is valid for the finite vector-valued space by its component-sum pairing; it makes no arbitrary family of choices. [given, F2, F3, algebra]

2.1 [Fourier transfer, exact H² and normalization] Apply the componentwise unitary $\mathcal F_2$ from [F1] to step 1.1 with $b=w$. For a vector $y$ in the adjoint domain of $K$, changing variables $f=\mathcal F_2u$ in its representing functional gives $\mathcal F_2y\in D(M_w^*)=D(M_w)$ with the corresponding adjoint value; the converse follows from symmetry. Hence $K$ is self-adjoint on $\mathcal F_2^{-1}D(M_w)$. Since $w=4\pi^2a|\xi|^2$ with $a>0$, $1+w$ is bounded above and below by positive multiples of $1+|\xi|^2$. For $u\in L^2$, $w\mathcal F_2u\in L^2$ therefore holds exactly when $(1+|\xi|^2)\mathcal F_2u\in L^2$, which is $u\in Y$ by [F1]. Moreover $\|\mathcal F_2u\|_2+\|w\mathcal F_2u\|_2$ is equivalent to $\|(1+w)\mathcal F_2u\|_2$ by the triangle inequality and nonnegativity of $w$, and hence to $\|u\|_Y$. This proves graph-norm equivalence. The weak-derivative multiplier in [F1] gives $\mathcal F_2(-a\Delta u)=4\pi^2a|\xi|^2\mathcal F_2u$, proving the exact differential action for all $u\in Y$. Finally $\langle Ku,u\rangle=\int w\|\mathcal F_2u\|^2\ge0$, with integrability by Cauchy–Schwarz. [step 1.1, F1, F2, algebra]

3.1 [Explicit perturbed inverses on the fixed domain] Multiplication by $V$ is bounded and self-adjoint on $\mathcal H$, with norm at most $v$, since $V$ is real and essentially bounded. Thus $H=K+M_V$ is symmetric on the dense $Y$ and is closed there: if $u_l\to u$ and $Hu_l\to h$, boundedness gives $Ku_l\to h-M_Vu$, and closedness of $K$ gives $u\in Y$ with $Hu=h$. For $z=\pm i\mu$, the concrete multiplier $(w-z)^{-1}$ is bounded by $\mu^{-1}$ and $|w/(w-z)|\le1$. Therefore $R_0(z)$ maps $\mathcal H$ into $Y$ and satisfies both inverse equations of $K-z$, with range exactly $Y$. On $Y$ the correctly ordered factorization is $H-z=(I+M_VR_0(z))(K-z)$. Since $\|M_VR_0(z)\|\le v/\mu<1$, the geometric series in the statement is the inverse of the first factor: finite-sum multiplication leaves a remainder tending to zero in norm. The bounded operator space is complete, because an operator-norm Cauchy sequence has a bounded pointwise limit on the complete target and the same uniform Cauchy estimate gives operator-norm convergence. Thus $R_H(z)$ exists, maps into $Y$, and its two ordered inverse equations follow from the factorization. Surjectivity of this range onto $Y$ follows from the second inverse equation. Its norm is at most $\mu^{-1}/(1-v/\mu)=(\mu-v)^{-1}$. [step 2.1, F1, F2, construct, algebra]

4.1 [Self-adjointness without an AC perturbation theorem] Let $y\in D(H^*)$. By step 3.1, $H-i\mu:Y\to\mathcal H$ is onto; solve $(H-i\mu)x=(H^*-i\mu)y$ with its explicit inverse, so $x\in Y$. Symmetry implies $H^*x=Hx$, whence $y-x\in\ker(H^*-i\mu)$. For a densely defined operator with first-linear pairing, this kernel is $\operatorname{ran}(H+i\mu)^\perp$, directly from the adjoint identity. The other inverse from step 3.1 makes that range all of $\mathcal H$, so $y=x\in Y$. Since $H\subseteq H^*$ by symmetry, the adjoint domains and actions are equal, proving self-adjointness on exactly $Y$. Also $\langle Hu,u\rangle=\langle Ku,u\rangle+\int V\|u\|^2\ge-v\|u\|^2$ for every $u\in Y$, proving the claimed lower bound. Only the two explicit imaginary resolvents were used. [step 2.1, step 3.1, F2, algebra]

5.1 [Graph norms, cores and scope] For $u\in Y$, boundedness of $V$ gives $\|Hu\|\le\|Ku\|+v\|u\|$ and $\|Ku\|\le\|Hu\|+v\|u\|$. Thus the graph norms of $H$ and $K$ are equivalent, and step 2.1 identifies both with the Sobolev norm. The finite-component smooth density from [F3] therefore makes $C_c^\infty(\mathbb R^{3N};\mathbb C^M)$ graph dense in the exact domain of each operator, which is precisely the core claim. Steps 1.1–4.1 supply the self-adjointness, exact differential action, lower bound and explicit inverses. All primitive suppliers used here assume CC; neither an AC multiplier theorem nor Kato–Rellich nor any assertion concerning a singular potential or an arbitrary spin basis was invoked. [step 2.1, step 3.1, step 4.1, F1, F2, F3, algebra] ∎
