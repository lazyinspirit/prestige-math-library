---
id: lem-spherical-bessel-and-hankel-radial-solutions
kind: lemma
title: Spherical Bessel and outgoing Hankel recurrences solve the radial Helmholtz equation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-spherical-bessel-and-hankel-functions, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives, thm-eulers-formula, thm-termwise-differentiation-of-a-real-power-series, thm-power-series-uniform-on-compact-subintervals, thm-ratio-test]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite differentiation and power-series algebra only; it makes no certified numerical evaluation claim."
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
verification:
  precheck: pass
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

**Given:** The exact finite-derivative definitions of $j_\ell$ and $h_\ell^{(1)}$ from [[def-spherical-bessel-and-hankel-functions]], the power series for sine, and ordinary differentiation rules.

[F1] [[def-spherical-bessel-and-hankel-functions]]: $j_\ell=(-z)^\ell(z^{-1}d/dz)^\ell(\sin z/z)$ and $h_\ell^{(1)}=(-z)^\ell(z^{-1}d/dz)^\ell(-ie^{iz}/z)$.

[F2] [[thm-algebra-of-derivatives]] and [[thm-chain-rule]] supply real-valued product, quotient and chain rules. All derivatives here are with respect to the real parameter $z>0$. For $f=u+iv$ define $f'=u'+iv'$; expanding $(u+iv)(a+ib)=(ua-vb)+i(ub+va)$ and applying the real rules to its components proves the same product rule for these complex-valued functions. Multiplication or division by powers of the positive real $z$ is likewise componentwise.

[F3] [[thm-sine-and-cosine-derivatives]] gives $(\sin z)'=\cos z$ and $(\cos z)'=-\sin z$. [[thm-eulers-formula]] gives $e^{iz}=\cos z+i\sin z$. Thus componentwise real differentiation gives $(e^{iz})'=-\sin z+i\cos z=ie^{iz}$, and iteration gives all higher derivatives used below.

[F4] [[thm-termwise-differentiation-of-a-real-power-series]] permits termwise differentiation strictly inside a real power series' radius, preserving that radius; it may be iterated a fixed finite number of times. [[thm-power-series-uniform-on-compact-subintervals]] supplies local uniform convergence there. [[thm-ratio-test]] establishes infinite radius for each factorial series below after its zero initial terms have been removed; at $z=0$ the series values are read directly.

## Proof

**Given:** The functions and conventions in the Statement.

1.1 By [F3], direct differentiation gives $L_0(sin z/z)=0$ and $L_0(-ie^{iz}/z)=0$. For any differentiable $f$ and $y_\ell:=(-z)^\ell(z^{-1}d/dz)^\ell f$, differentiating the product in [F1] gives $y_{\ell+1}=\ell y_\ell/z-y_\ell'$. [F1, F2, F3, algebra]

1.2 If $L_\ell y=0$, direct differentiation and collection of coefficients gives the identity
$$L_{\ell+1}\!\left(\frac\ell z y-y'\right)=\frac\ell z L_\ell y-(L_\ell y)'.$$
The right side vanishes. Starting from the two $L_0$ solutions in step 1.1 and applying the recurrence proves both radial equations by induction. For $\ell\ge1$, differentiate $y_\ell=(\ell-1)y_{\ell-1}/z-y_{\ell-1}\prime$ and use $L_{\ell-1}y_{\ell-1}=0$. This gives $y_\ell\prime=(\ell+1)y_{\ell-1}\prime/z+(1-(\ell^2-1)/z^2)y_{\ell-1}$. Substituting $y_{\ell-1}\prime=(\ell-1)y_{\ell-1}/z-y_\ell$ yields $y_\ell\prime=y_{\ell-1}-(\ell+1)y_\ell/z$, the stated derivative identity. [F2, step 1.1, algebra]

2.1 The sine series is $\sin z/z=\sum_{m\ge0}(-1)^m z^{2m}/(2m+1)!$. For each fixed $r\ge0$, the formal $r$th application of $z^{-1}d/dz$ is the power series $\sum_{m\ge r}(-1)^m2^r m!z^{2m-2r}/((m-r)!(2m+1)!)$. At each nonzero real $z$, its nonzero consecutive absolute-term ratio is $|z|^2(m+1)/((m+1-r)(2m+2)(2m+3))\to0$, so [F4] gives infinite radius; at $z=0$ only the constant term survives. Termwise differentiation by [F4], followed on $z>0$ by division by $z$, yields the series with $r+1$ in place of $r$, since its constant derivative is zero. Induction therefore justifies all $\ell$ applications, and local uniform convergence controls the remaining power-series tail near zero. The differentiation has killed the terms $m<\ell$; multiplication by $(-z)^\ell$ makes the first remaining coefficient $2^\ell\ell!/(2\ell+1)!=1/(2\ell+1)!!$, proving the origin expansion for $j_\ell$. The recurrence in step 1.1 gives $h_{\ell+1}^{(1)}\sim(2\ell+1)h_\ell^{(1)}/z$ from $h_0^{(1)}=-ie^{iz}/z$, giving its displayed leading singular coefficient by induction. Repeated use of the recurrence gives finite sums of sine/cosine or $e^{iz}$ terms times powers of $z^{-1}$; differentiating these finite sums shows that their $O(z^{-2})$ remainders remain $O(z^{-2})$. The leading terms therefore propagate as $j_{\ell+1}\sim-\cos(z-\ell\pi/2)/z=\sin(z-(\ell+1)\pi/2)/z$ and $h_{\ell+1}^{(1)}\sim-i(-i)^{\ell+1}e^{iz}/z$, proving the stated infinity expansions by induction. [F1, F2, F3, F4, step 1.1, algebra]

3.1 For two solutions $y,v$ of $L_\ell y=0$, differentiation gives $(y v'-y'v)'=-2(yv'-y'v)/z$, so $z^2(yv'-y'v)$ is constant. Use the infinity expansions from step 2.1 and their differentiated forms with $y=j_\ell$, $v=h_\ell^{(1)}$: if $\vartheta=z-\ell\pi/2$, then $z^2(yv'-y'v)\to(-i)^{\ell+1}e^{iz}(i\sin\vartheta-\cos\vartheta)=i$. This determines the constant and proves the Wronskian formula. [step 1.2, step 2.1, algebra] ∎
