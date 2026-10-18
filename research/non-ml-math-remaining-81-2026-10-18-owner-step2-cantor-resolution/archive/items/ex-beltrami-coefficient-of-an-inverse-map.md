---
id: ex-beltrami-coefficient-of-an-inverse-map
kind: example
title: The Beltrami coefficient of the inverse of an affine quasiconformal map
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 9
deps: [def-beltrami-coefficient-and-maximal-dilatation, thm-composition-and-inverse-quasiconformal, ex-affine-quasiconformal-ellipse-map, def-wirtinger-derivatives, lem-complex-conjugation-and-modulus-laws, def-axiom-of-choice]
axiom_use: The Axiom of Choice is inherited from the analytic definition and the composition/inverse theorem used for comparison.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 49–51: the inverse of a real-linear map has the same dilatation, and the Beltrami composition formula specialized to the inverse."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §11.1, printed pp. 175–178, and §12.5, printed p. 188: linear Beltrami coefficients and Proposition 12.15 for inverse dilatation."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $f(z)=\alpha z+\beta\overline z$ with $|\beta|<|\alpha|$, so $f$ is the affine map of [[ex-affine-quasiconformal-ellipse-map]] and $\mu_f=\beta/\alpha$. Put $\Delta=|\alpha|^2-|\beta|^2>0$. Then
$$g(w)=f^{-1}(w)=\frac{\overline\alpha w-\beta\overline w}{\Delta},$$
and
$$g_w=\frac{\overline\alpha}{\Delta},\qquad g_{\overline w}=-\frac{\beta}{\Delta},\qquad \mu_g=-\frac{\beta}{\overline\alpha}=-\mu_f\frac{f_z}{\overline{f_z}},\qquad |\mu_g|=|\mu_f|,\qquad K_g=K_f,$$
in agreement with [[thm-composition-and-inverse-quasiconformal]](ii). For $\alpha=2$ and $\beta=i/2$, this gives $\mu_f=i/4$, $K_f=5/3$, $g(w)=(2w-\frac i2\overline w)/(15/4)$, and $\mu_g=-i/4$ ([[def-beltrami-coefficient-and-maximal-dilatation]], [[def-wirtinger-derivatives]]).

## Facts & Assumptions

**Given:** Choice, $\alpha,\beta\in\mathbb C$ with $|\beta|<|\alpha|$, and the coefficient conventions of [[def-beltrami-coefficient-and-maximal-dilatation]].

[F1] The system $w=\alpha z+\beta\bar z$, $\bar w=\bar\alpha\bar z+\bar\beta z$ has determinant $\Delta=|\alpha|^2-|\beta|^2>0$ and solving it gives $z=(\bar\alpha w-\beta\bar w)/\Delta$.

[F2] Wirtinger differentiation gives $f_z=\alpha$, $f_{\bar z}=\beta$, $g_w=\bar\alpha/\Delta$, and $g_{\bar w}=-\beta/\Delta$ ([[def-wirtinger-derivatives]]).

[F3] For an analytic quasiconformal affine map, $\mu_f=f_{\bar z}/f_z$ and $K_f=(1+|\mu_f|)/(1-|\mu_f|)$; the inverse theorem states $\mu_{f^{-1}}(f(z))=-\mu_f(z)f_z/\overline{f_z}$ and $K_{f^{-1}}=K_f$ ([[def-beltrami-coefficient-and-maximal-dilatation]], [[thm-composition-and-inverse-quasiconformal]], [[ex-affine-quasiconformal-ellipse-map]]).

## Proof

**Proof technique:** solve the two-coordinate real-linear system, differentiate the inverse, and compare its coefficient with the general inverse formula.

1.1 Since $|\beta|<|\alpha|$, one has $\Delta>0$. Multiplying the first equation by $\bar\alpha$ and subtracting $\beta$ times the second gives $\bar\alpha w-\beta\bar w=\Delta z$, so the displayed formula for $g$ is the inverse; the same invertible linear system gives both inverse identities. [F1, given, algebra]

1.2 Differentiating $g(w)=(\bar\alpha w-\beta\bar w)/\Delta$ and $f(z)=\alpha z+\beta\bar z$ by [F2] yields $g_w=\bar\alpha/\Delta$, $g_{\bar w}=-\beta/\Delta$, $f_z=\alpha$, and $f_{\bar z}=\beta$. As $\alpha\ne0$, division gives $\mu_g=g_{\bar w}/g_w=-\beta/\bar\alpha$ and $\mu_f=\beta/\alpha$. [F2, given]

2.1 Substituting $\mu_f=\beta/\alpha$ and $f_z=\alpha$ into the right side of the inverse identity in [F3] gives $-(\beta/\alpha)(\alpha/\bar\alpha)=-\beta/\bar\alpha=\mu_g$, so this concrete calculation agrees with [[thm-composition-and-inverse-quasiconformal]](ii). Also $|\mu_g|=|\beta|/|\alpha|=|\mu_f|$; applying the formula in [F3] gives $K_g=K_f$. [F3, step 1.2, algebra]

3.1 For $\alpha=2$, $\beta=i/2$, one has $\Delta=4-1/4=15/4$, $\mu_f=(i/2)/2=i/4$, and $K_f=(1+1/4)/(1-1/4)=5/3$. The inverse formula becomes $g(w)=(2w-\frac i2\bar w)/(15/4)$ and its coefficient is $-i/4$, as asserted. [step 1.1, step 1.2, step 2.1, algebra] ∎
