---
id: thm-iwasawa-decomposition-for-sl2-r
kind: theorem
title: Iwasawa decomposition and Haar integration formula for SL2(R)
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-axiom-of-choice
  - def-countable-choice
  - cor-normalized-haar-measure-on-a-compact-lie-group
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - thm-qr-factorisation-over-r-or-c
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-change-of-variables-for-oriented-manifold-diffeomorphisms
  - def-left-haar-integral-and-left-haar-measure
  - def-unimodular-locally-compact-group
  - thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure
  - thm-density-measure-integration-agrees-with-smooth-density-integration
  - def-measure-preserving-transformation-and-system
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, printed pp. 294–296 (Lemma 7.4.4, Exercise 7.4.6, Lemma 7.4.7)"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, printed pp. 6–9 (PK decomposition and Exercise 2.3(iii))"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author's PDF)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf"
      locator: "Chapter VI §4, Theorem 6.46 and its proof, printed pp. 374–376"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and use the notation of
[[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]].

**(1) Diffeomorphism.** Multiplication
$$K\times A\times N\longrightarrow G,\qquad(k,a,n)\longmapsto kan,$$
is a diffeomorphism. For
$g=\begin{pmatrix}p&r\\q&s\end{pmatrix}\in G$, put
$$a=\sqrt{p^2+q^2},\qquad k=a^{-1}\begin{pmatrix}p&-q\\q&p\end{pmatrix},\qquad x=\frac{pr+qs}{a^2}.$$
Then $a>0$, $k\in K$, $a= e^{t/2}$ for a unique $t\in\mathbb R$, and
$$g=k\operatorname{diag}(a,a^{-1})n_x$$
is the unique factorization with $k\in K$, $\operatorname{diag}(a,a^{-1})\in A$,
and $n_x\in N$.

**(2) Haar integral.** With normalized Haar probability $dk$ on $K$ and
Lebesgue measures $dt$ on $A\cong\mathbb R$ and $dx$ on $N\cong\mathbb R$,
$$f\longmapsto\int_K\int_{\mathbb R}\int_{\mathbb R}f(ka_tn_x)e^t\,dx\,dt\,dk$$
is a left Haar integral on $G$. In the opposite order the same measure is
$$\int_K\int_{\mathbb R}\int_{\mathbb R}f(n_xa_tk)e^{-t}\,dx\,dt\,dk.$$

**(3) Unimodularity.** The group $G$ is unimodular; both displayed Haar
integrals are right invariant as well.

## Facts & Assumptions

**Given:** AC and the matrix group $G=\mathrm{SL}_2(\mathbb R)$.

[F1] $G,K,A,N$, the matrices $a_t,n_x$, and normalized $dk$ are fixed in [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]. The displayed parametrization identifies $K$ with the circle $\mathbb R/2\pi\mathbb Z$.

[F2] Under $\theta\mapsto[\theta/(2\pi)]$, the Lebesgue fundamental-domain probability on $\mathbb R/\mathbb Z$ of [[def-the-one-dimensional-torus-and-normalized-haar-integral]] pulls back to the translation-invariant probability $d\theta/(2\pi)$ on $K$; uniqueness of normalized Haar probability identifies it with $dk$ ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[F3] Every invertible real matrix has a unique QR factorization with an orthogonal factor and an upper-triangular factor with positive diagonal ([[thm-qr-factorisation-over-r-or-c]]).

[F4] A smooth bijection with smooth inverse is a diffeomorphism; smoothness is checked in the matrix and angle coordinates ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F5] $dt$ and $dx$ are Lebesgue measures; integration of a compactly supported smooth density changes by the absolute Jacobian under a diffeomorphism ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]).

[F6] A left Haar integral is a nonzero positive left-invariant functional; a left Haar measure is a nonzero Radon measure finite on compact sets ([[def-left-haar-integral-and-left-haar-measure]]).

[F7] A left Haar measure is also a right Haar measure exactly when $G$ is unimodular ([[def-unimodular-locally-compact-group]]).

[F8] Under $\mathrm{AC}_\omega$, a finite-valued positive smooth density on a second-countable smooth manifold defines a Radon measure finite on compact sets ([[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]).

[F9] Under $\mathrm{AC}_\omega$, Borel integration against this density measure agrees with its chart-density integral; for smooth compactly supported functions this is the smooth density integral ([[thm-density-measure-integration-agrees-with-smooth-density-integration]]).

[F10] A measurable transformation preserving a measure preserves integrals of nonnegative measurable and integrable functions ([[def-measure-preserving-transformation-and-system]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F11] The Lebesgue integral is real- and complex-linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[A1] AC supplies normalized Haar probability on $K$ and, by restriction to any countable family, the $\mathrm{AC}_\omega$ hypotheses for [F8] and [F9]. The matrix and Jacobian calculations make no other arbitrary choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Write $g=QR$ by [F3]. Since $\det g=1$ and $R$ has positive diagonal, $\det Q=1$, so $Q\in K$. Writing $a=R_{11}>0$ and $R_{12}=ax$, the determinant condition gives $R_{22}=a^{-1}$ and $R=\operatorname{diag}(a,a^{-1})n_x$. The first column gives $a=\sqrt{p^2+q^2}$ and $Q=a^{-1}\begin{pmatrix}p&-q\\q&p\end{pmatrix}$; the second gives $x=(pr+qs)/a^2$. QR uniqueness proves the factorization unique. [F1, F3, algebra]

2.1 Multiplication is smooth. Its inverse is given by the displayed formulas, with $a>0$ because the first column of a determinant-one matrix is nonzero; $a$, $a^{-1}$, $k$, and $x$ therefore depend smoothly on $g$. The coordinate $t=2\log a$ is smooth as well, so the multiplication map is a diffeomorphism. [F4, step 1.1, algebra]

3.1 For fixed $g_0\in G$, write uniquely $g_0k_\theta=k_{\theta_1}a_{u(\theta)}n_{v(\theta)}$. With $e_1=(1,0)^T$, put $w(\theta)=g_0k_\theta e_1=r(\theta)k_{\theta_1}e_1$, where $r=e^{u/2}>0$. Since $\det(k_\theta e_1,(k_\theta e_1)')=-1$ and $\det g_0=1$, differentiating this identity gives $-1=-r^2\theta_1'$, hence $\theta_1'=e^{-u}>0$. Left translation sends $(k_\theta,t,x)$ to $(k_{\theta_1},t+u,x+e^{-t}v)$; its $(t,x)$-Jacobian is $1$, so its full orientation-preserving Jacobian is $e^{-u}$. The target density is $e^{t+u}dk\,dt\,dx$, and its pullback is $e^{t+u}e^{-u}dk\,dt\,dx=e^t dk\,dt\,dx$. Thus the smooth density is left invariant; the change-of-variables theorem applies to compactly supported smooth test densities. [A1, F1, F2, F5, step 2.1, algebra]

4.1 Let $\eta=e^t dk\,dt\,dx$ be the positive smooth density in the global $K\times\mathbb R^2$ chart. By [F8] it defines a Radon Borel measure $\mu_\eta$ finite on compact sets, and [F9] identifies its Borel integral with the displayed coordinate integral. Step 3.1 makes $\mu_\eta$ left invariant. A nonnegative smooth bump supported in a nonempty coordinate box has positive integral because $\eta$ is positive, so $I(f):=\int f\,d\mu_\eta$ is nonzero. It is positive and real-linear by the Lebesgue integral properties, and [F10] gives left invariance of $I$; hence $I$ is a left Haar integral and $\mu_\eta$ is a left Haar measure by [F6]. [A1, F6, F8, F9, F10, F11, step 2.1, step 3.1, algebra]

5.1 Put $H=\operatorname{diag}(1,-1)$, $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $f=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, and $S=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Direct conjugation gives $\operatorname{Ad}(k_\theta)J=J$, $\operatorname{Ad}(k_\theta)H=\cos(2\theta)H-\sin(2\theta)S$, and $\operatorname{Ad}(k_\theta)S=\sin(2\theta)H+\cos(2\theta)S$, so its determinant is $1$. Also $\operatorname{Ad}(a_t)$ has eigenvalues $1,e^t,e^{-t}$ on $(H,e,f)$. On $(e,H,f)$, $\operatorname{Ad}(n_x)e=e$, $\operatorname{Ad}(n_x)H=H-2xe$, and $\operatorname{Ad}(n_x)f=f+xH-x^2e$, so its determinant is $1$. Since $\operatorname{Ad}$ is multiplicative and $G=KAN$, $\det\operatorname{Ad}(g)=1$ for every $g\in G$. For a left-invariant density $\eta$, comparing $dR_g$ with $dL_{g^{-1}}$ at the identity gives $dL_{g^{-1}}dR_g=\operatorname{Ad}(g^{-1})$, hence $R_g^*\eta=|\det\operatorname{Ad}(g^{-1})|\eta=\eta$. Thus $\mu_\eta$ is right invariant and $G$ is unimodular by [F7]. [F1, F7, F8, step 2.1, step 4.1, algebra]

6.1 Inversion pulls the right-invariant density $\eta$ back to a left-invariant density; its differential at the identity is $-I$ on the three-dimensional tangent space, whose absolute determinant is $1$. Since a left-invariant density is determined by its value at the identity, inversion preserves $\mu_\eta$. Applying inversion invariance to the KAN integral and using $(ka_tn_x)^{-1}=n_{-x}a_{-t}k^{-1}$, then substituting $(k,t,x)\mapsto(k^{-1},-t,-x)$, gives the same measure in NAK coordinates with density $e^{-t}dk\,dt\,dx$; here $dk=d\theta/(2\pi)$ is inversion invariant by [F2]. [A1, F1, F2, F8, F9, F10, step 4.1, step 5.1, algebra] ∎
