---
id: thm-csm-examples-spherical-marginal
kind: theorem
title: "Exact spherical-shell coordinate marginal and fixed-block Gaussian limit"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-csm-examples-gamma-gaussian-tools
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - def-countable-choice
dependency_roles:
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §5.2(i), Euler's integral"
      url: "https://dlmf.nist.gov/5.2"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 13 (Fall 2013), IV.D"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/0cdb670a825c6aaea7e229ac40776cbf_MIT8_333F13_Lec13.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]]. Let $D\ge2$, $1\le k<D$, and $R>0$. Let $Z_1,\ldots,Z_D$ be independent real random variables with common Lebesgue probability density $\phi(x):=(2\pi)^{-1/2}e^{-x^2/2}$; its integral is one by the Gaussian integral in [[lem-csm-examples-gamma-gaussian-tools]], and this is the standard-normal coordinate law. Set $Z=(Z_1,\ldots,Z_D)$ and define $P:=RZ/|Z|$ when $Z\ne0$, and $P:=0$ when $Z=0$. The joint density of $Z$ makes $\mathbb P(Z=0)=0$. The distribution of $P$ is rotationally invariant, meaning that for every orthogonal map $Q\in O(D)$ and Borel set $A\subseteq\mathbb R^D$, $\mathbb P(QP\in A)=\mathbb P(P\in A)$. It is concentrated on the sphere in the precise sense that $\mathbb P(|P|=R)=1$. Its first $k$ coordinates have Lebesgue density

$$f_{D,k}(y)=\frac{\Gamma(D/2)}{\Gamma((D-k)/2)(\pi R^2)^{k/2}}\left(1-\frac{|y|^2}{R^2}\right)^{(D-k-2)/2}\quad (|y|<R),$$

and zero for $|y|\ge R$. This density is integrable even when it diverges at the boundary. Also $\mathbb E[P_i]=0$, $\mathbb E[P_iP_j]=0$ for $i\ne j$, and $\mathbb E[P_i^2]=R^2/D$.

For fixed $k$ and $\sigma>0$, set $R_D=\sqrt D\,\sigma$ and let $D\to\infty$ through integers $D>k$. If $g:\mathbb R^k\to\mathbb R$ is bounded and Lipschitz in the Euclidean norm, meaning that finite constants $B_g,L_g$ satisfy $|g(x)|\le B_g$ and $|g(x)-g(y)|\le L_g|x-y|$ for all $x,y\in\mathbb R^k$, then

$$\mathbb E\,g\bigl((P_1,\ldots,P_k)\bigr)\longrightarrow\mathbb E\,g\bigl(\sigma(Z_1,\ldots,Z_k)\bigr).$$

This is a fixed-block bounded-Lipschitz test limit; it makes no claim uniform in $k$ or for unbounded test functions. If $k=D$, the projection is singular on the sphere and the displayed Lebesgue density is not asserted.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$, integers $D,k$ with $D\ge2$ and $1\le k<D$, radius $R>0$, and the product probability law of $D$ independent coordinates with density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$.

[F1] [[lem-csm-examples-gamma-gaussian-tools]]: $\Gamma(a)$ is finite for $a>0$, $\Gamma(1/2)=\sqrt\pi$, positive gamma densities with the same scale convolve by adding their shape parameters, and the Gaussian second and fourth moments are $1$ and $3$ for a standard normal coordinate.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: assuming $\mathrm{AC}_\omega$, for a $C^1$ diffeomorphism $T:U\to V$ between open subsets of Euclidean space and nonnegative Lebesgue-measurable $f$ on $V$, the Lebesgue integral transforms by $|\det DT|$.

[F3] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]: assuming $\mathrm{AC}_\omega$, product Lebesgue measure and Euclidean Lebesgue measure agree on Borel subsets of $\mathbb R^{m+n}$ for positive integers $m,n$.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for a nonnegative product-measurable function on a product of sigma-finite measure spaces, either order of integration agrees with the product integral.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says every sequence of nonempty sets has a choice function; it is the explicit set-theoretic hypothesis used by [F2].

## Proof
1.1 Under Countable Choice [F5], the Borel product-measure identity [F3] and independence give the joint Lebesgue density $\phi_D(z)=(2\pi)^{-D/2}e^{-|z|^2/2}$. A singleton has Lebesgue measure zero, so $Z\ne0$ almost surely. For any orthogonal $Q$ and Borel $A\subseteq\mathbb R^D$, the map $Q^{-1}:\mathbb R^D\to\mathbb R^D$ is a $C^1$ diffeomorphism with $|\det Q^{-1}|=1$; applying [F2] to $\mathbf 1_A\phi_D$ and using $|Q^{-1}z|=|z|$ gives $\mathbb P(QZ\in A)=\mathbb P(Z\in A)$. Since $Q(RZ/|Z|)=RQZ/|QZ|$ off the null event, the law of $P$ is invariant under every orthogonal map, and $|P|=R$ almost surely. [given, F2, F3, F5, algebra]



1.2 Write $Z=(A,B)$ with $A\in\mathbb R^k$ and $B\in\mathbb R^{D-k}$. The vectors are independent. On each open half-line $(0,\infty)$ and $(-\infty,0)$, the map $z\mapsto z^2/2$ is a $C^1$ diffeomorphism onto $(0,\infty)$; applying [F2] to the Gaussian density times the indicator of any Borel target set on each branch shows that each $Z_j^2/2$ has density $w^{-1/2}e^{-w}/\Gamma(1/2)$. Repeated gamma convolution from [F1] then shows $T:=|B|^2$ has density $t^{b-1}e^{-t/2}/(2^b\Gamma(b))$ for $t>0$, where $b=(D-k)/2$, independently of $A$. [F1, F2, algebra]



1.3 For fixed $t>0$, the first $k$ coordinates $y=RA/\sqrt{|A|^2+t}$ range over $|y|<R$. The inverse is $A=\sqrt t\,y/\sqrt{R^2-|y|^2}$. Its derivative has radial eigenvalue $\sqrt t\,R^2/(R^2-|y|^2)^{3/2}$ and $k-1$ tangential eigenvalues $\sqrt t/(R^2-|y|^2)^{1/2}$, hence Jacobian $t^{k/2}R^2/(R^2-|y|^2)^{k/2+1}$. [given, construct, algebra]



2.1 The map $\Psi(y,t):=(A(y,t),t)$ from $U:=\{(y,t):|y|<R,\ t>0\}$ to $V:=\mathbb R^k\times(0,\infty)$ is a $C^1$ diffeomorphism, with inverse $(a,t)\mapsto(Ra/\sqrt{|a|^2+t},t)$. Apply [F2] to the nonnegative joint density of $(A,T)$ and this diffeomorphism. The product Lebesgue measure on $\mathbb R^k\times(0,\infty)$ agrees with Euclidean Lebesgue measure on Borel sets by [F3], and Tonelli's theorem [F4] gives the marginal density by integration in $t$. Substituting the Gaussian density of $A$, the gamma density of $T$, and the Jacobian from step 1.3 yields $f_{D,k}(y)=\frac{R^2}{(2\pi)^{k/2}2^b\Gamma(b)(R^2-|y|^2)^{k/2+1}}\int_0^\infty t^{D/2-1}\exp\!\left(-\frac{tR^2}{2(R^2-|y|^2)}\right)dt$. The substitution $u=tR^2/[2(R^2-|y|^2)]$ evaluates the integral as $\Gamma(D/2)[2(R^2-|y|^2)/R^2]^{D/2}$. Since $D/2=k/2+b$, simplification gives the displayed density. Its boundary singularity, when present, has exponent $b-1>-1$ and is integrable in the radial variable; the pushforward construction shows total mass one. Because $T=|B|^2>0$ almost surely, the marginal has no boundary atom at $|y|=R$. [F1, F2, F3, F4, step 1.2, step 1.3, algebra]



2.2 Sign changes of one Gaussian coordinate show $\mathbb E[P_i]=0$ and $\mathbb E[P_iP_j]=0$ for $i\ne j$. Permutation invariance makes all $\mathbb E[P_i^2]$ equal, while $\sum_{i=1}^D P_i^2=R^2$ almost surely; summing expectations gives $\mathbb E[P_i^2]=R^2/D$. [step 1.1, given, algebra]



3.1 For each finite $D$, take the product Gaussian vector $Z=(Z_1,\ldots,Z_D)$ in that dimension and set $S_D:=D^{-1}\sum_{i=1}^D Z_i^2$. By [F1] and independence, $\mathbb E S_D=1$, $\mathbb E[(S_D-1)^2]=2/D$, and $\mathbb E|Z_{1:k}|^2=k$. Fix $0<\delta<1/2$ and $M>0$. On $E_D=\{|Z_{1:k}|\le M,\ |S_D-1|\le\delta\}$, $S_D\in[1/2,3/2]$ and the identity $|u^{-1/2}-1|=|u-1|/[\sqrt u(1+\sqrt u)]$ gives $|S_D^{-1/2}-1|\le\sqrt2\delta$; hence $|\sigma Z_{1:k}/\sqrt{S_D}-\sigma Z_{1:k}|\le\sqrt2\sigma M\delta$. If $g$ is bounded Lipschitz with bound $B_g$ and Lipschitz constant $L_g$, then $M^2\mathbf 1_{\{|Z_{1:k}|>M\}}\le |Z_{1:k}|^2$ and $\delta^2\mathbf 1_{\{|S_D-1|>\delta\}}\le(S_D-1)^2$ imply $\mathbb P(E_D^c)\le k/M^2+2/(D\delta^2)$. Therefore $|\mathbb E g(P_{1:k})-\mathbb E g(\sigma Z_{1:k})|\le L_g\sqrt2\sigma M\delta+2B_g\left(\frac{k}{M^2}+\frac{2}{D\delta^2}\right)$. Choose $M$ large, then $\delta$ small, then $D$ large. The right side becomes arbitrarily small, proving the stated test convergence without assuming independence between $Z_{1:k}$ and $S_D$. [F1, step 1.1, algebra] ∎

## Remarks

This is a specified rotational Gaussian-direction preparation. It is not a general coarea formula, a proof that every energy-shell measure has this marginal, or a dynamical equilibration result.
