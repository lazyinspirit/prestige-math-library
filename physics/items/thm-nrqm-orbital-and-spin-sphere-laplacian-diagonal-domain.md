---
id: thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain
aliases: [nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]
kind: theorem
domain: mathematics
title: "Sphere Laplacian diagonal domain"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-onb, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, def-directional-and-partial-derivatives, def-hilbert-space, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-inner-product-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-inner-product-induces-a-norm, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
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
    - title: "NIST Digital Library of Mathematical Functions, §14.30, equation (14.30.8) (spherical-harmonic orthogonality); the differential expression and eigenvalue are derived locally from the associated functions"
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
$H$, use the canonical continuous representatives $\widetilde Y_{lm}$ from
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]: set
$\widetilde F:=\sum_{l,m}\langle F,Y_{lm}\rangle\widetilde Y_{lm}$, a finite sum uniquely determined by the orthonormal coefficients. The same convention applies to $AF,L_zF\in H$. On the chart
$\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ with
$(\theta,\varphi)\in(0,\pi)\times(0,2\pi)$, write $F(\theta,\varphi):=\widetilde F(\Phi(\theta,\varphi))$ and put

$$(\mathcal S F)(\theta,\varphi):=-\frac1{\sin\theta}\partial_\theta\bigl(\sin\theta\,\partial_\theta F\bigr)(\theta,\varphi) -\frac1{\sin^2\theta}\partial_\varphi^2F(\theta,\varphi),\qquad (\mathcal D F)(\theta,\varphi):=-i\hbar\,\partial_\varphi F(\theta,\varphi),$$

where the partial derivatives are those of [[def-directional-and-partial-derivatives]]. Then:

(a) $A$ and $L_z$ are self-adjoint operators on $L^2(S^2,\sigma)$ with the displayed domains; on $Y_{lm}$ they
act by $AY_{lm}=l(l+1)Y_{lm}$ and $L_zY_{lm}=\hbar mY_{lm}$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]); $A$ is nonnegative, $\langle AF,F\rangle\ge0$, and
$A\mathbf 1=0$;

(b) $H$ is a core of $A$ and of $L_z$: the finite truncations
$F_N:=\sum_{l\le N}\sum_{m}\langle F,Y_{lm}\rangle Y_{lm}$ of an element $F$ of $D(A)$ satisfy $F_N\to F$ and
$AF_N\to AF$ in $L^2$, and analogously with $L_z$;

(c) for every $F\in H$ and every chart point with $\sin\theta\ne0$,
$$\mathcal S F(\theta,\varphi)=(AF)(\theta,\varphi),\qquad \mathcal D F(\theta,\varphi)=(L_zF)(\theta,\varphi);$$

(d) for every $l$ the orthogonal projection $P_l$ of $L^2(S^2,\sigma)$ onto the $(2l+1)$-dimensional span of
$Y_{l,-l},\dots,Y_{ll}$, defined by $P_lF:=\sum_{m=-l}^l\langle F,Y_{lm}\rangle Y_{lm}$ (the unique vector in that span with orthogonal residual), reduces both $A$ and $L_z$, i.e. $P_lA\subseteq AP_l$
and $P_lL_z\subseteq L_zP_l$; consequently $A$ and $L_z$ commute on the finite span $H$, and for every $F\in D(A)$ with
$\sum_{l,m}\bigl(l(l+1)\hbar m\bigr)^2|\langle F,Y_{lm}\rangle|^2<\infty$ one has
$AL_zF=L_zAF=\sum_{l,m}l(l+1)\hbar m\langle F,Y_{lm}\rangle Y_{lm}$. Writing $c_{lm}=\langle F,Y_{lm}\rangle$ and $\lambda_l=l(l+1)$, the maximal product domains are $D(AL_z)=\{F\in L^2:\sum_{l,m}(\lambda_l\hbar m)^2|c_{lm}|^2<\infty\}$ and $D(L_zA)=D(A)\cap D(AL_z)$. Thus this is exactly the common domain $D(AL_z)\cap D(L_zA)=D(L_zA)$, while the two maximal product domains need not coincide. The product-weight condition alone does not imply $F\in D(A)$: the vector with coefficients $c_{l0}=1/l$ for $l\ge1$ and all other coefficients zero belongs to $L^2$, has zero product weight, but does not belong to $D(A)$. The product-weight condition is not automatic for all $F\in D(A)\cap D(L_z)$.

The differential expression $\mathcal S$ is evaluated only away from the poles, where the coordinate formulas are
defined; no claim is made about a maximal differential operator on all of $S^2$.

## Facts & Assumptions

**Given:** the complete orthonormal family $(Y_{lm})$; the finite span $H$; the diagonal operators $A,L_z$; the differential expressions $\mathcal S,\mathcal D$; the canonical representatives $\widetilde Y_{lm}=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$ for $m\ge0$, with $\widetilde Y_{l,-m}=(-1)^m\overline{\widetilde Y_{lm}}$ for $m>0$, and their finite coefficient sums $\widetilde F$.

[F1] Diagonal lemma: for a complete orthonormal family $(e_j)$ and real eigenvalues $\lambda_j$ the diagonal operator $S$ with $Se_j=\lambda_je_j$ and $D(S)=\{x:\sum_j\lambda_j^2|\langle x,e_j\rangle|^2<\infty\}$ is self-adjoint and is the unique self-adjoint extension of its finite span; the finite span is a core, the finite truncations converge in the graph norm, and $\langle Sx,x\rangle=\sum_j\lambda_j|\langle x,e_j\rangle|^2$ ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]).

[F2] $(Y_{lm})$ is a complete orthonormal family of $L^2(S^2,\sigma)$ ([[thm-nrqm-orbital-and-spin-sphere-onb]]).

[F3] $w_{lm}$ is continuous on $[-1,1]$, differentiable on $(-1,1)$, and satisfies the associated Legendre equation $-\bigl((1-t^2)w_{lm}'\bigr)'+\frac{m^2}{1-t^2}w_{lm}=l(l+1)w_{lm}$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] (a)).

[F4] $\widetilde Y_{lm}(\Phi(\theta,\varphi))=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$ for $m\ge0$ and $\widetilde Y_{l,-m}=(-1)^m\overline{\widetilde Y_{lm}}$; their $L^2$ classes are $Y_{lm}$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] (c)).

[F5] Sine and cosine are differentiable with $\sin'=\cos$, $\cos'=-\sin$; partial derivatives are computed by the usual rules, including the chain rule for $t=\cos\theta$ and the product rule ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]]). The complex exponential has complex derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]). For $m\ne0$, its defining difference quotient along increments $imh$ gives $\frac{d}{d\varphi}e^{im\varphi}=im e^{im\varphi}$; for $m=0$ this is the constant derivative $0$. Repeating gives $\frac{d^2}{d\varphi^2}e^{im\varphi}=-m^2e^{im\varphi}$.

[F6] For a finite orthonormal family $(u_j)$ in a Hilbert space, set $Px:=\sum_j\langle x,u_j\rangle u_j$. Its value lies in their span and $\langle x-Px,u_j\rangle=0$ for each $j$, so it is uniquely determined by orthogonal residual. The finite pairings give $P^2=P$ and $\langle Px,y\rangle=\langle x,Py\rangle$; also $\|x\|^2=\|Px\|^2+\|x-Px\|^2$, so $\|P\|\le1$. Thus it is the bounded self-adjoint orthogonal projection onto that span; no finite-dimensional ambient hypothesis is needed ([[def-inner-product-space]], [[cor-inner-product-induces-a-norm]]).



## Proof

1.1 [(a) and (b)] Enumerate the indices by $j=l^2+l+m$, which bijects the block $-l\le m\le l$ to $l^2\le j<(l+1)^2$ and all blocks to $\mathbb N$. Apply [F1] to this enumeration of the complete orthonormal family $(Y_{lm})$ of [F2] with the real eigenvalues $\lambda_{lm}=l(l+1)$: the resulting operator is exactly $A$ as defined, is self-adjoint, has the displayed domain, satisfies $\langle AF,F\rangle=\sum_{lm}l(l+1)|\langle F,Y_{lm}\rangle|^2\ge0$, and has the finite span $H$ as a core with the stated truncation property; the eigenvalues are nonnegative, so $A\mathbf 1=0$ because $\mathbf1=\sqrt{4\pi}Y_{00}$ by [F4] (with $P_0=1$, $b_{00}=1/\sqrt2$), whose eigenvalue is zero. The same application with the real eigenvalues $\hbar m$, $m\in\mathbb Z$ (whose square summability domain is the displayed one because $\hbar>0$), gives clause (a) and the second half of (b) for $L_z$. [F1, F2, F4, algebra]

1.2 [(c) for $A$] For $F=Y_{lm}$ with $m\ge0$, evaluate its canonical representative; by [F4], $F(\theta,\varphi)=c\,w(\cos\theta)e^{im\varphi}$ with $w=w_{lm}$ and $c=b_{lm}/\sqrt{2\pi}$. Computing the partial derivatives with [F5]: $\partial_\varphi^2F=-m^2F$ and, writing $t=\cos\theta$, $\partial_\theta F=-c\sin\theta\,w'(t)e^{im\varphi}$, so $\sin\theta\,\partial_\theta F=-c\sin^2\theta\,w'(t)e^{im\varphi}$ and $\partial_\theta(\sin\theta\,\partial_\theta F)=c\bigl(-2\sin\theta\cos\theta\,w'+ \sin^3\theta\,w''\bigr)e^{im\varphi}$; dividing by $-\sin\theta$ gives $c\bigl(2tw'-(1-t^2)w''\bigr)e^{im\varphi}=-c\,\bigl((1-t^2)w'\bigr)'e^{im\varphi}$, where in the last step $\bigl((1-t^2)w'\bigr)'=-2tw'+(1-t^2)w''$. Also $-\sin^{-2}\theta\,\partial_\varphi^2F=+m^2(1-t^2)^{-1}F$. Adding, $\mathcal SF=c\bigl[-\bigl((1-t^2)w'\bigr)'+\frac{m^2}{1-t^2}w\bigr]e^{im\varphi}$, which by [F3] equals $c\,l(l+1)w\,e^{im\varphi}=l(l+1)F=AF$. For negative indices, $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$ and the real-coefficient differential expression $\mathcal S$ commutes with conjugation, so the same eigenvalue identity holds. Both sides are linear over finite sums, so the identity extends to all of $H$. [F3, F4, F5, algebra]

2.1 [(c) for $L_z$] With $F=Y_{lm}$, $\partial_\varphi F=imF$, so $\mathcal DF=-i\hbar(im)F=\hbar mF=L_zF$ by the definition of $L_z$. For negative indices [F4] gives $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$ and $\partial_\varphi Y_{l,-m}=(-1)^m\overline{\partial_\varphi Y_{lm}}=-im\,Y_{l,-m}$, so again $\mathcal D Y_{l,-m}=\hbar(-m)Y_{l,-m}=L_zY_{l,-m}$. Extending by linearity to $H$ completes the proof of (c). [step 1.2, F4, F5, algebra]

3.1 [(d)] On the basis $AL_zY_{lm}=l(l+1)\hbar m\,Y_{lm}=L_zAY_{lm}$, and both operators are linear, so $A$ and $L_z$ commute on the finite span $H$. For each $l$, the span $V_l$ of $Y_{l,-l},\dots,Y_{ll}$ consists of eigenvectors of $A$ with eigenvalue $l(l+1)$ and of $L_z$ with eigenvalues $\hbar(-l),\dots,\hbar l$; by [F6] the projection is $P_lx=\sum_{m}\langle x,Y_{lm}\rangle Y_{lm}$, and grouping the diagonal expansions by $l$ shows $AP_lx=P_lAx$ for $x\in D(A)$ and $L_zP_lx=P_lL_zx$ for $x\in D(L_z)$. Finally, let $F\in D(A)$ satisfy the displayed product-weight condition. Since $|m|\le l$ and $l^2\le l^2(l+1)^2$, $F\in D(L_z)$. The product-weight condition gives $L_zF\in D(A)$ and $AF\in D(L_z)$, so both compositions are defined: $AL_zF=\sum_{l,m}l(l+1)\hbar m\,c_{lm}Y_{lm}$ with $\sum|l(l+1)\hbar m|^2|c_{lm}|^2<\infty$ by hypothesis, and symmetrically for $L_zAF$, so the two series converge to the same element. For the maximal domains, the product-weight condition implies $F\in D(L_z)$, since $\lambda_l\ge2$ whenever $m\ne0$; it is then exactly the condition $L_zF\in D(A)$. Hence it describes $D(AL_z)$ alone. The other composition additionally requires $F\in D(A)$, giving $D(L_zA)=D(A)\cap D(AL_z)$. The stated $m=0$ counterexample shows these maximal domains can differ. To verify that the product condition is not automatic on $D(A)\cap D(L_z)$, take $c_{ll}=l^{-3}$ for $l\ge1$ and every other coefficient zero: the separate domain sums are bounded by constants times $\sum l^{-2}$ and $\sum l^{-4}$, respectively, but the product sum has terms $\hbar^2(l+1)^2/l^2\ge\hbar^2$ and diverges. [step 1.1, step 2.1, F1, F6, algebra] ∎
