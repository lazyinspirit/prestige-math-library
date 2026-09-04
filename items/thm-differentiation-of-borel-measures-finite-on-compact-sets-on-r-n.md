---
id: thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n
kind: theorem
title: "Differentiation of sigma-finite Borel measures finite on compact sets"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-radon-nikodym-derivative, thm-continuity-from-below-for-measures, thm-differentiation-along-families-shrinking-nicely, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures, thm-lebesgue-inner-regularity-by-closed-and-compact-sets, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.22"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Theorems 2.18, 7.8, 7.13, and 7.14"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $\nu$ be a sigma-finite Borel measure on $\mathbb{R}^n$ that is finite on
compact sets. Write
$$\nu=\nu_a+\nu_s,\qquad \nu_a\ll\lambda,\qquad \nu_s\perp\lambda,$$
for its Lebesgue decomposition relative to Lebesgue measure, and choose a
measurable representative $f$ of the Radon-Nikodym class
$d\nu_a/d\lambda$. Then for Lebesgue-almost every $x\in\mathbb{R}^n$,
$$\lim_{r\to0^+}\frac{\nu(B(x,r))}{\lambda(B(x,r))}=f(x).$$
More generally, let $A\subseteq\mathbb{R}^n$, and suppose that for each $x\in A$
a family $(E_r(x))_{r>0}$ of Borel sets shrinking nicely to $x$ is specified.
Then for Lebesgue-almost every $x\in A$,
$$\lim_{r\to0^+}\frac{\nu(E_r(x))}{\lambda(E_r(x))}=f(x).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a sigma-finite Borel measure $\nu$ on $\mathbb{R}^n$ that is finite on compact sets.

[L1] Such a measure admits a Lebesgue decomposition $$\nu=\nu_a+\nu_s,\qquad \nu_a\ll\lambda,\qquad \nu_s\perp\lambda,$$ and the Radon-Nikodym class $d\nu_a/d\lambda$ has a measurable representative $f$. ([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[def-radon-nikodym-derivative]])

[L2] If $(E_r)$ shrinks nicely to $x$, then $$\frac{1}{\lambda(E_r)}\int_{E_r}f\,d\lambda\to f(x)$$ for almost every $x$. ([[thm-differentiation-along-families-shrinking-nicely]])

[L3] A finite family of balls admits a disjoint subfamily whose fivefold dilates cover the union. ([[thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]])

[L4] Assuming the Axiom of Countable Choice, Lebesgue measure is inner regular by compact subsets on measurable sets in $\mathbb{R}^n$. ([[thm-lebesgue-inner-regularity-by-closed-and-compact-sets]])

[L5] Increasing measurable unions pass through positive measures. ([[thm-continuity-from-below-for-measures]])

[F1] Every Borel measure on $\mathbb{R}^n$ that is finite on compact sets is regular on its Borel sets: for each Borel set $E$, $$\nu(E)=\inf\{\nu(U):E\subseteq U\text{ and }U\text{ is open}\}.$$ (Rudin, Theorem 2.18)

## Proof

**Proof technique:** direct.

1.1 By [L1], write $\nu=\nu_a+\nu_s$ with $\nu_a=f\,d\lambda$, $\nu_a\ll\lambda$, and $\nu_s\perp\lambda$. Choose a Borel set $N$ with $\lambda(N)=0$ on which $\nu_s$ is concentrated. For every Borel set $E$, absolute continuity and concentration give $$\nu_s(E)=\nu_s(E\cap N)=\nu(E\cap N)\ge0,\qquad \nu_a(E)=\nu_a(E\setminus N)=\nu(E\setminus N)\ge0.$$ Thus both components are positive and $\nu_s\le\nu$. Changing $f$ on a null set does not affect the claim, so take $f\ge0$. Since every closed Euclidean ball is compact, for every $x$ and $R>0$, $$\int_{B(x,R)}|f|\,d\lambda=\nu_a(B(x,R))\le\nu(\overline{B(x,R)})<\infty.$$ Hence $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$. [L1, given, choose, algebra]

2.1 Let $(E_r(x))_{r>0}$ be a family of Borel sets shrinking nicely to $x$ with constant $\alpha_x>0$. Then $$\frac{\nu(E_r(x))}{\lambda(E_r(x))}=\frac{1}{\lambda(E_r(x))}\int_{E_r(x)}f\,d\lambda+\frac{\nu_s(E_r(x))}{\lambda(E_r(x))},$$ while positivity and the defining comparison give $$0\le\frac{\nu_s(E_r(x))}{\lambda(E_r(x))}\le\frac{1}{\alpha_x}\frac{\nu_s(B(x,r))}{\lambda(B(x,r))}.$$ Consequently [L2] and step 1.1 reduce both conclusions to proving $$\frac{\nu_s(B(x,r))}{\lambda(B(x,r))}\longrightarrow0$$ for almost every $x$. [L1, L2, step 1.1, given, algebra]

2.2 Put $G:=\mathbb{R}^n\setminus N$, so $G$ is Borel, $\lambda(\mathbb{R}^n\setminus G)=0$, and $\nu_s(G)=0$. For each $m\ge1$, define $$D_m(x):=\sup_{0<r<1/m}\frac{\nu_s(B(x,r))}{\lambda(B(x,r))}.$$ For fixed $r>0$, if $0<\delta<r$ and $\|x-y\|_2<\delta$, then $$B(x,r-\delta)\subseteq B(y,r).$$ By [L5], $\nu_s(B(x,r-\delta))\uparrow\nu_s(B(x,r))$ as $\delta\downarrow0$, so $x\mapsto\nu_s(B(x,r))$ is lower semicontinuous. Translation invariance gives the fixed positive denominator $\lambda(B(x,r))=\lambda(B(0,r))$, so each $D_m$ is lower semicontinuous and each set $$\left\{x\in\mathbb{R}^n:D_m(x)>\frac1k\right\}$$ is open. For $k\ge1$, put $$F_k:=G\cap\bigcap_{m\ge1}\left\{x\in\mathbb{R}^n:D_m(x)>\frac1k\right\}.$$ Then $F_k$ is Borel. If $x\in G$ and $$L(x):=\limsup_{r\to0^+}\frac{\nu_s(B(x,r))}{\lambda(B(x,r))}>0,$$ choose $k$ with $1/k<L(x)$. Since $D_m(x)\ge L(x)>1/k$ for every $m$, one has $x\in F_k$. Thus $$\{x\in G:L(x)>0\}\subseteq\bigcup_{k\ge1}F_k,$$ and it is enough to prove $\lambda(F_k)=0$ for every $k$. [step 1.1, L5, given, construct, algebra]

3.1 Fix $k\ge1$ and $\varepsilon>0$. Because $\nu_s(G)=0$ and $\nu_s$ is a Borel measure finite on compact sets, [F1] gives an open set $U_\varepsilon\supseteq G$ with $\nu_s(U_\varepsilon)<\varepsilon$. Let $K\subseteq F_k$ be compact, and let $\mathcal B$ be the family of all balls $B(x,r)$ such that $$x\in K,\qquad B(x,r)\subseteq U_\varepsilon,\qquad \nu_s(B(x,r))>\frac1k\lambda(B(x,r)).$$ This family covers $K$: for any $x\in K$, openness gives an $m\ge1$ with $B(x,1/m)\subseteq U_\varepsilon$, and $x\in F_k$ gives an $r<1/m$ satisfying the displayed strict inequality. Compactness supplies a finite subcover of $K$ from $\mathcal B$. Apply [L3] to that finite family. There are pairwise disjoint chosen balls $B_1,\dots,B_q$ among it such that $$K\subseteq\bigcup_{j=1}^q5B_j.$$ Hence $$\lambda(K)\le5^n\sum_{j=1}^q\lambda(B_j)<5^nk\sum_{j=1}^q\nu_s(B_j)\le5^nk\,\nu_s(U_\varepsilon)<5^nk\varepsilon.$$ [F1, L3, step 2.2, given, construct, algebra]

4.1 Since $\varepsilon>0$ was arbitrary, step 3.1 gives $\lambda(K)=0$ for every compact $K\subseteq F_k$. Because $F_k$ is Borel by step 2.2, [L4] implies $$\lambda(F_k)=\sup\{\lambda(K):K\subseteq F_k,\ K\text{ compact}\}=0.$$ Step 2.2 now shows that the set where $L(x)>0$ is contained in the null set $$(\mathbb{R}^n\setminus G)\cup\bigcup_{k\ge1}F_k.$$ The ratios defining $L$ are nonnegative, so $$\lim_{r\to0^+}\frac{\nu_s(B(x,r))}{\lambda(B(x,r))}=0$$ for almost every $x$. [step 2.2, step 3.1, L4, algebra]

5.1 Combine step 4.1 with the comparison in step 2.1 and the differentiation theorem [L2] for the locally integrable representative $f$. For any specified Borel families $(E_r(x))_{r>0}$ shrinking nicely to the points of $A$, this gives $$\frac{\nu(E_r(x))}{\lambda(E_r(x))}\to f(x)$$ for almost every $x\in A$. Taking $A=\mathbb{R}^n$ and $E_r(x)=B(x,r)$ gives the ball conclusion. [L2, step 1.1, step 2.1, step 4.1] ∎
