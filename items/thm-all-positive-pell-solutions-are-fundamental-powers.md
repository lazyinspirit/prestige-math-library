---
id: thm-all-positive-pell-solutions-are-fundamental-powers
kind: theorem
title: "All positive Pell solutions are powers of the fundamental solution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fundamental-pell-solution, prop-integral-pell-solutions-form-a-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, I"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Statement

Let $\varepsilon_D=x_1+y_1\sqrt D$ be the fundamental Pell solution. Every
positive integral solution of
$$x^2-Dy^2=1$$
is equal to $\varepsilon_D^k$ for a unique integer $k\ge1$.

## Facts & Assumptions

**Given:** The fundamental Pell solution $\varepsilon_D=x_1+y_1\sqrt D$ and a positive Pell solution $\alpha=x+y\sqrt D$.

[F1] The element $\varepsilon_D$ is a positive nontrivial norm-one element of $\mathbb Z[\sqrt D]$, and its $x$-coordinate is minimal among positive Pell solutions ([[def-fundamental-pell-solution]]).

[F2] The norm-one elements of $\mathbb Z[\sqrt D]$ form an abelian group under multiplication ([[prop-integral-pell-solutions-form-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Because $\varepsilon_D>1$, the positive powers $$\alpha,\ \alpha\varepsilon_D^{-1},\ \alpha\varepsilon_D^{-2},\ldots$$ form a strictly decreasing sequence. By [F2], each term is again an integral norm-one element. If $\beta=u+v\sqrt D$ is any integral norm-one element with $\beta>1$, then $$0<\beta^{-1}=u-v\sqrt D<1,$$ so $$u=\frac{\beta+\beta^{-1}}2,\qquad v=\frac{\beta-\beta^{-1}}{2\sqrt D}>0.$$ Thus every term $>1$ in the displayed sequence is again a positive Pell solution. Their $x$-coordinates are positive integers and strictly decrease, because $1<\gamma<\delta$ with $N_D(\gamma)=N_D(\delta)=1$ implies $$\gamma^{-1}>\delta^{-1}>0,\qquad \gamma+\gamma^{-1}<\delta+\delta^{-1},$$ hence the corresponding $x$-coordinates satisfy $x(\gamma)<x(\delta)$. Therefore only finitely many indices $j\ge0$ satisfy $\alpha\varepsilon_D^{-j}>1$. The set $$K:=\{j\in\mathbb Z_{\ge0}:\alpha\varepsilon_D^{-j}\ge1\}$$ is nonempty because $0\in K$, so it has a greatest element $k$. Then $$1\le \alpha\varepsilon_D^{-k},$$ and maximality of $k$ gives $$\alpha\varepsilon_D^{-(k+1)}<1.$$ Multiplying the last inequality by $\varepsilon_D$ yields $$\alpha\varepsilon_D^{-k}<\varepsilon_D,$$ so $$1\le \alpha\varepsilon_D^{-k}<\varepsilon_D.$$ [F1, F2, given, algebra]

2.1 Put $$\beta:=\alpha\varepsilon_D^{-k}.$$ Step 1.1 and [F2] show that $\beta$ is an integral norm-one element with $1\le\beta<\varepsilon_D$. If $\beta>1$, then step 1.1 shows that $\beta$ is a positive Pell solution with $x$-coordinate smaller than $x_1$, contradicting [F1]. Hence $\beta=1$, so $$\alpha=\varepsilon_D^k.$$ Because $\alpha>1$, the exponent cannot be $0$, so $k\ge1$. [F1, F2, step 1.1, algebra]

3.1 If also $\alpha=\varepsilon_D^m=\varepsilon_D^n$ with $m<n$, then multiplying by $\varepsilon_D^{-m}$ inside the group from [F2] gives $$1=\varepsilon_D^{n-m},$$ impossible because $\varepsilon_D>1$. So the exponent of a positive solution is unique. [F1, F2, step 2.1, algebra] ∎
