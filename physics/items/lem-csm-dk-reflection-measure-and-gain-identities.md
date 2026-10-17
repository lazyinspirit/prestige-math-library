---
id: lem-csm-dk-reflection-measure-and-gain-identities
kind: lemma
title: "Well-defined elastic reflection gain and collision identities"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-reflection-collision-gain
  - def-countable-choice
  - thm-completion-measurable-functions-have-base-measurable-representatives
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
dependency_roles:
  def-csm-dk-reflection-collision-gain: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-completion-measurable-functions-have-base-measurable-representatives: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Statement

Let $\mathcal G$, $v'$, $w'$, $X$, $w_0$, and $\mu$ be as in [[def-csm-dk-reflection-collision-gain]]. For $f,g\in X$, the gain is independent of the chosen Borel representatives, is bilinear, and satisfies

$$\|\mathcal G(f,g)\|_{1,w_0}\le 2\|f\|_{1,w_0}\|g\|_{1,w_0}.$$

For $f\ge0$ with finite mass $M=\int f\,dv$ and finite second moment, it also satisfies

$$\int\mathcal G(f,f)\,dv=M^2,\qquad \int v\mathcal G(f,f)\,dv=M\int vf\,dv,\qquad \int |v|^2\mathcal G(f,f)\,dv=M\int |v|^2f\,dv.$$

If $M=1$, set $A=f(v)f(w)$, $B=f(v')f(w')$, and $\Delta\varphi=\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w')$. For every real-valued measurable test $\varphi$ such that

$$\int_{\mathbb R^3}|\varphi(v)|\mathcal G(f,f)(v)\,dv<\infty,\qquad \int_{\mathbb R^3}|\varphi(v)|f(v)\,dv<\infty,\qquad \int |A\Delta\varphi|\,d\mu<\infty,\qquad \int |B\Delta\varphi|\,d\mu<\infty,$$

the following identity holds:

$$\int_{\mathbb R^3}\varphi(v)\bigl(\mathcal G(f,f)(v)-f(v)\bigr)\,dv=\frac14\int (B-A)\Delta\varphi\,d\mu.$$

For each fixed $n$, the map $(v,w)\mapsto(v',w')$ is a linear orthogonal involution, preserves $v+w$ and $|v|^2+|w|^2$, and has Jacobian determinant of absolute value one. The angular measure has full support, hence the product parameter measure $\mu$ has full support on $\mathbb R^3\times\mathbb R^3\times S^2$. Every pair $(v,w)$ and $(\widetilde v,\widetilde w)$ with the same momentum and squared-speed sum is related by one such reflection.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a reference speed $v_0>0$, elements of the weighted space $X$, and the collision parameterization of [[def-csm-dk-reflection-collision-gain]].

[A1] Assume the Axiom of Countable Choice ([[def-countable-choice]]), as required by the completed Lebesgue product and measurable change-of-variables suppliers used below.

[F1] [[def-csm-dk-reflection-collision-gain]]: $v'=v-((v-w)\cdot n)n$, $w'=w+((v-w)\cdot n)n$, $d\mu=dv\,dw\,d\sigma(n)$, and $\mathcal G(f,g)(v)=\int f(v')g(w')\,dw\,d\sigma(n)$.

[F2] [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]] and [[thm-completion-measurable-functions-have-base-measurable-representatives]]: under $\mathrm{AC}_\omega$, Lebesgue measurable sets are the completion of Borel sets, and each completed-measurable function is almost-everywhere equal to a Borel-measurable representative.

[F3] [[thm-tonelli-and-fubini-for-completed-product-measures]]: for sigma-finite factors, nonnegative measurable functions and integrable functions on the completed product have measurable sections and equal iterated integrals outside the stated null exceptional sections.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism $T:U\to V$ satisfies $\int_V h(y)\,dy=\int_U h(T(x))|\det DT(x)|\,dx$ for every nonnegative Lebesgue measurable $h$.

## Proof

**Given:** [A1], $v_0>0$, and [F1]–[F4].

**Proof technique:** direct.

1.1 Put $c=(v+w)/2$ and $r=(v-w)/2$. The formulas in [F1] give $v'=c+r-2(r\cdot n)n$ and $w'=c-r+2(r\cdot n)n$. The map $r\mapsto r-2(r\cdot n)n$ is reflection across the plane perpendicular to $n$: applying it twice returns $r$, and its squared norm is $|r|^2$. The center $c$ is fixed. Hence the pair map is an orthogonal involution on $\mathbb R^6$, its determinant has absolute value one, $v'+w'=v+w$, and $|v'|^2+|w'|^2=|v|^2+|w|^2$. [F1, algebra]

1.2 The defining integral of $\sigma$ has total mass $(4\pi)^{-1}(2)(2\pi)=1$. Every nonempty relative-open subset of $S^2$ contains a patch away from a coordinate pole and seam; its preimage contains an open rectangle on which $\sin\theta>0$, so it has positive $\sigma$-measure. Every nonempty open subset of the full parameter space contains a product of two Euclidean balls and such a sphere patch; each factor has positive measure, so $\mu$ has full support. For an elastic pair, set $c=(v+w)/2$, $r=(v-w)/2$, and $\tilde r=(\tilde v-\tilde w)/2$. Momentum and squared-speed conservation give the same center and $|\tilde r|=|r|$. If $\tilde r\ne r$, choose $n=(r-\tilde r)/|r-\tilde r|$; the equal-norm identity gives $2(r\cdot n)n=r-\tilde r$, hence the reflection sends $r$ to $\tilde r$. If $\tilde r=r$, choose any unit $n$ perpendicular to $r$ when $r\ne0$, and any unit $n$ when $r=0$. Thus every elastic pair is attained. [F1, construct, algebra]

2.1 For each fixed $n$, let $T_n(v,w)=(v',w')$. If $h\in L^1(\mathbb R^6)$ is real-valued, write $h=h^+-h^-$, where $h^+=\max(h,0)$ and $h^-=\max(-h,0)$. Applying [F4] to $|h|$ shows that $h\circ T_n$ is absolutely integrable because $T_n$ has unit absolute Jacobian. Applying [F4] separately to $h^+$ and $h^-$, whose integrals are finite, and subtracting gives
$$\int_{\mathbb R^6}h(T_n(v,w))\,dv\,dw=\int_{\mathbb R^6}h(v,w)\,dv\,dw.$$
By [F2], choose a finite Borel representative $h_0$ equal to $h$ almost everywhere. For every fixed $n$, [F4] gives the same change-of-variables equality for $h_0$, hence for $h$. The map $(v,w,n)\mapsto h_0(T_n(v,w))$ is Borel, and [F4] gives $\int_{\mathbb R^6}|h_0(T_n(v,w))|\,dv\,dw=\|h_0\|_1$ for every $n$. Since $\sigma(S^2)=1$, [F3] permits integration of this absolutely integrable identity in $n$. Thus the cited nonnegative change-of-variables result has the signed $L^1$ consequence used below. [F1, F2, F3, F4, step 1.1, algebra]

2.2 Replace the representatives of $f$ and $g$ by Borel representatives using [F2]. Tonelli [F3] makes the sections measurable and permits integration in any order. For each fixed $n$, the pair reflection in step 1.1 is a $C^1$ diffeomorphism with unit absolute Jacobian, so [F4] gives $$\int_{\mathbb R^6} h(v',w')\,dv\,dw=\int_{\mathbb R^6}h(v,w)\,dv\,dw.$$ It follows that $\int |\mathcal G(f,g)|\,dv\le\|f\|_1\|g\|_1$. The same change of variables shows that altering either representative on a Lebesgue-null set changes the integrand only on a $\mu$-null set; therefore the output class is independent of representatives. Bilinearity follows from linearity of the integral. Since $|v|^2\le |v'|^2+|w'|^2$, one has $w_0(v)\le w_0(v')+w_0(w')$. Applying Tonelli and [F4] again gives $$\|\mathcal G(f,g)\|_{1,w_0}\le \|f\|_{1,w_0}\|g\|_1+\|f\|_1\|g\|_{1,w_0}\le2\|f\|_{1,w_0}\|g\|_{1,w_0}.$$ The same bounds applied to $|f|,|g|$ define the signed bilinear extension. [A1, F2, F3, F4, step 1.1, algebra]

3.1 For $f\ge0$, use Tonelli and the unit-Jacobian involution to obtain $\int\mathcal G(f,f)\,dv=\int f(v)f(w)\,dv\,dw=M^2$. For the first moment, the same change of variables gives $\int v\mathcal G(f,f)\,dv=\int v'f(v)f(w)\,d\mu$. The simultaneous exchange $(v,w,n)\mapsto(w,v,n)$ preserves $\mu$ and swaps $v'$ with $w'$, while $f(v)f(w)$ is unchanged. Averaging the two expressions replaces $v'$ by $(v'+w')/2=(v+w)/2$, yielding $M\int vf\,dv$. Applying the same averaging to the second moment uses $(|v'|^2+|w'|^2)/2=(|v|^2+|w|^2)/2$ and gives $M\int|v|^2f\,dv$. The first-moment change of variables is applied coordinatewise to signed integrable functions; finiteness follows from the finite mass and second moment. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Let $M=1$ and let $\varphi$ satisfy the four absolute-integrability conditions in the Statement. By [F2], choose a finite Borel representative $\varphi_0$ equal to $\varphi$ almost everywhere. The Lebesgue integrals weighted by $f$ or $\mathcal G(f,f)$ are unchanged, and the products with $A$ or $B$ agree $\mu$-almost everywhere: the unprimed exceptional sets are null by Tonelli, while for each fixed $n$ the primed exceptional sets are null by the measure-preserving involution in step 1.1, so Tonelli makes their union $\mu$-null. Thus it suffices to prove the identity for $\varphi_0$. Tonelli and the gain definition give $\int\varphi_0(v)\mathcal G(f,f)(v)\,dv=\int\varphi_0(v)B\,d\mu$. By Tonelli, $h_n(v,w)=\varphi_0(v)f(v')f(w')$ belongs to $L^1(\mathbb R^6)$ for $\sigma$-almost every $n$, since its absolute integral over $n,v,w$ is $\int|\varphi_0|\mathcal G(f,f)\,dv<\infty$. For those $n$, step 2.1 applied to $h_n$ gives $\int\varphi_0(v)f(v')f(w')\,dv\,dw=\int\varphi_0(v')f(v)f(w)\,dv\,dw$; the fixed-$n$ change of variables also shows the right side is absolutely integrable. Fubini then gives $\int\varphi_0(v)B\,d\mu=\int\varphi_0(v')A\,d\mu$. The loss term is $\int\varphi_0(v)A\,d\mu$ because $\int f=1$ and $\sigma(S^2)=1$. The stated integrability conditions make these terms absolutely integrable; particle exchange gives the same for the $w'$ and $w$ terms, and the conditions on $A\Delta\varphi_0$ and $B\Delta\varphi_0$ make the incoming/outgoing change of variables integrable. Averaging the difference with its image under simultaneous particle exchange yields $\frac12\int A[\varphi_0(v')+\varphi_0(w')-\varphi_0(v)-\varphi_0(w)]\,d\mu=-\frac12\int A\Delta\varphi_0\,d\mu$. The incoming/outgoing involution sends $A$ to $B$ and $\Delta\varphi_0$ to $-\Delta\varphi_0$, so $\int(B-A)\Delta\varphi_0\,d\mu=-2\int A\Delta\varphi_0\,d\mu$. Combining these equalities gives the claimed factor $1/4$ identity. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
