---
id: lem-euler-acoustic-wave-pressure-response
kind: lemma
title: "Ideal-gas acoustic wave curves have the stated pressure response"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-rankine-hugoniot-and-lax-shocks
  - def-local-rarefaction-curve
  - def-euler-star-pressure-response
  - thm-one-dimensional-ideal-gas-euler-eigenstructure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.2, printed pp. 91–94: Euler pressure curve, shock/rarefaction responses, and intermediate states"
---

## Statement

For a side state $K=(\rho_K,u_K,p_K)$ and any trial pressure $p>0$, the
rarefaction/shock branches defined in
[[def-euler-star-pressure-response]] give the scalar velocity response
$f_K(p)$ along the corresponding acoustic wave. For a left 1-wave the star velocity is
$u_*=u_L-f_L(p)$; for a right 3-wave it is $u_*=u_R+f_R(p)$. The star density
on a rarefaction branch is
$$\rho_*(p)=\rho_K(p/p_K)^{1/\gamma},$$
and on a compressive shock branch, with $q=p/p_K>1$ and
$\beta=(\gamma-1)/(\gamma+1)$, it is
$$\rho_*(p)=\rho_K\frac{q+\beta}{\beta q+1}.$$
The shock branches satisfy the strict acoustic Lax inequalities. When the two
pressure responses match at a positive $p$, their star states are joined by a
linearly-degenerate contact at speed $u_*$.

## Facts & Assumptions

**Given:** Positive ideal-gas left/right states, the pressure response functions, and the Euler eigenstructure.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $p=(\gamma-1)(E-\rho u^2/2)$, $c^2=\gamma p/\rho$, and $E=p/(\gamma-1)+\rho u^2/2$.

[F2] [[thm-one-dimensional-ideal-gas-euler-eigenstructure]]: along $r_\pm=(1,u\pm c,H\pm uc)$, the primitive increments are $d\rho=1$, $du=\pm c/\rho$, and $dp=c^2$; the middle field varies density at fixed $u,p$.

[F3] [[def-euler-star-pressure-response]]: the rarefaction and shock response formulas are the displayed $f_K(p)$ on $p\le p_K$ and $p\ge p_K$.

[F4] [[def-rankine-hugoniot-and-lax-shocks]]: a shock speed satisfies $[F]=s[U]$, and strict acoustic Lax inequalities compare the corresponding family speeds on both sides.

## Proof

1.1 For $0<p\le p_K$, put $\epsilon=-1$ for the 1-family and $\epsilon=1$ for the 3-family. For every density $\rho$ between $\rho_K$ and $\rho_*:=\rho_K(p/p_K)^{1/\gamma}$, define $p(\rho)=p_K(\rho/\rho_K)^\gamma$, $c(\rho)=c_K(\rho/\rho_K)^{(\gamma-1)/2}$, $u(\rho)=u_K+2\epsilon(c(\rho)-c_K)/(\gamma-1)$, and $E(\rho)=p(\rho)/(\gamma-1)+\rho u(\rho)^2/2$. This path stays in the admissible Euler domain because $\rho,p(\rho)>0$. Differentiating gives $p'=c^2$, $u'=\epsilon c/\rho$, and, in conserved coordinates, $d(\rho,\rho u,E)/d\rho=(1,u+\epsilon c,H+\epsilon uc)=r_\epsilon$ by [F2]. Thus it is the acoustic integral curve, extended along this positive-density path; uniqueness of the local integral curve identifies it with the local rarefaction branch wherever that branch is defined. At $\rho=\rho_*$, this gives $c_*=c_K(p/p_K)^{(\gamma-1)/(2\gamma)}$ and $u_*-u_K=2\epsilon(c_*-c_K)/(\gamma-1)$, which equals $-f_K(p)$ for the 1-family and $f_K(p)$ for the 3-family by [F3]. [given, F1, F2, F3, algebra]

1.2 For a compressive shock from side state $K$ to star state $*$ with trial pressure $p>p_K$ and speed $s$, set $w=u-s$, $v=1/\rho$, $e=pv/(\gamma-1)$, $j=\rho w$, and $E'=E-sm+\tfrac12s^2\rho=\rho e+\tfrac12\rho w^2$. Write $[g]=g_*-g_K$, $F_\rho=\rho u$, $F_m=\rho u^2+p$, $F_E=u(E+p)$, and $F_{E'}=F_E-sF_m+\tfrac12s^2F_\rho$; for a right-going 3-shock, reversing the physical state order changes both sides of each RH equation by the same sign. Mass RH makes $j$ equal on both sides; momentum RH minus $s$ times mass RH makes $p+j^2v$ equal. Since $p\ne p_K$, this identity forces $j\ne0$. The linear combination of energy, momentum, and mass RH gives $[F_{E'}]=s[E']$. Substitution gives $F_{E'}-sE'=u(E+p)-s(\rho u^2+p)+\tfrac12s^2\rho u-s(E-sm+\tfrac12s^2\rho)=(u-s)(E'+p)=w(E'+p)$, so $[w(E'+p)]=0$. Since $w=jv$, division by $j$ gives equality of $e+\tfrac12w^2+pv$ on both sides. Using $w=jv$, the energy equality reads $e_*-e_K+\tfrac12j^2(v_*^2-v_K^2)+p v_*-p_Kv_K=0$. From $j^2(v_*-v_K)=-(p-p_K)$, the kinetic term is $-\tfrac12(p-p_K)(v_*+v_K)$; combining it with the pressure terms gives $e_*-e_K+\tfrac12(p+p_K)(v_*-v_K)=0$. [given, F1, F4, algebra]

2.1 Let $p>p_K$ be the trial pressure, set $q=p/p_K>1$, and use $\beta=(\gamma-1)/(\gamma+1)$. Substituting $e=pv/(\gamma-1)$ into step 1.2 and dividing by $p_Kv_K$ gives $(qx-1)/(\gamma-1)+(q+1)(x-1)/2=0$, where $x=v_*/v_K$. Solving this linear equation gives $x=(\beta q+1)/(q+\beta)$ and $\rho_*/\rho_K=1/x=(q+\beta)/(\beta q+1)$. Hence $1-x=(1-\beta)(q-1)/(q+\beta)$, and using $q=p/p_K$, $B_K=\beta p_K$, and $A_K=(1-\beta)/\rho_K$ gives $v_K-v_*=(p-p_K)A_K/(p+B_K)$. Define $V:=v_K\sqrt{(p-p_K)/(v_K-v_*)}>0$. Since $1-x=(v_K-v_*)/v_K$, $V(1-x)=\sqrt{(p-p_K)(v_K-v_*)}=(p-p_K)\sqrt{A_K/(p+B_K)}=f_K(p)$. For a left 1-shock choose $s=u_K-V$ and $j=\rho_KV$; mass RH gives $u_*=u_K-V(1-x)$. For a right 3-shock oriented from the star state to $K$, choose $s=u_K+V$ and $j=-\rho_KV$; mass RH gives $u_*=u_K+V(1-x)$. These choices establish the response signs. [step 1.2, F1, F3, algebra]

3.1 Put $q=p/p_K$ and $x=v_*/v_K=(\beta q+1)/(q+\beta)$, so $0<x<1$. The relative shock speeds on the two sides have magnitudes $V=|j|v_K$ and $W=|j|v_*=xV$. Steps 1.2 and 2.1 give $V^2/c_K^2=(q+\beta)/(\gamma(1-\beta))>1$ and $W^2/c_*^2=(\beta q+1)/(\gamma q(1-\beta))<1$. The first inequality follows from $q+\beta>1+\beta=2\gamma/(\gamma+1)$, and the second from $\beta q+1<\gamma q(1-\beta)$, equivalent to $q>1$. For a 1-shock, $s=u_*-W<u_*$ and $W<c_*$ give $\lambda_-(u_*)<s$; $V>c_K$ gives $s<\lambda_-(u_K)$. For a 3-shock, $s=u_*+W>u_*$ and $W<c_*$ give $s<\lambda_+(u_*)$; $V>c_K$ gives $\lambda_+(u_K)<s$. The other-family Lax inequalities follow from $\lambda_-<\lambda_0<\lambda_+$ and $s<u_*$ for a 1-shock or $s>u_*$ for a 3-shock. [step 1.2, step 2.1, F2, F4, algebra]

4.1 Equality of the left and right star velocities is $u_L-f_L(p)=u_R+f_R(p)$, which rearranges to $\Phi(p)=0$. At such a positive pressure the two Euler states have common $u_*,p$ and differ only in density. From [F1], $F(U)-u_*U=(0,p,u_*p)$ is independent of density, so $F(U_R^*)-F(U_L^*)=u_*(U_R^*-U_L^*)$. By [F2], $u_*$ is the middle characteristic speed on both sides, so this is a linearly-degenerate contact. [step 1.1, step 2.1, F1, F2, F3, algebra] ∎
