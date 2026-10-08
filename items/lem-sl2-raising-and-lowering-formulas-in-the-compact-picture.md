---
id: lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
kind: lemma
title: Derived action and raising/lowering formulas in the compact picture
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 4
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - thm-iwasawa-decomposition-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - def-special-linear-lie-algebra-sl-two
  - def-one-parameter-subgroup-of-a-lie-group
  - thm-one-parameter-subgroups-are-exactly-exponentials
  - def-exponential-map-of-a-lie-group
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-logarithm-derivative-and-integral
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - def-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, formulas (2.5)–(2.6), printed p. 10; K-type basis and action convention printed pp. 8–9"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.1, formulas (4)–(5) and the principal-series definition, printed pp. 48–49; Casimir scalar c=s²/4"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.9 and proof, printed pp. 298–299, Lie-action derivatives in Iwasawa coordinates"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Use the compact-picture
conventions of [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]] and
[[lem-k-type-decomposition-of-the-sl2-principal-series]]: $k_\theta=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}$ and $f_n(k_\theta)=e^{in\theta}$. Put
$$J=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\quad H=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad S=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad W=-iJ,\quad E_+=\tfrac12(H+iS),\quad E_-=\tfrac12(H-iS).$$
Thus $J,H,S$ are real Lie-algebra elements, $k_\theta=\exp(\theta J)$, and $W,E_+,E_-$ are the explicitly normalized basis of $\mathfrak{sl}_2(\mathbb C)$ with $[W, E_\pm]=\pm2E_\pm$ and $[E_+, E_-]=W$. For a smooth compact-picture vector define
$$L_Xf=\frac{d}{dt}\bigg|_{t=0}\Pi_\nu(\exp(tX))f\qquad(X\in\mathfrak{sl}_2(\mathbb R)),$$
and extend this map complex-linearly to $\mathfrak{sl}_2(\mathbb C)$; in particular $L_W=-iL_J$ and $L_{E_\pm}=(L_H\pm iL_S)/2$. No action of the real group on $\exp(tX)$ for nonreal $X$ is asserted.

These operators preserve smooth vectors and the $K$-finite vectors of $I_{\varepsilon,\nu}$, satisfy
$$[L_W, L_{E_\pm}]=\pm2L_{E_\pm},\qquad[L_{E_+}, L_{E_-}]=L_W,$$
and act on the $K$-type basis by
$$L_Wf_n=nf_n,\qquad L_{E_\pm}f_n=\frac{1+\nu\pm n}{2}f_{n\pm2}.$$
Consequently $L_{E_-}f_n=0$ exactly when $\nu=n-1$, and $L_{E_+}f_n=0$ exactly when $\nu=-(n+1)$.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$, and a smooth vector in the compact picture of $I_{\varepsilon,\nu}$.

[F1] Restriction to $K$ identifies the induced model with parity-$\varepsilon$ smooth functions and gives the cocycle action for right translation ([[thm-compact-picture-of-the-sl2-principal-series]]).

[F2] The Iwasawa theorem gives unique smooth KAN and NAK coordinates; the relation $a_tn_x=n_{e^t x}a_t$ converts the latter by a smooth coordinate change into unique smooth ANK coordinates ([[thm-iwasawa-decomposition-for-sl2-r]], [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]).

[F3] The covariance factor in that action is $|\alpha|^{1+\nu}$, with the normalized half-modular character applied exactly once ([[def-normalized-principal-series-i-epsilon-nu]]).

[F4] The $K$-finite vectors are the finite sums of $f_n(k_\theta)=e^{in\theta}$ with $n\equiv\varepsilon\pmod2$ ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F5] The bracket on the traceless matrix Lie algebra is the matrix commutator ([[def-special-linear-lie-algebra-sl-two]]); direct multiplication of the displayed matrices gives $[W, E_\pm]=\pm2E_\pm$ and $[E_+, E_-]=W$.

[F6] Real one-parameter subgroups are exponentials with initial velocity $X$; the real product and chain rules apply to the smooth matrix coordinates ([[def-one-parameter-subgroup-of-a-lie-group]], [[thm-one-parameter-subgroups-are-exactly-exponentials]], [[def-exponential-map-of-a-lie-group]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[F7] For positive $r$, the scalar factor $r^{1+\nu}$ means $\exp((1+\nu)\log r)$; the complex exponential has derivative itself, so its derivative along a real smooth curve follows by applying the real chain rule to real and imaginary parts ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule]]).

[F9] The real logarithm is differentiable on $(0,\infty)$ with derivative $1/r$ ([[thm-logarithm-derivative-and-integral]]).

[F8] The circle matrices satisfy $k_\theta k_\phi=k_{\theta+\phi}$, and $\frac{d}{d\theta}k_\theta|_{\theta=0}=J$, by the sine/cosine addition and derivative formulas ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-derivatives]]).

[A1] AC supplies the normalized Haar inputs of the compact-picture and K-type suppliers; it implies AC$_\omega$ for the Fourier and one-parameter-subgroup/exponential suppliers ([[def-countable-choice]]). No vector is selected when defining $L_X$ ([[def-axiom-of-choice]], [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]).

## Proof

**Proof technique:** differentiate the actual right-translation cocycle along real matrix directions.

1.1 By [F8], $\theta\mapsto k_\theta$ is a one-parameter subgroup with initial velocity $J$; uniqueness in [F6] gives $k_\theta=\exp(\theta J)$. Fix $\theta$ and $X\in\{J,H,S\}$, and write $k_\theta\exp(tX)=a_{u(t)}n_{x(t)}k_{\phi(t)}$ in the unique smooth $ANK$ coordinates near $t=0$, with $u(0)=x(0)=0$ and $\phi(0)=\theta$. If the bottom row is $v(t)$, then $v(t)=e^{-u(t)/2}(-\sin\phi(t),\cos\phi(t))$, so $|\alpha|=\|v\|^{-1}$, $(\log|\alpha|)'=-v\cdot v'/\|v\|^2$, and $\phi'=\det(v,v')/\|v\|^2$. By [F6], $\frac{d}{dt}\exp(tX)|_{t=0}=X$, hence $v(0)=(-\sin\theta,\cos\theta)$ and $v'(0)=(-\sin\theta,\cos\theta)X$. For $X=H$, this gives $v\cdot v'=-\cos2\theta$ and $\det(v,v')=\sin2\theta$; for $X=S$, it gives $v\cdot v'=-\sin2\theta$ and $\det(v,v')=-\cos2\theta$; for $X=J$, it gives $v\cdot v'=0$ and $\det(v,v')=1$. Thus the pairs $((\log|\alpha|)',\phi')$ for $J,H,S$ are respectively $(0,1)$, $(\cos2\theta,\sin2\theta)$, and $(\sin2\theta,-\cos2\theta)$. The positive diagonal fixes the local $M$ factor as $I$. [F1, F2, F6, F8, A1, algebra]

2.1 Differentiating the compact-picture factor $|\alpha|^{1+\nu}f(k_\phi)$ using step 1.1 gives $L_J=\partial_\theta$, $L_H=(1+\nu)\cos2\theta+\sin2\theta\,\partial_\theta$, and $L_S=(1+\nu)\sin2\theta-\cos2\theta\,\partial_\theta$. Indeed, [F7] and [F9] give $\frac{d}{dt}|\alpha|^{1+\nu}=(1+\nu)|\alpha|^{1+\nu}(\log|\alpha|)'$; at $t=0$ the factor is $1$. The compact-coordinate derivative contributes $\phi'(0)\partial_\theta$. [F1, F3, F6, F7, F9, step 1.1]

3.1 Complex-linear extension gives $L_W=-iD$ and $L_{E_\pm}=\tfrac12e^{\pm2i\theta}((1+\nu)\mp iD)$, where $D=\partial_\theta$. Applying these to $f_n=e^{in\theta}$ yields $L_Wf_n=nf_n$ and $L_{E_\pm}f_n=\frac{1+\nu\pm n}{2}f_{n\pm2}$; the coefficients preserve the parity lattice and shift each Fourier mode by one allowed $K$-type. [F4, step 2.1, algebra]

4.1 The displayed operators are differential operators with smooth periodic coefficients, so they preserve smooth vectors, and step 3.1 shows they preserve finite Fourier sums. Using $[D, e^{\pm2i\theta}]=\pm2i e^{\pm2i\theta}$ gives $[L_W, L_{E_\pm}]=\pm2L_{E_\pm}$. Writing $a=1+\nu$ and $P_\pm=L_{E_\pm}$, the product rule gives $P_+P_-=\tfrac14((a-2-iD)(a+iD))=\tfrac14(a(a-2)+D^2-2iD)$ and $P_-P_+=\tfrac14((a-2+iD)(a-iD))=\tfrac14(a(a-2)+D^2+2iD)$, hence $[L_{E_+}, L_{E_-}]=-iD=L_W$ on every smooth vector. Finally, the coefficient of $f_{n-2}$ in $L_{E_-}f_n$ vanishes iff $1+\nu-n=0$, i.e. $\nu=n-1$, and the coefficient of $f_{n+2}$ in $L_{E_+}f_n$ vanishes iff $1+\nu+n=0$, i.e. $\nu=-(n+1)$. [F4, F5, step 3.1, algebra] ∎

## Remarks

Kerr's formulas (2.5)–(2.6) use the same matrices $W,E_\pm$ and parameter normalization as this item, so the ladder coefficients and vanishing loci match directly. Kerr leaves the coordinate derivation as an exercise; this item supplies it from the bottom row of $k_\theta\exp(tX)$. Kowalski's Lemma 7.4.9, printed pp. 298–299, computes one real derived direction and leaves the other two to the reader; the local calculation above verifies all three. Etingof's formulas (4)–(5) use abstract $e,f,h$ and a separately normalized weight basis on $P^\pm(s)$. In the convention $h=W$, $e=E_+$, $f=E_-$, the local ladder coefficients give $fe\,f_n=(\nu^2-(n+1)^2)f_n/4$, so $fe+(h+1)^2/4$ acts by $\nu^2/4$. This matches Etingof's Casimir scalar $s^2/4$ when $s=\pm\nu$; it is a central-character check, not a coefficient-by-coefficient identification. The displayed formulas above are derived locally.
