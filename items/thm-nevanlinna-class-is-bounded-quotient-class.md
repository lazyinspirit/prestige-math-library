---
id: thm-nevanlinna-class-is-bounded-quotient-class
kind: theorem
title: "The Nevanlinna class is a bounded quotient class"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-algebra-of-complex-derivatives, def-complex-exponential, thm-holomorphic-logarithms-homologically-simply-connected-domains, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-c2-holomorphic-components-are-harmonic, def-nevanlinna-class-on-the-disc, def-analytic-hardy-space-disc, def-complex-differentiability-holomorphic-and-entire, def-plane-harmonic-function, def-harmonic-conjugate, prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-harmonic-conjugate-on-homologically-simply-connected-domains]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "The Nevanlinna class, printed pp. 66-68: Theorem 5.1 (the least harmonic majorant is a Poisson integral) and the reduction of $N$ to quotients of bounded analytic functions."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna (N) and Smirnov (N+) classes, printed pp. 64-69: quotient representation of N-functions."
---

## Statement

For a holomorphic $f:\mathbb D\to\mathbb C$ the following are equivalent:

(i) $f\in N(\mathbb D)$;

(ii) there exist $g,h\in H^\infty(\mathbb D)$ with $h$ zero-free in
$\mathbb D$ and $f=g/h$, where in addition $g$ and $h$ may be chosen with
$|g|\le1$ and $|h|\le1$.

The pair $(g,h)$ is not unique: if $\varphi\in H^\infty$ is zero-free then
$(g\varphi,h\varphi)$ is another representation of the same $f$, and no
uniqueness is asserted. This proof is choice-free: neither the Axiom of Choice
nor countable choice is used.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on the unit disc $\mathbb D$, and where asserted a representation $f=g/h$ with $g,h\in H^\infty(\mathbb D)$ and $h$ zero-free.

[L1] The class $N(\mathbb D)$ consists of the holomorphic $f$ for which $\log^+|f|$ has a harmonic majorant on $\mathbb D$, and $H^\infty(\mathbb D)$ consists of the bounded holomorphic functions, with $\|g\|_\infty=\sup_{\mathbb D}|g|$; every $h\in H^\infty$ with $|h|\le1$ satisfies $|h|\le1$ and $-\log|h|\ge0$ pointwise ([[def-nevanlinna-class-on-the-disc]], [[def-analytic-hardy-space-disc]]).

[L2] Products and quotients by a nowhere-zero holomorphic function are holomorphic, and the complex exponential is holomorphic and never zero. On the simply connected disc, a zero-free h has a holomorphic logarithm L; holomorphic functions are smooth and their real components harmonic, so $\log|h|=\operatorname{Re}L$ is harmonic. These are choice-free analytic interfaces. ([[thm-algebra-of-complex-derivatives]], [[def-complex-exponential]], [[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[thm-c2-holomorphic-components-are-harmonic]], [[prop-star-shaped-plane-domains-are-homologically-simply-connected]])

[L3] The unit disc is a star-shaped plane domain, hence homologically simply connected; every harmonic function on a homologically simply connected complex domain has a harmonic conjugate there ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-harmonic-conjugate-on-homologically-simply-connected-domains]], [[def-harmonic-conjugate]]).

## Proof

**Proof technique:** direct.

1.1 (ii) implies (i). Assume $f=g/h$ with $g,h\in H^\infty(\mathbb D)$ and $h$ zero-free. Put $\lambda:=\max\{\|g\|_\infty,\|h\|_\infty,1\}$ and replace $(g,h)$ by $(g/\lambda,h/\lambda)$; this leaves $f=g/h$ unchanged and gives $|g|\le1$ and $|h|\le1$ on $\mathbb D$. Then $H:=\log^+\|g\|_\infty-\log|h|$ is harmonic on $\mathbb D$, because $\log|h|$ is harmonic and the first term is constant, and $H\ge0$ because $|h|\le1$; moreover, at every point where $\log|f|>0$ one has $\log|f|=\log|g|-\log|h|\le\log\|g\|_\infty-\log|h|\le H$, while where $\log|f|\le0$ one has $\log^+|f|=0\le H$. Hence $\log^+|f|\le H$ with $H$ harmonic on $\mathbb D$, so $f\in N(\mathbb D)$. [given, L1, L2, algebra]

1.2 (i) implies (ii). Assume $f\in N(\mathbb D)$ and let $h_0$ be a harmonic majorant of $\log^+|f|$ on $\mathbb D$; then $h_0\ge\log^+|f|\ge0$ on $\mathbb D$. By [L3] there is a harmonic conjugate $\widetilde h_0$ of $h_0$ on $\mathbb D$, and $$h:=\exp\bigl(-h_0-i\widetilde h_0\bigr)$$ is holomorphic, zero-free and satisfies $|h|=e^{-h_0}\le1$ on $\mathbb D$; hence $h\in H^\infty(\mathbb D)$ with $|h|\le1$. [given, L1, L2, L3]

2.1 The companion numerator. With $h$ as in step 1.2 put $g:=fh$. Then $g$ is holomorphic on $\mathbb D$, and for every $z$ with $f(z)\ne0$, $$|g(z)|=|f(z)|e^{-h_0(z)}=e^{\log|f(z)|-h_0(z)}\le e^{\log^+|f(z)|-h_0(z)}\le1,$$ while $|g(z)|=0\le1$ at the zeros of $f$; here we used $\log|f|\le\log^+|f|\le h_0$. Thus $g\in H^\infty(\mathbb D)$ with $|g|\le1$, and $f=g/h$ because $h$ is zero-free. This proves (i)$\Rightarrow$(ii) with both functions bounded by $1$. [step 1.2, L1, L2, algebra]

3.1 Assembly and non-uniqueness. Step 1.1 proves (ii)$\Rightarrow$(i) and steps 1.2 and 2.1 prove (i)$\Rightarrow$(ii), with the normalization $|g|\le1$, $|h|\le1$ established in each direction; hence (i) and (ii) are equivalent. If $f=g/h$ with $h$ zero-free and $\varphi\in H^\infty$ is zero-free, then $g\varphi,h\varphi\in H^\infty$, $h\varphi$ is zero-free and $(g\varphi)/(h\varphi)=g/h=f$, so the representation is not unique. The construction used only the harmonic conjugate and the exponential, both choice-free, so neither the Axiom of Choice nor countable choice is used. [step 1.1, step 1.2, step 2.1, L2, algebra] ∎

## Remark

The choice-free assertion concerns this direct bounded-function/majorant equivalence: the raw membership clauses of the two definitions are used, and neither completeness nor a boundary representation of their function spaces is invoked. Their other, countable-choice conventions do not enter this construction.
