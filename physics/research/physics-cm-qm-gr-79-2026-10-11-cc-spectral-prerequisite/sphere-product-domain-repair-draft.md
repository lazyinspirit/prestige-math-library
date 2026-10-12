---
id: thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain
aliases: [nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]
kind: theorem
domain: mathematics
title: "Sphere Laplacian diagonal domain"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-onb, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives, def-directional-and-partial-derivatives, def-hilbert-space, def-self-adjoint-and-normal-endomorphism, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-inner-product-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-orthogonal-projection, cor-inner-product-induces-a-norm, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-orthogonal-projection: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5, printed pp. 77-105 (spherical harmonics, their Laplacian eigenvalues and differentiation formulas)"
      url: "https://www.axler.net/HFT.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §14.30.8 'Spherical Harmonics' (Laplace operator on the sphere and eigenvalue l(l+1)) and §14.7 (associated Legendre differential equation)"
      url: "https://dlmf.nist.gov/14.30"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix a real parameter $\hbar>0$. Let
$(Y_{lm})_{l\ge0,-l\le m\le l}$ be the complete orthonormal family of $L^2(S^2,\sigma)$ constructed in
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] and
[[thm-nrqm-orbital-and-spin-sphere-onb]], and let
$H:=\operatorname{span}\{Y_{lm}:-l\le m\le l,\ l\in\mathbb N\}$ be its algebraic (finite) span. Define operators
$A$ and $L_z$ on $L^2(S^2,\sigma)$ by the diagonal lemma
[[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]:

$$D(A):=\Bigl\{F:\sum_{l,m}l^2(l+1)^2\,|\langle F,Y_{lm}\rangle|^2<\infty\Bigr\},\qquad AF:=\sum_{l,m}l(l+1)\langle F,Y_{lm}\rangle Y_{lm},$$
$$D(L_z):=\Bigl\{F:\sum_{l,m}m^2\,|\langle F,Y_{lm}\rangle|^2<\infty\Bigr\},\qquad L_zF:=\sum_{l,m}\hbar m\,\langle F,Y_{lm}\rangle Y_{lm},$$

the sums being in the Hilbert-space norm ([[def-hilbert-space]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). Finally, for $F$ in the finite span
$H$ and a chart point $(\theta,\varphi)\in(0,\pi)\times(0,2\pi)$ write $F(\theta,\varphi)$ for the value of $F$
at $\Phi(\theta,\varphi)$ and put

$$(\mathcal S F)(\theta,\varphi):=-\frac1{\sin\theta}\partial_\theta\bigl(\sin\theta\,\partial_\theta F\bigr)(\theta,\varphi) -\frac1{\sin^2\theta}\partial_\varphi^2F(\theta,\varphi),\qquad (\mathcal D F)(\theta,\varphi):=-i\hbar\,\partial_\varphi F(\theta,\varphi),$$

where the partial derivatives are those of [[def-directional-and-partial-derivatives]]. Then:

(a) $A$ and $L_z$ are self-adjoint operators on $L^2(S^2,\sigma)$ with the displayed domains; on $Y_{lm}$ they
act by $AY_{lm}=l(l+1)Y_{lm}$ and $L_zY_{lm}=\hbar mY_{lm}$
([[def-self-adjoint-and-normal-endomorphism]]); $A$ is nonnegative, $\langle AF,F\rangle\ge0$, and
$A\mathbf 1=0$;

(b) $H$ is a core of $A$ and of $L_z$: the finite truncations
$F_N:=\sum_{l\le N}\sum_{m}\langle F,Y_{lm}\rangle Y_{lm}$ of an element $F$ of $D(A)$ satisfy $F_N\to F$ and
$AF_N\to AF$ in $L^2$, and analogously with $L_z$;

(c) for every $F\in H$ and every chart point with $\sin\theta\ne0$,
$$\mathcal S F(\theta,\varphi)=(AF)(\theta,\varphi),\qquad \mathcal D F(\theta,\varphi)=(L_zF)(\theta,\varphi);$$

(d) Put $c_{lm}=\langle F,Y_{lm}\rangle$, $\lambda_l=l(l+1)$, and
$$\mathcal W:=\Bigl\{F\in L^2(S^2,\sigma):\sum_{l,m}\lambda_l^2m^2|c_{lm}|^2<\infty\Bigr\}.$$
For every $l$, the orthogonal projection $P_lF=\sum_{m=-l}^lc_{lm}Y_{lm}$ onto the $(2l+1)$-dimensional space $V_l$ reduces both $A$ and $L_z$: it preserves their domains and satisfies $AP_lF=P_lAF$ on $D(A)$ and $L_zP_lF=P_lL_zF$ on $D(L_z)$. Their maximal composition domains are
$$D(AL_z)=\mathcal W,\qquad D(L_zA)=D(A)\cap\mathcal W.$$
Here $D(ST)=\{F\in D(T):TF\in D(S)\}$; no composition is defined without its first operator's domain condition. On the common domain $D(L_zA)$ their actions agree:
$$AL_zF=L_zAF=\sum_{l,m}\lambda_l\hbar m\,c_{lm}Y_{lm},$$
with convergence in Hilbert-space norm. In particular they commute on $H$. Their maximal product domains need not coincide: $F=\sum_{l\ge1}l^{-1}Y_{l0}$ belongs to $D(AL_z)$ with $AL_zF=0$ but does not belong to $D(A)$, so $L_zAF$ is undefined. Nor is $\mathcal W$ automatic on $D(A)\cap D(L_z)$: coefficients $c_{ll}=l^{-3}$ for $l\ge1$ and all others zero give a counterexample.

They nevertheless strongly commute in the precise spectral sense. For Borel sets $B,C\subseteq\mathbb R$, their diagonal spectral projections are
$$E_A(B)F=\sum_{l,m}\mathbf1_B(\lambda_l)c_{lm}Y_{lm},\qquad E_z(C)F=\sum_{l,m}\mathbf1_C(\hbar m)c_{lm}Y_{lm}.$$
Each family is a projection-valued measure, and $E_A(B)E_z(C)=E_z(C)E_A(B)$ for all $B,C$. More generally, for bounded complex Borel functions $f,g$, define the bounded operators
$$f(A)F=\sum_{l,m}f(\lambda_l)c_{lm}Y_{lm},\qquad g(L_z)F=\sum_{l,m}g(\hbar m)c_{lm}Y_{lm}.$$
They satisfy $f(A)g(L_z)=g(L_z)f(A)$ on all $L^2(S^2,\sigma)$. These definitions use the fixed countable harmonic family and require no arbitrary-choice spectral theorem.

The differential expression $\mathcal S$ is evaluated only away from the poles, where the coordinate formulas are
defined; no claim is made about a maximal differential operator on all of $S^2$.

## Facts & Assumptions

**Given:** the complete orthonormal family $(Y_{lm})$; the finite span $H$; the diagonal operators $A,L_z$; the differential expressions $\mathcal S,\mathcal D$; the functions $Y_{lm}=b_{lm}w_{l|m|}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$.

[F1] Diagonal lemma: for a complete orthonormal family $(e_j)$ and real eigenvalues $\lambda_j$ the diagonal operator $S$ with $Se_j=\lambda_je_j$ and $D(S)=\{x:\sum_j\lambda_j^2|\langle x,e_j\rangle|^2<\infty\}$ is self-adjoint and is the unique self-adjoint extension of its finite span; the finite span is a core, the finite truncations converge in the graph norm, and $\langle Sx,x\rangle=\sum_j\lambda_j|\langle x,e_j\rangle|^2$ ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]).

[F2] $(Y_{lm})$ is a complete orthonormal family of $L^2(S^2,\sigma)$ ([[thm-nrqm-orbital-and-spin-sphere-onb]]).

[F3] $w_{lm}$ is continuous on $[-1,1]$, differentiable on $(-1,1)$, and satisfies the associated Legendre equation $-\bigl((1-t^2)w_{lm}'\bigr)'+\frac{m^2}{1-t^2}w_{lm}=l(l+1)w_{lm}$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] (a)).

[F4] $Y_{lm}(\theta,\varphi)=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$ for $m\ge0$ and $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] (c)).

[F5] Sine and cosine are differentiable with $\sin'=\cos$, $\cos'=-\sin$; partial derivatives are computed by the usual rules, including the chain rule for $t=\cos\theta$ and the product rule ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]]).

[F6] Orthogonal projections onto closed subspaces are self-adjoint with square equal to themselves, and the orthogonal projection onto the span of a finite orthonormal family $(u_j)$ is $x\mapsto\sum_j\langle x,u_j\rangle u_j$ ([[def-orthogonal-projection]], [[def-inner-product-space]]).



## Proof

1.1 [(a) and (b)] Apply [F1] to the complete orthonormal family $(Y_{lm})$ of [F2] with the real eigenvalues $\lambda_{lm}=l(l+1)$: the resulting operator is exactly $A$ as defined, is self-adjoint, has the displayed domain, satisfies $\langle AF,F\rangle=\sum_{lm}l(l+1)|\langle F,Y_{lm}\rangle|^2\ge0$, and has the finite span $H$ as a core with the stated truncation property; the eigenvalues are nonnegative, so $A\mathbf 1=0$ because all coefficients of $1$ against $Y_{lm}$ vanish for $l\ge1$. The same application with the real eigenvalues $\hbar m$, $m\in\mathbb Z$ (whose square summability domain is the displayed one because $\hbar>0$), gives clause (a) and the second half of (b) for $L_z$. [F1, F2, algebra]

1.2 [(c) for $A$] Let $F=Y_{lm}$ with $m\ge0$; by [F4], $F(\theta,\varphi)=c\,w(\cos\theta)e^{im\varphi}$ with $w=w_{lm}$ and $c=b_{lm}/\sqrt{2\pi}$. Computing the partial derivatives with [F5]: $\partial_\varphi^2F=-m^2F$ and, writing $t=\cos\theta$, $\partial_\theta F=-c\sin\theta\,w'(t)e^{im\varphi}$, so $\sin\theta\,\partial_\theta F=-c\sin^2\theta\,w'(t)e^{im\varphi}$ and $\partial_\theta(\sin\theta\,\partial_\theta F)=c\bigl(-2\sin\theta\cos\theta\,w'+ \sin^3\theta\,w''\bigr)e^{im\varphi}$; dividing by $-\sin\theta$ gives $c\bigl(2tw'-(1-t^2)w''\bigr)e^{im\varphi}=-c\,\bigl((1-t^2)w'\bigr)'e^{im\varphi}$, where in the last step $\bigl((1-t^2)w'\bigr)'=-2tw'+(1-t^2)w''$. Also $-\sin^{-2}\theta\,\partial_\varphi^2F=+m^2(1-t^2)^{-1}F$. Adding, $\mathcal SF=c\bigl[-\bigl((1-t^2)w'\bigr)'+\frac{m^2}{1-t^2}w\bigr]e^{im\varphi}$, which by [F3] equals $c\,l(l+1)w\,e^{im\varphi}=l(l+1)F=AF$. For negative indices, $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$ and the real-coefficient differential expression $\mathcal S$ commutes with conjugation, so the same eigenvalue identity holds. Both sides are linear over finite sums, so the identity extends to all of $H$. [F3, F4, F5, algebra]

2.1 [(c) for $L_z$] With $F=Y_{lm}$, $\partial_\varphi F=imF$, so $\mathcal DF=-i\hbar(im)F=\hbar mF=L_zF$ by the definition of $L_z$. For negative indices [F4] gives $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$ and $\partial_\varphi Y_{l,-m}=(-1)^m\overline{\partial_\varphi Y_{lm}}=-im\,Y_{l,-m}$, so again $\mathcal D Y_{l,-m}=\hbar(-m)Y_{l,-m}=L_zY_{l,-m}$. Extending by linearity to $H$ completes the proof of (c). [step 1.2, F4, F5, algebra]

2.2 [(d), reducing blocks and exact composition domains] The diagonal coefficient formulas and [F6] show that each $P_l$ preserves both weighted square-sum domains and commutes with their actions there. For $m\ne0$, $l\ge1$ and $\lambda_l\ge2$, hence $m^2\le\lambda_l^2m^2/4$; for $m=0$ both sides vanish. Therefore $F\in\mathcal W$ implies $F\in D(L_z)$. The coefficients of $L_zF$ are $\hbar m c_{lm}$, so, since $\hbar>0$ is fixed, $L_zF\in D(A)$ is exactly the condition $F\in\mathcal W$. This proves $D(AL_z)=\mathcal W$. Conversely the definition of $D(L_zA)$ first requires $F\in D(A)$; for such an $F$, the coefficients of $AF$ are $\lambda_lc_{lm}$, and $AF\in D(L_z)$ is exactly $F\in\mathcal W$. Thus $D(L_zA)=D(A)\cap\mathcal W$. On this common domain Parseval makes both displayed product series norm-convergent with the same coefficients $\lambda_l\hbar mc_{lm}$, proving equality of actions without asserting equality of maximal domains. [step 1.1, F1, F2, F6, algebra]

3.1 [(d), both domain caveats are real] For $c_{l0}=1/l$, $l\ge1$, Parseval gives $\|F\|^2=\sum_{l\ge1}l^{-2}<\infty$ and the product weight is zero. But $\sum\lambda_l^2|c_{l0}|^2=\sum_{l\ge1}(l+1)^2=\infty$, so $F\notin D(A)$. Since $L_zF=0$, $AL_zF=0$, whereas $L_zAF$ is undefined. This also refutes the historical assertion that the product-weight condition alone defines both compositions. For the other caveat take $c_{ll}=l^{-3}$. The $A$-domain sum is $\sum(l+1)^2/l^4<\infty$ and the $L_z$-domain sum is $\sum l^{-4}<\infty$, but the product-weight sum is $\sum(l+1)^2/l^2=\infty$. These explicit series use only the fixed countable family. [step 2.2, F2, algebra]

4.1 [(d), explicit strong commutation] The stated $E_A(B)$ and $E_z(C)$ are bounded self-adjoint idempotents by their zero-or-one diagonal coefficients; their value on $\mathbb R$ is the identity. For pairwise disjoint Borel sets $B_n$, the partial sums $\sum_{n\le N}E_A(B_n)F$ converge to $E_A(\bigcup_nB_n)F$: their coefficientwise error tends to zero and its square sum is dominated by $\sum|c_{lm}|^2$. Explicitly choose a finite harmonic head with arbitrarily small square-sum tail, then choose $N$ containing the finitely many occupied head memberships. The same argument applies to $E_z$, proving strong countable additivity. Diagonal multiplication gives $E_A(B)E_z(C)F=\sum\mathbf1_B(\lambda_l)\mathbf1_C(\hbar m)c_{lm}Y_{lm}$, unchanged in the reverse order. For bounded Borel $f,g$, Parseval bounds $\|f(A)F\|\le\|f\|_\infty\|F\|$ and similarly for $g(L_z)$; both compositions have the norm-convergent coefficients $f(\lambda_l)g(\hbar m)c_{lm}$. Thus the diagonal PVMs and all bounded Borel functions commute. This strong commutation coexists with the unequal maximal composition domains proved above. Together with steps 1.1, 1.2 and 2.1, all clauses (a)-(d) follow under the retained Countable Choice hypothesis, with no AC premise or new spectral-calculus supplier. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, F2, F6, algebra] ∎
