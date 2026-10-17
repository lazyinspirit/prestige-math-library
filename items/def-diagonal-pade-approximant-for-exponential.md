---
id: def-diagonal-pade-approximant-for-exponential
kind: definition
title: "Diagonal Padé approximant to the exponential"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-complex-exponential]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
---

## Definition

For an integer $m\ge0$, put
$$a_{m,j}:=\frac{(2m-j)!\,m!}{(2m)!\,j!\,(m-j)!}\qquad(0\le j\le m), \qquad p_m(z):=\sum_{j=0}^m a_{m,j}z^j, \qquad q_m(z):=p_m(-z).$$
The diagonal Padé rational function of order $m$ for the scalar exponential
[[def-complex-exponential]] is
$$r_m(z):=\frac{p_m(z)}{q_m(z)}$$
at every $z\in\mathbb C$ for which $q_m(z)\ne0$. The pair is normalized by
$p_m(0)=q_m(0)=1$. This definition does not assign a value at a zero of the
denominator.
