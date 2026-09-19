---
id: thm-chain-sum-product-and-composition-rules-for-banach-derivatives
kind: theorem
title: Chain sum product and composition rules for Banach derivatives
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-frechet-derivative-between-banach-spaces, lem-the-frechet-derivative-is-unique, def-bounded-bilinear-map, thm-bounded-bilinear-map-equivalences, lem-composition-operator-norm-inequality, def-norm-and-normed-space, def-operator-norm, def-space-of-bounded-linear-operators]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §§2.1.1–2.1.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Statement

Let $U \subseteq X$ be open in a real Banach space $X$, and let $Y$, $Z$, $W$ be
real Banach spaces. Then:

1. **Sum rule.** If $f_1, f_2 : U \to Y$ are Fréchet differentiable at $x \in U$
   and $a, b \in \mathbb R$, then $af_1+bf_2$ is Fréchet differentiable at $x$
   with $D(af_1+bf_2)(x) = a\,Df_1(x) + b\,Df_2(x)$.
2. **Bounded-bilinear product rule.** If $f : U \to Y$ and $g : U \to Z$ are
   Fréchet differentiable at $x$, and $B : Y \times Z \to W$ is bounded
   bilinear, then $U \ni u \mapsto B(f(u),g(u))$ is Fréchet differentiable at
   $x$ and

$$D\bigl(B(f,g)\bigr)(x)h = B\bigl(Df(x)h,\ g(x)\bigr) + B\bigl(f(x),\ Dg(x)h\bigr) \qquad (h \in X).$$

3. **Chain rule.** If $f : U \to Y$ is Fréchet differentiable at $x$, if
   $W_0 \subseteq Y$ is an open set with $f[U] \subseteq W_0$, and if
   $g : W_0 \to Z$ is Fréchet differentiable at $f(x)$, then
   $g \circ f$ is Fréchet differentiable at $x$ and
   $$D(g \circ f)(x) = Dg\bigl(f(x)\bigr)\,Df(x).$$

No continuity of any derivative map is assumed; these are pointwise statements
about one $x$ at a time.

## Facts & Assumptions

**Given:** An open $U \subseteq X$ in a real Banach space $X$, real Banach spaces $Y, Z, W$, a point $x \in U$, maps $f_1,f_2 : U \to Y$, $f : U \to Y$, $g : U \to Z$ all differentiable at $x$, and a bounded bilinear $B : Y \times Z \to W$ with constant $C \ge 0$ for the estimate $\|B(u,v)\| \le C\|u\|\,\|v\|$ from [L3].

[L1] Fréchet differentiability at $x$ with derivative $T$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $\|f(x+h)-f(x)-Th\| \le \varepsilon\|h\|$ for every $h$ with $\|h\| < \delta$ and $x+h \in U$ ([[def-frechet-derivative-between-banach-spaces]]).

[L2] The norm satisfies the triangle inequality $\|u+v\| \le \|u\|+\|v\|$, absolute homogeneity $\|\lambda u\| = |\lambda|\,\|u\|$, and separation $\|u\| = 0 \Rightarrow u = 0$ ([[def-norm-and-normed-space]]).

[L3] A bounded bilinear map $B$ has a real constant $C \ge 0$ with $\|B(u,v)\| \le C\|u\|\,\|v\|$ for all $u,v$, and is jointly continuous ([[def-bounded-bilinear-map]], [[thm-bounded-bilinear-map-equivalences]]).

[L4] A composite of bounded linear operators is bounded linear, and $\|ST\| \le \|S\|\,\|T\|$; the operator norm satisfies $\|Tu\| \le \|T\|\,\|u\|$ ([[lem-composition-operator-norm-inequality]], [[def-operator-norm]], [[def-space-of-bounded-linear-operators]]).

[L5] If two bounded linear operators satisfy the Fréchet remainder condition for the same map at the same point, they are equal ([[lem-the-frechet-derivative-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, write $T := a\,Df_1(x) + b\,Df_2(x)$, a bounded linear operator by [L4], and $r(h) := af_1(x+h)+bf_2(x+h)-af_1(x)-bf_2(x)-Th$, which equals $a\,r_1(h)+b\,r_2(h)$ with $r_j(h) := f_j(x+h)-f_j(x)-Df_j(x)h$. Then $\|r(h)\|/\|h\| \le |a|\,\|r_1(h)\|/\|h\| + |b|\,\|r_2(h)\|/\|h\|$ for $h \ne 0$, and both terms tend to $0$ by [L1]; hence $af_1+bf_2$ is differentiable at $x$ with derivative $T$, which is claim 1. [L1, L2, L4, algebra]

1.2 For claim 2 define $L(h) := B(Df(x)h,\,g(x)) + B(f(x),\,Dg(x)h)$ for $h \in X$. Since $Df(x)$, $Dg(x)$ are linear and $B$ is bilinear, $L$ is linear, and $\|L(h)\| \le C\bigl(\|Df(x)\|\,\|g(x)\| + \|f(x)\|\,\|Dg(x)\|\bigr)\|h\|$ by [L3] and [L4], so $L$ is a bounded linear operator $X \to W$. [L3, L4, algebra]

1.3 For claim 3 let $T := Df(x)$ and $S := Dg(f(x))$, write $y := f(x)$, $R(k) := g(y+k)-g(y)-Sk$ for $k \in Y$ with $y+k \in W_0$, and $r(h) := f(x+h)-f(x)-Th$. Put $k(h) := f(x+h)-f(x) = Th + r(h)$; then $g(f(x+h)) - g(f(x)) - STh = S\,r(h) + R(k(h))$ identically in $h$. Given a real $\eta > 0$, apply [L1] for $g$ at $y$ with $\varepsilon := \eta/(2(\|T\|+1))$ to get $\delta_1 > 0$ with $\|R(k)\| \le \frac{\eta}{2(\|T\|+1)}\|k\|$ for $\|k\| < \delta_1$, and apply [L1] for $f$ at $x$ with $\varepsilon := 1$ and with $\varepsilon := \eta/(2(1+\|S\|))$ to get a single $\delta_2 > 0$ such that for $\|h\| < \delta_2$ both $\|k(h)\| \le (\|T\|+1)\|h\|$ and $\|r(h)\| \le \frac{\eta}{2(1+\|S\|)}\|h\|$ hold (take the smaller of the two thresholds). Then for $\|h\| < \min\{\delta_2, \delta_1/(\|T\|+1)\}$ one has $\|R(k(h))\| \le \frac{\eta}{2}\|h\|$ and $\|S\,r(h)\| \le \|S\|\,\|r(h)\| \le \frac{\eta}{2}\|h\|$, so $\|g(f(x+h))-g(f(x))-STh\| \le \eta\|h\|$. Hence the bounded linear operator $ST$ of [L4] satisfies the remainder condition for $g \circ f$ at $x$, and by [L5] it is the derivative, which is claim 3. [L1, L4, L5, algebra]

2.1 For claim 2 put $\Delta_f(h) := f(x+h)-f(x)$, $\Delta_g(h) := g(x+h)-g(x)$, so that $\Delta_f(h) = Df(x)h + r_f(h)$ and $\Delta_g(h) = Dg(x)h + r_g(h)$ with remainders $r_f, r_g$ as in [L1]. By bilinearity, expanding $B(f(x)+\Delta_f,\,g(x)+\Delta_g)$ gives $$B\bigl(f(x+h),g(x+h)\bigr) - B\bigl(f(x),g(x)\bigr) - L(h) = B\bigl(r_f(h),\,g(x)\bigr) + B\bigl(f(x),\,r_g(h)\bigr) + B\bigl(\Delta_f(h),\,\Delta_g(h)\bigr),$$ because $B(\Delta_f,g(x))=B(Df(x)h,g(x))+B(r_f,g(x))$ and likewise in the second variable, while the cross term is $B(\Delta_f,\Delta_g)$. [step 1.2, L3, algebra]

3.1 For $\|h\|$ small, [L1] with $\varepsilon = 1$ gives $\|\Delta_f(h)\| \le (\|Df(x)\|+1)\|h\|$ and $\|\Delta_g(h)\| \le (\|Dg(x)\|+1)\|h\|$. Combining this with [step 2.1] and [L3], $$\bigl\|B(f(x+h),g(x+h))-B(f(x),g(x))-L(h)\bigr\| \le C\|r_f(h)\|\,\|g(x)\| + C\|f(x)\|\,\|r_g(h)\| + C(\|Df(x)\|+1)(\|Dg(x)\|+1)\|h\|^2 .$$ Dividing by $\|h\|$ for $h \ne 0$ and letting $h \to 0$, every term tends to $0$ by [L1], so the left-hand side is $o(\|h\|)$ and the bounded linear operator $L$ of [step 1.2] satisfies the remainder condition for $B(f,g)$ at $x$; by [L5] it is the derivative, which is claim 2. [step 1.2, L1, L3, L5, algebra]

4.1 Claim 1 is [step 1.1], claim 2 is [step 3.1], and claim 3 is [step 1.3]; this is exactly the conjunction stated. [step 1.1, step 1.3, step 3.1] ∎
