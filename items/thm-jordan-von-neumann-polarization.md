---
id: thm-jordan-von-neumann-polarization
kind: theorem
title: "Jordan–von Neumann: a norm is induced by an inner product exactly when it satisfies the parallelogram law"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-parallelogram-law, def-real-and-complex-inner-product-space, def-inner-product-norm, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention, lem-rat-embeds-dense, cor-archimedean-reciprocal, lem-complex-conjugation-and-modulus-laws, lem-of-square-monotone, thm-of-square-roots]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, p.39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 15"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Let $V$ be a real or complex vector space with a norm $\|\cdot\|$. Then $\|\cdot\|$ is induced by an inner product on $V$ if and only if it satisfies the parallelogram law

$$\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2 \qquad (x,y\in V).$$

In that case the inner product is unique, and it is given by the real polarisation formula

$$\langle x,y\rangle=\tfrac14\bigl(\|x+y\|^2-\|x-y\|^2\bigr)$$

in the real case, and by the complex polarisation formula

$$\langle x,y\rangle=\tfrac14\bigl(\|x+y\|^2-\|x-y\|^2+i\|x+iy\|^2-i\|x-iy\|^2\bigr)$$

in the complex case with the first-variable-linear convention.

## Facts & Assumptions

[A1] In a real or complex inner-product space the pairing is linear in the first argument, conjugate-linear in the second, conjugate symmetric and positive definite, and $\|v\|^2=\langle v,v\rangle$ ([[def-real-and-complex-inner-product-space]]).

[A2] The induced length is the unique nonnegative square root of the diagonal pairing ([[def-inner-product-norm]]).

[A3] A norm satisfies $q(\lambda z)=|\lambda|^2q(z)$ for $q(z)=\|z\|^2$, in particular $q(0)=0$, $q(-z)=q(z)$ and $q(iz)=q(z)$ in the complex case, and it satisfies the triangle inequality; complex normed spaces follow the scalar convention of the remark ([[def-norm-and-normed-space]], [[rem-real-and-complex-normed-space-convention]]).

[A4] Every real or complex inner-product norm satisfies the parallelogram law ([[thm-parallelogram-law]]).

[A5] Every real number is approximated by rationals: for $x\in\mathbb R$ and rational $\varepsilon>0$ there is a rational $q$ with $|x-q|<\varepsilon$ ([[lem-rat-embeds-dense]]).

[A6] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[A7] For complex scalars $|z|^2=z\overline z$, $|z|\ge0$, and $|i|=1$ ([[lem-complex-conjugation-and-modulus-laws]]).

[A8] For nonnegative reals $a\le b$ if and only if $a^2\le b^2$; every nonnegative real has a unique nonnegative square root ([[lem-of-square-monotone]], [[thm-of-square-roots]]).

## Proof

**Proof technique:** direct.

**Given:** A real or complex vector space $V$ with a norm $\|\cdot\|$; write $q(z)=\|z\|^2$. The real case is proved first, then the complex case, and finally necessity.

1.1 Assume first that $V$ is real and satisfies the parallelogram law, and define $b(x,y)=\tfrac14(q(x+y)-q(x-y))$; then $b(x,x)=q(x)$, $b(y,x)=b(x,y)$, $b(-x,y)=b(x,-y)=-b(x,y)$, $b(0,y)=0$, and $q(\lambda z)=\lambda^2q(z)$ for real $\lambda$. [A3, A4, algebra]

1.2 Applying the parallelogram law to the four pairs $(p+q,r)$, $(p-q,r)$, $(p+r,q)$ and $(p-r,q)$ and subtracting the second identity from the fourth gives $8b(p,r)=4b(p+q,r)+4b(p-q,r)$, that is $b(p+q,r)+b(p-q,r)=2b(p,r)$ for all $p,q,r$. [A4, algebra]

2.1 Adding that identity at $(p,q)=(u,v)$ and at $(p,q)=(v,u)$ gives $b(u+v,w)+b(v-u,w)=2b(v,w)$ and $b(u+v,w)+b(u-v,w)=2b(u,w)$; since $b(v-u,w)=-b(u-v,w)$ by step 1.1, the two relations add to $2b(u+v,w)=2b(u,w)+2b(v,w)$, so $b(u+v,w)=b(u,w)+b(v,w)$, and symmetry gives additivity in the second argument as well. [step 1.2, step 1.1, algebra]

3.1 Induction on the natural number $n\ge0$ using step 2.1 gives $b(nx,y)=nb(x,y)$, and $b(-x,y)=-b(x,y)$ is step 1.1, so $b(mx,y)=mb(x,y)$ for every integer $m$. [step 2.1, step 1.1, algebra]

4.1 For $n\ge1$ the additivity of step 2.1 gives $n\,b(x/n,y)=b(x,y)$, so $b(x/n,y)=b(x,y)/n$, and together with step 3.1 this yields $b(rx,y)=rb(x,y)$ for every rational $r$. [step 3.1, step 2.1, algebra]

5.1 Consequently for every rational $t$ the form $b$ is a symmetric rational-bilinear pairing with $b(w+ty,w+ty)=b(w,w)+2t\,b(w,y)+t^2b(y,y)$, that is $q(w+ty)=q(w)+2t\,b(w,y)+t^2q(y)$ by steps 1.1 and 4.1. [step 4.1, step 1.1, algebra]

6.1 If $q(y)>0$, put $C=q(w)-b(w,y)^2/q(y)$ and $t^*=-b(w,y)/q(y)$, so that step 5.1 reads $q(y)(t-t^*)^2+C\ge0$ for every rational $t$; rationals approach $t^*$ within any $\delta>0$ by [A5], whence $C>-q(y)\delta^2$ for every $\delta>0$, and $C\ge0$ because a negative $C$ would give $q(y)\delta^2<-C$ for some $\delta>0$ by [A6]; if instead $q(y)=0$ then $q(w)+2tb(w,y)\ge0$ for all rational $t$ forces $b(w,y)=0$, since otherwise [A6] supplies a rational $t$ with $2tb(w,y)<-q(w)$; in both cases $b(w,y)^2\le q(w)q(y)$, so $|b(w,y)|\le\|w\|\,\|y\|$ by [A8]. [step 5.1, A5, A6, A8, algebra]

7.1 For fixed $x,y$ the map $\varphi(\lambda)=b(\lambda x,y)$ is additive in $\lambda$ by step 2.1 and satisfies $|\varphi(\lambda)|\le|\lambda|\,\|x\|\,\|y\|$ by step 6.1, hence $|\varphi(h)|\le\|x\|\,\|y\|$ for $|h|\le1$; given $\varepsilon>0$ choose $n\ge1$ with $\|x\|\,\|y\|/n<\varepsilon$ by [A6], then $|h|\le1/n$ gives $|\varphi(h)|=|\varphi(nh)|/n\le\|x\|\,\|y\|/n<\varepsilon$, so $\varphi$ is continuous at $0$. [step 2.1, step 6.1, A6, algebra]

8.1 For real $\lambda$ and rational $r$ one has $|\varphi(\lambda)-\lambda\varphi(1)|\le|\varphi(\lambda-r)|+|r-\lambda|\,|\varphi(1)|$ with $\varphi(r)=r\varphi(1)$ by step 4.1, so continuity at $0$ from step 7.1 and the rational approximation of $\lambda$ from [A5] give $\varphi(\lambda)=\lambda\varphi(1)$, that is $b(\lambda x,y)=\lambda b(x,y)$ for every real $\lambda$. [step 7.1, step 4.1, A5, algebra]

9.1 Therefore, in the real case, $b$ is symmetric, additive in each argument and real-homogeneous in the first argument, with $b(x,x)=q(x)\ge0$ and $b(x,x)=0$ exactly for $x=0$; so $b$ is a real inner product on $V$ whose induced length is the given norm $\|x\|=\sqrt{b(x,x)}$. [step 1.1, step 2.1, step 8.1, A1, A2, A3, algebra]

10.1 Now let $V$ be complex with a norm satisfying the parallelogram law; viewing $V$ as a real vector space with the same norm, to which step 9.1 applies, gives a real inner product $b$ with $b(x,x)=q(x)$, and $q(iz)=q(z)$ together with the definition of $b$ gives $b(iu,iv)=b(u,v)$, hence $b(iu,v)=-b(u,iv)$ by the argument $b(iu,v)=b(i(iu),iv)=b(-u,iv)=-b(u,iv)$. [step 9.1, A3, A7, algebra]

11.1 Define $\langle x,y\rangle=b(x,y)-i\,b(ix,y)$; then additivity in both arguments and $\langle ix,y\rangle=i\langle x,y\rangle$ follow from the real bilinearity of $b$, and conjugate symmetry $\langle y,x\rangle=\overline{\langle x,y\rangle}$ follows from $b(y,x)=b(x,y)$ and from $b(iy,x)=-b(y,ix)=-b(ix,y)$ in step 10.1. [step 10.1, algebra]

12.1 Positivity: $\langle x,x\rangle=b(x,x)-i\,b(ix,x)=q(x)$ because $b(ix,x)=-b(x,ix)$ and $b(x,ix)=b(ix,x)$ force $b(ix,x)=0$; hence $\langle\cdot,\cdot\rangle$ is a complex inner product whose induced length is $\|x\|$, and expanding $b$ in terms of $q$ gives the complex polarisation formula $\langle x,y\rangle=\tfrac14(q(x+y)-q(x-y)+i\,q(x+iy)-i\,q(x-iy))$. [step 11.1, step 10.1, A1, A2, A7, algebra]

13.1 Conversely, if the given norm is induced by an inner product on $V$, then it satisfies the parallelogram law by [A4] and expanding the pairing in terms of $q$ recovers, in the real case, $\langle x,y\rangle=\tfrac14(q(x+y)-q(x-y))=b(x,y)$ and, in the complex case, the four-term formula of step 12.1; with steps 9.1 and 12.1 this proves that a real or complex norm is induced by an inner product exactly when it satisfies the parallelogram law, and that the polarisation formulas display that inner product. [A1, A2, A4, step 9.1, step 12.1] ∎
