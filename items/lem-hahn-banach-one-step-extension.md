---
id: lem-hahn-banach-one-step-extension
kind: lemma
title: "The admissible values in a one-step Hahn-Banach extension form a nonempty interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sublinear-functional, def-algebraic-dual-and-linear-functional,
       def-linear-subspace]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.1(a)"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Section 4.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Let $X$ be a real vector space, let $M \subseteq X$ be a linear subspace, let
$p:X \to \mathbb{R}$ be sublinear, and let $f:M \to \mathbb{R}$ be linear with
$f(m) \le p(m)$ for every $m \in M$. Fix $x_0 \in X \setminus M$ and put
$N:=M+\mathbb{R}x_0$.

For $c \in \mathbb{R}$ define

$$F_c(m+tx_0):=f(m)+tc \qquad (m \in M,\ t \in \mathbb{R}).$$

This is well defined, and with

$$\alpha:=\sup_{y \in M}\bigl(f(y)-p(y-x_0)\bigr), \qquad \beta:=\inf_{z \in M}\bigl(p(z+x_0)-f(z)\bigr),$$

one has $\alpha \le \beta$. Moreover,
$F_c(n) \le p(n)$ for every $n \in N$ if and only if $\alpha \le c \le \beta$.
In particular the admissible values of $F_c(x_0)=c$ form the nonempty interval
$[\alpha,\beta]$.

## Facts & Assumptions

**Given:** A real vector space $X$, a linear subspace $M \subseteq X$, a sublinear functional $p:X \to \mathbb{R}$, a linear functional $f:M \to \mathbb{R}$ with $f \le p$ on $M$, and a point $x_0 \in X \setminus M$.

[L1] A sublinear functional satisfies $p(u+v) \le p(u)+p(v)$ and $p(tu)=tp(u)$ for every real $t \ge 0$ ([[def-sublinear-functional]]).

[L2] A linear functional is additive and homogeneous over the scalar field ([[def-algebraic-dual-and-linear-functional]]).

[L3] A linear subspace is closed under addition and scalar multiplication ([[def-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 If $m+tx_0=m'+t'x_0$ with $m,m' \in M$ and $t,t' \in \mathbb{R}$, then $m-m'=(t'-t)x_0 \in M$. If $t \ne t'$, closure under scalar multiplication from [L3] gives $x_0 \in M$, contradicting the hypothesis. So $t=t'$ and then $m=m'$. Therefore every element of $N$ has a unique representation $m+tx_0$, and $F_c$ is well defined. [L3, given, construct]

1.2 For $y,z \in M$, one has $$F_c(y-x_0)=f(y)-c \qquad \text{and} \qquad F_c(z+x_0)=f(z)+c.$$ Therefore $$F_c(y-x_0) \le p(y-x_0) \iff f(y)-p(y-x_0) \le c,$$ and $$F_c(z+x_0) \le p(z+x_0) \iff c \le p(z+x_0)-f(z).$$ [L2, given, algebra]

1.3 Let $y,z \in M$. Since $y+z \in M$ by [L3], linearity and domination on $M$ give $$f(y)+f(z)=f(y+z) \le p(y+z).$$ Also $$y+z=(y-x_0)+(z+x_0),$$ so subadditivity from [L1] yields $$p(y+z) \le p(y-x_0)+p(z+x_0).$$ Combining these inequalities gives $$f(y)-p(y-x_0) \le p(z+x_0)-f(z).$$ Hence every lower endpoint is at most every upper endpoint. [L1, L2, L3, given, algebra]

2.1 Suppose first that the two inequalities from step 1.2 hold for every $y,z \in M$. Let $m+tx_0 \in N$. If $t>0$, then $$m+tx_0=t\left(\frac{m}{t}+x_0\right),$$ so by linearity and positive homogeneity, $$F_c(m+tx_0)=tF_c\left(\frac{m}{t}+x_0\right) \le tp\left(\frac{m}{t}+x_0\right)=p(m+tx_0).$$ If $t<0$, then $$m+tx_0=(-t)\left(\frac{-m}{t}-x_0\right),$$ so the lower-bound half of step 1.2 applied to $y:=-m/t$ gives $$F_c(m+tx_0)=(-t)F_c\left(\frac{-m}{t}-x_0\right) \le (-t)p\left(\frac{-m}{t}-x_0\right)=p(m+tx_0).$$ If $t=0$, then $m+tx_0=m \in M$, so the hypothesis $f \le p$ gives $F_c(m)=f(m) \le p(m)$. Thus $F_c \le p$ on $N$. Conversely, if $F_c \le p$ on $N$, then applying that inequality to $y-x_0$ and $z+x_0$ yields the two inequalities in step 1.2. [step 1.2, L1, L2, given, algebra]

3.1 Step 1.3 shows that the set of lower endpoints is bounded above by every upper endpoint, and the set of upper endpoints is bounded below by every lower endpoint. Completeness of $\mathbb{R}$ therefore gives real numbers $\alpha \le \beta$ with the displayed formulas in the statement. By step 2.1, a real number $c$ is admissible exactly when it lies between every lower endpoint and every upper endpoint, that is, exactly when $\alpha \le c \le \beta$. Therefore the admissible values form the nonempty interval $[\alpha,\beta]$. [step 2.1, step 1.3] ∎
