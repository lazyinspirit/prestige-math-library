---
id: lem-spherical-bessel-and-hankel-radial-solutions
kind: lemma
title: Spherical Bessel and outgoing Hankel recurrences solve the radial Helmholtz equation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-spherical-bessel-and-hankel-functions, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives, thm-eulers-formula, thm-termwise-differentiation-of-a-real-power-series, thm-power-series-uniform-on-compact-subintervals, thm-ratio-test, lem-sine-and-cosine-series-converge-everywhere, def-factorial-and-falling-factorial, lem-of-naturals-positive, cor-zero-derivative-implies-constant, lem-trigonometric-identities-machin-and-range-reduction]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite differentiation and power-series algebra only; it makes no certified numerical evaluation claim and uses no choice principle."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, version July 15, 2009, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 147–149, radial Helmholtz equation and spherical Bessel functions; the exact finite-derivative identities below are verified locally."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 18–19, spherical Bessel equation and recurrences."
    - title: "NIST Digital Library of Mathematical Functions, §10.49, Explicit Formulas"
      url: "https://dlmf.nist.gov/10.49"
      locator: "§10.49(i), equations 10.49.1–10.49.6: terminating sine/cosine and outgoing Hankel formulas."
    - title: "University of Toronto, Lecture Notes on Mathematical Methods 2019–20"
      url: "https://www.physics.utoronto.ca/~phy1540f/p154019_cumullect.pdf"
      locator: "§6.4, printed pp. 157–158, spherical radial Helmholtz equation, finite-derivative definition, origin/infinity behavior, and Hankel convention."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For the functions of [[def-spherical-bessel-and-hankel-functions]], define
$$L_\ell y:=y''+\frac2z y'+\left(1-\frac{\ell(\ell+1)}{z^2}\right)y\qquad(z>0).$$
Then $L_\ell j_\ell=L_\ell h_\ell^{(1)}=0$, and for $y=j,h^{(1)}$,
$$y_{\ell+1}(z)=\frac{\ell}{z}y_\ell(z)-y_\ell'(z),\qquad y_\ell'(z)=y_{\ell-1}(z)-\frac{\ell+1}{z}y_\ell(z)\quad(\ell\ge1).$$
The regular-origin and outgoing-infinity normalizations are
$$j_\ell(z)=\frac{z^\ell}{(2\ell+1)!!}+O(z^{\ell+2}),\quad h_\ell^{(1)}(z)=-i(2\ell-1)!!z^{-\ell-1}(1+O(z))\quad(z\downarrow0),$$
$$j_\ell(z)=\frac{\sin(z-\ell\pi/2)}z+O(z^{-2}),\quad h_\ell^{(1)}(z)=(-i)^{\ell+1}\frac{e^{iz}}z+O(z^{-2})\quad(z\to\infty),$$
where $(-1)!!:=1$. Their Wronskian is
$$j_\ell(z)(h_\ell^{(1)})'(z)-j_\ell'(z)h_\ell^{(1)}(z)=\frac{i}{z^2}.$$

## Facts & Assumptions

**Given:** The exact finite-derivative definitions of $j_\ell$ and $h_\ell^{(1)}$ from [[def-spherical-bessel-and-hankel-functions]], their power-series meanings, and ordinary differentiation rules on $z>0$.

[F1] [[def-spherical-bessel-and-hankel-functions]]: for $z>0$ and integer $\ell\ge0$, $j_\ell=(-z)^\ell(z^{-1}d/dz)^\ell(\sin z/z)$ and $h_\ell^{(1)}=(-z)^\ell(z^{-1}d/dz)^\ell(-ie^{iz}/z)$.

[F2] [[thm-algebra-of-derivatives]] and [[thm-chain-rule]]: real-valued differentiable functions satisfy the product, quotient, and chain rules at limit points of their domains. For complex-valued functions of the real variable, define $(u+iv)'=u'+iv'$; expansion into real and imaginary components then gives the same product rule. Every finite derivative used below exists on $(0,\infty)$: sine and cosine derivatives alternate by [F3], the derivative of $e^{iz}$ is $ie^{iz}$ by [F3], and derivatives of $z^{-1}$ follow from the real quotient and chain rules.

[F3] [[thm-sine-and-cosine-derivatives]] gives $(\sin z)'=\cos z$ and $(\cos z)'=-\sin z$; [[thm-eulers-formula]] gives $e^{iz}=\cos z+i\sin z$. Componentwise differentiation therefore gives $(e^{iz})'=ie^{iz}$ for real $z$.

[F4] [[thm-termwise-differentiation-of-a-real-power-series]] permits termwise differentiation strictly inside the radius of a real power series, and [[thm-power-series-uniform-on-compact-subintervals]] gives uniform convergence on each compact subinterval strictly inside that radius. [[thm-ratio-test]] gives absolute convergence when the nonzero consecutive absolute-term ratio tends to a number below $1$.

[F5] [[lem-sine-and-cosine-series-converge-everywhere]]: the defining factorial series for sine and cosine converge absolutely at every real argument.

[F6] [[cor-zero-derivative-implies-constant]]: a real function continuous on an interval and differentiable with derivative zero at every interior point is constant on that interval.

[F7] In the displayed normalizations, $(2m+1)!!=\prod_{r=0}^{m}(2r+1)$ and $(2m-1)!!=\prod_{r=1}^{m}(2r-1)$ for $m\ge0$, with the second product empty and equal to $1$ at $m=0$. For $z\downarrow0$, $q(z)=O(z^a)$ means $|q(z)|\le C z^a$ for some $C$ and all sufficiently small $z>0$; for $z\to\infty$, $q(z)=O(z^{-a})$ means $|q(z)|\le C z^{-a}$ for all sufficiently large $z$. A Wronskian here means $W[y,v]=yv'-y'v$.

[F8] [[lem-trigonometric-identities-machin-and-range-reduction]]: the power-series sine and cosine satisfy the addition identities, $\sin^2 z+\cos^2 z=1$, and $\sin(\pi/2)=1$, $\cos(\pi/2)=0$; it defines $\pi=4\arctan(1)$. Together with [F3], this gives $|\sin z|,|\cos z|,|e^{iz}|\le1$ for real $z$.

[F9] [[def-factorial-and-falling-factorial]] defines $0!=1$, the factorial recursion $n!=n(n-1)!$, and proves every factorial is nonzero; [[lem-of-naturals-positive]] gives positivity of the natural factors in their real embedding. Regrouping the even and odd factors in $(2\ell+1)!$ gives $(2\ell+1)!=2^\ell\ell!(2\ell+1)!!$.

## Proof

**Given:** The functions and conventions in the Statement.

1.1 Write $f_0(z)=\sin z/z$ and $g_0(z)=-ie^{iz}/z$. By [F2]–[F3], $f_0'=\cos z/z-\sin z/z^2$ and $f_0''=-\sin z/z-2\cos z/z^2+2\sin z/z^3$, so $L_0f_0=0$. Also $g_0'=e^{iz}(1/z+i/z^2)$ and $g_0''=e^{iz}(i/z-2/z^2-2i/z^3)$, so $L_0g_0=0$. For any function with the required finite derivatives on $(0,\infty)$, put $y_\ell=(-z)^\ell D^\ell f$ with $D=z^{-1}d/dz$. Since $(D^\ell f)'=zD^{\ell+1}f$, differentiating the product gives $y_\ell'=\ell y_\ell/z-y_{\ell+1}$, hence $y_{\ell+1}=\ell y_\ell/z-y_\ell'$. This recurrence applies to both functions in [F1]. [F1, F2, F3, algebra]

1.2 The sine series gives $\sin z/z=\sum_{m\ge0}(-1)^m z^{2m}/(2m+1)!$. After $r$ applications of $D$, the formal series is $\sum_{m\ge r}(-1)^m2^r m!z^{2m-2r}/((m-r)!(2m+1)!)$. For $z\ne0$ its successive nonzero absolute-term ratio is $|z|^2(m+1)/((m+1-r)(2m+2)(2m+3))\to0$; at $z=0$ only its constant term remains. Thus each such series has infinite radius by [F4]. Termwise differentiation and division by $z$ give the next series: the $m=r$ term is constant and differentiates to zero, so no negative power appears. The operation at $r=\ell$ kills $m<\ell$; its first remaining coefficient is $2^\ell\ell!/(2\ell+1)!=1/(2\ell+1)!!$ by [F9]. The later powers are $z^{\ell+2},z^{\ell+4},\ldots$; their coefficient series is bounded on $|z|\le1$ by compact uniform convergence in [F4], so their sum is $O(z^{\ell+2})$. This proves the stated origin expansion for $j_\ell$. [F1, F4, F5, F9, algebra]

2.1 Put $\lambda=\ell(\ell+1)$ and $\mu=(\ell+1)(\ell+2)$. Direct differentiation gives $L_{\ell+1}(\ell y/z-y')=-y'''+(\ell-2)y''/z+(-1+\mu/z^2)y'+(\ell/z-\ell\mu/z^3)y=\ell L_\ell y/z-(L_\ell y)'$. Thus if $L_\ell y=0$, the recurrence in step 1.1 gives $L_{\ell+1}y_{\ell+1}=0$. Starting from step 1.1 proves both radial equations by induction. For $\ell\ge1$, differentiate $y_\ell=(\ell-1)y_{\ell-1}/z-y_{\ell-1}'$ and substitute $L_{\ell-1}y_{\ell-1}=0$; this yields $y_\ell'=(\ell+1)y_{\ell-1}'/z+(1-(\ell^2-1)/z^2)y_{\ell-1}$. Substituting $y_{\ell-1}'=(\ell-1)y_{\ell-1}/z-y_\ell$ from step 1.1 and collecting terms gives $y_\ell'=y_{\ell-1}-(\ell+1)y_\ell/z$. [F2, step 1.1, algebra]

2.2 Write $h_\ell^{(1)}=C_\ell e^{iz}$, starting with $C_0=-i/z$. Applying the recurrence of step 1.1 and the product rule in [F2]–[F3] gives $C_{\ell+1}=\ell C_\ell/z-C_\ell'-iC_\ell$. Induction shows $C_\ell$ is a finite Laurent polynomial with exponents $-1,\ldots,-\ell-1$. If its most singular term is $a_\ell z^{-\ell-1}$, the coefficient of $z^{-\ell-2}$ in $C_{\ell+1}$ is $(2\ell+1)a_\ell$; the term $-iC_\ell$ is less singular. Since $a_0=-i$, this gives $a_\ell=-i(2\ell-1)!!$. Also $e^{iz}=1+O(z)$ as $z\downarrow0$ by [F3] and differentiability at $0$, so the outgoing origin expansion follows. For infinity, induct on $\ell$ using step 1.1. The base terms are $j_0=\sin z/z$ and $h_0^{(1)}=-ie^{iz}/z$. If $j_\ell=\sin\theta/z+R_\ell$, $\theta=z-\ell\pi/2$, with $R_\ell$ a finite sum of $z^{-k}\sin z$ and $z^{-k}\cos z$ terms for $k\ge2$, then $R_\ell'=O(z^{-2})$ by [F3],[F7],[F8], and $\ell j_\ell/z=O(z^{-2})$; hence $j_{\ell+1}=-\cos\theta/z+O(z^{-2})=\sin(z-(\ell+1)\pi/2)/z+O(z^{-2})$ by the addition identities [F8]. For $h_\ell^{(1)}$, the coefficient recurrence gives a finite form $e^{iz}(b_\ell/z+\sum_{k=2}^{\ell+1}b_{\ell k}z^{-k})$. Its leading coefficient obeys $b_{\ell+1}=-ib_\ell$ because the terms $\ell C_\ell/z$ and $C_\ell'$ have powers at most $z^{-2}$; thus $b_\ell=(-i)^{\ell+1}$. The remainder and its derivative are $O(z^{-2})$ by [F3],[F7],[F8], so the recurrence gives $h_{\ell+1}^{(1)}=(-i)^{\ell+2}e^{iz}/z+O(z^{-2})$. Differentiating the leading terms and finite remainders also gives $j_\ell'=\cos(z-\ell\pi/2)/z+O(z^{-2})$ and $(h_\ell^{(1)})'=i(-i)^{\ell+1}e^{iz}/z+O(z^{-2})$. [F2, F3, F7, F8, step 1.1, algebra, induction]

3.1 For two solutions $y,v$ of $L_\ell y=0$, differentiation and substitution of their equations gives $(yv'-y'v)'=-2(yv'-y'v)/z$, hence $(z^2W[y,v])'=0$. Applying [F6] separately to the real and imaginary parts on $(0,\infty)$ shows $z^2W[j_\ell,h_\ell^{(1)}]$ is a constant complex number. With $\theta=z-\ell\pi/2$, the expansions and derivative expansions of step 2.2 give $z^2W[j_\ell,h_\ell^{(1)}]\longrightarrow(-i)^{\ell+1}e^{iz}(i\sin\theta-\cos\theta)=i$. Indeed, Euler's formula and the addition identities give $e^{iz}(\cos\theta-i\sin\theta)=e^{i(z-\theta)}=e^{i\ell\pi/2}$; repeated use of $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$ gives $e^{i\ell\pi/2}=i^\ell$. Since $i\sin\theta-\cos\theta=-(\cos\theta-i\sin\theta)$ and $(-i)^{\ell+1}i^\ell=-i$, the displayed limit is $i$. The constant is therefore $i$, which proves the Wronskian formula. [F2, F3, F6, F8, step 2.1, step 2.2, algebra] ∎
