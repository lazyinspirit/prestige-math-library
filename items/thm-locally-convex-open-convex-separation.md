---
id: "thm-locally-convex-open-convex-separation"
kind: "theorem"
title: "Continuous separation when one convex set is open"
status: published
origin: "pipeline"
deps: ["def-locally-convex-topological-vector-space", "lem-topological-vector-space-translation-scaling-and-absorption", "lem-continuous-gauge-of-an-open-convex-zero-neighborhood", "def-hahn-banach-extension-principle-relative", "thm-relative-hahn-banach-dominated-extension", "lem-restriction-of-scalars", "thm-infimum-property"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (17 November 2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo B\u00fchler and Dietmar Salamon, Functional Analysis (8 June 2017)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement

Assume **HB**, the real dominated-extension principle over ZF. Let $A,B$ be nonempty disjoint convex subsets of a real or complex TVS $X$, and suppose $A$ is open. There are a nonzero continuous $\mathbb K$-linear functional $f$ and $\alpha\in\mathbb R$ such that
$$\operatorname{Re}f(a)<\alpha\le\operatorname{Re}f(b)\qquad(a\in A,\ b\in B).$$
If $B$ is also open, the same $\alpha$ may be chosen with both pointwise inequalities strict. Here $\operatorname{Re}f=f$ over $\mathbb R$. Neither Hausdorffness nor local convexity beyond the given open convex set is needed.

## Facts & Assumptions

**Given:** HB and $X,A,B$ as in the statement.

[F1] Convexity and continuous duals have their TVS meanings ([[def-locally-convex-topological-vector-space]]).

[F2] Translations, nonzero dilations and orbit maps are continuous, and a modulus-bounded linear functional on a zero-neighborhood is continuous ([[lem-topological-vector-space-translation-scaling-and-absorption]]).

[F3] An open convex zero-neighborhood has a finite nonnegative sublinear gauge $p$, with $U=\{x:p(x)<1\}$ ([[lem-continuous-gauge-of-an-open-convex-zero-neighborhood]]).

[F4] HB is an additional real extension principle over ZF ([[def-hahn-banach-extension-principle-relative]]).

[F5] Under HB a dominated real linear functional on a real subspace has a real linear extension $H$ with $-p(-x)\le H(x)\le p(x)$ ([[thm-relative-hahn-banach-dominated-extension]]).

[F6] Restriction of scalars gives the underlying real vector space ([[lem-restriction-of-scalars]], clause 2).

[F7] A nonempty bounded-below real set has an infimum ([[thm-infimum-property]]).

## Proof

1.1 First work over the reals and let $D$ be nonempty open convex with $z\notin D$. Fix $d_0\in D$ and put $U=D-d_0$ and $v=z-d_0$. Then $U$ is an open convex zero-neighborhood, $v\ne0$, and $p_U(v)\ge1$ because $v\notin U$. The set $M=\{tv:t\in\mathbb R\}$ is a real subspace: sums and real multiples remain on the line. If $tv=sv$ then multiplying $(t-s)v=0$ by $(t-s)^{-1}$ when $t\ne s$ would give $v=0$, so the coefficient is unique. Thus $h(tv)=t$ is well-defined and real-linear. [F1, F2, F3]

2.1 For $t\ge0$, $h(tv)=t\le tp_U(v)=p_U(tv)$; for $t<0$, $h(tv)=t<0\le p_U(tv)$. All hypotheses of the relative extension theorem are now met. Apply HB once to obtain real-linear $H:X\to\mathbb R$ extending $h$ with $-p_U(-x)\le H(x)\le p_U(x)$. In particular $H(v)=1$. This is the only non-ZF input in the proof. [F3, F4, F5, step 1.1]

3.1 On the open zero-neighborhood $U\cap(-U)$ both gauges $p_U(x),p_U(-x)$ are less than one. Hence $|H(x)|<1$ there, so $H$ is continuous by the modulus-bound criterion. For $d\in D$, $H(d)-H(d_0)=H(d-d_0)\le p_U(d-d_0)<1=H(z)-H(d_0)$. Therefore $H(d)<H(z)$, and $H\ne0$ since $H(v)=1$. [F2, F3, step 2.1]

4.1 For the given real $A,B$, take $D=A-B$ and $z=0$. This is open, since it is the union of the translates $A-b$ for $b\in B$; it is convex by distributing each real convex combination through the difference. It is nonempty and excludes zero by disjointness. The preceding construction therefore produces a nonzero continuous real-linear $H$ with $H(a-b)<0$, or $H(a)<H(b)$ for every $a,b$. It also produces a vector $v$ with $H(v)=1$. [F1, F2, step 1.1, step 2.1, step 3.1]

5.1 The set $-H(A)$ is nonempty and bounded below by $-H(b_0)$ for any fixed $b_0\in B$. Let $\alpha=-\inf(-H(A))$. By reversing the defining lower-bound inequalities, $\alpha$ is the least upper bound of $H(A)$. Every $H(b)$ is an upper bound, so $\alpha\le H(b)$. For $a\in A$, openness and continuity of $s\mapsto a+sv$ give a positive $s$ with $a+sv\in A$; hence $H(a)<H(a)+s\le\alpha$. If $B$ is open and $H(b)=\alpha$, a small $s>0$ with $b-sv\in B$ would give $\alpha\le H(b-sv)=\alpha-s$, an impossibility. Thus both inequalities are strict when both sets are open. [F2, F7, step 4.1]

6.1 For complex $X$, restrict scalars to $\mathbb R$. The scalar inclusion $\mathbb R\to\mathbb C$ is continuous since it preserves distance, so the restricted scalar action is jointly continuous. Convexity and openness are unchanged. Apply the real construction to obtain $H$ and $\alpha$. Set $f(x)=H(x)-iH(ix)$. It is additive and real-homogeneous, and $f(ix)=H(ix)-iH(-x)=H(ix)+iH(x)=if(x)$. For $\lambda=a+ib$, additivity and real homogeneity therefore give $f(\lambda x)=af(x)+bf(ix)=\lambda f(x)$. Both $H$ and $x\mapsto H(ix)$ are continuous; scalar addition and multiplication are continuous, so $f$ is continuous. Its real part is $H$, so it is nonzero and obeys the same inequalities. This proves the complex case as well, with the same single HB application and no assumption of AC. [F1, F2, F6, step 4.1, step 5.1] ∎