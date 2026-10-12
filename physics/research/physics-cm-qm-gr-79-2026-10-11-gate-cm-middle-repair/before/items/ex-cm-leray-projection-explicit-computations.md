---
id: ex-cm-leray-projection-explicit-computations
kind: example
title: "Explicit Leray projection computations on $\\mathbb T^3$: gradients, a mixed field, and a divergence-free mode"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-periodic-vector-sobolev-space-and-leray-projection, thm-fourier-basis-and-parseval-on-the-n-torus, lem-fourier-lattice-sobolev-embedding, def-countable-choice]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Proposition 1.18 and formula (1.98) (the Hodge decomposition of the torus and the multiplier k⊗k/|k|^2)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 2.2 (Definition 2.7 of the Leray projection and Lemma 2.8)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pass
---

## Example

Use the character convention $e_k(x)=e^{2\pi ik\cdot x}$ and the Leray projection $P$ of [[def-periodic-vector-sobolev-space-and-leray-projection]]; thus for $k\ne0$ the $k$-th coefficient of $(I-P)v$ is $\bigl(k\cdot\widehat v(k)/|k|_2^2\bigr)k$.

**(a) A gradient field.** Let $\varphi(x):=\cos(2\pi x_1)+\sin\bigl(2\pi(x_2+x_3)\bigr)$ and $v:=\nabla\varphi$. Then $Pv=0$ and the decomposed part is the whole gradient: $v=Pv+\nabla\varphi$ with $Pv=0$.

**(b) A mixed field.** Let $u(x):=\bigl(\sin(2\pi x_2),\,0,\,\cos(2\pi x_3)\bigr)$. Then
$$Pu=\bigl(\sin(2\pi x_2),\,0,\,0\bigr),\qquad u-Pu=\bigl(0,\,0,\,\cos(2\pi x_3)\bigr)=\nabla f,\quad f(x)=\tfrac{1}{2\pi}\sin(2\pi x_3),$$
and one has the orthogonality and Pythagorean identities $\langle Pu,u-Pu\rangle=0$, $\|u\|_{L^2}^2=\|Pu\|_{L^2}^2+\|u-Pu\|_{L^2}^2=1$.

**(c) A divergence-free mode.** Let $k\in\mathbb Z^3\setminus\{0\}$, $A\in\mathbb R^3$ with $A\cdot k=0$, and $u(x):=A\sin(2\pi k\cdot x)$. Then $Pu=u$, $\operatorname{div}u=0$, and $\langle u,Pv\rangle=\langle u,v\rangle$ for every $v$ in $H^0$, i.e. $u$ is fixed by $P$ and orthogonal to every gradient field.

## Verification

**Given:** The conventions of [[def-periodic-vector-sobolev-space-and-leray-projection]] and the character orthonormality of [[thm-fourier-basis-and-parseval-on-the-n-torus]] ($\int_{\mathbb T^3}e_k\overline{e_l}\,dx=\delta_{kl}$).

1.1 Part (a): the coefficients of $\varphi$ are $\widehat\varphi(0,0,0)=0$ and, for the cosine term, $\widehat\varphi(\pm e_1)=\tfrac12$; for the sine term, $\widehat\varphi(e_2+e_3)=\tfrac{1}{2i}$ and $\widehat\varphi(-e_2-e_3)=-\tfrac{1}{2i}$. Hence $\widehat v(k)=2\pi ik\widehat\varphi(k)$ is a vector parallel to $k$ at every frequency (zero at frequency $0$), and the orthogonal projection $\pi_k$ kills it: for $k\ne0$, $\pi_k\bigl(2\pi ik\widehat\varphi(k)\bigr)=2\pi i\widehat\varphi(k)\bigl(1-\tfrac{k\cdot k}{|k|_2^2}\bigr)k=0$. Thus $Pv=0$, and $v=Pv+\nabla\varphi$ is the Hodge decomposition with zero divergence-free part. [given, algebra]

1.2 Part (b): the coefficients of $u$ are supported on $k=\pm e_2$ (first component $1/(2i)$ and $-1/(2i)$) and $k=\pm e_3$ (third component $1/2$ and $1/2$). For $k=e_2$: $\widehat u(e_2)=(1/(2i),0,0)$ and $k\cdot\widehat u(e_2)=0$, so $\pi_k\widehat u=\widehat u$; for $k=-e_2$ likewise. For $k=e_3$: $\widehat u(e_3)=(0,0,1/2)$ and $k\cdot\widehat u(e_3)=1/2$, so $\pi_k\widehat u=\widehat u-\tfrac{1}{2}\cdot\tfrac{1}{1}(0,0,1)=(0,0,0)$; for $k=-e_3$: $\widehat u=(0,0,1/2)$, $k\cdot\widehat u=-1/2$ and $\pi_k\widehat u=(0,0,1/2)-\tfrac{-1/2}{1}(0,0,-1)=(0,0,0)$. Hence $Pu=(\sin(2\pi x_2),0,0)$; moreover $\nabla f$ for $f=\tfrac1{2\pi}\sin(2\pi x_3)$ has coefficients $2\pi i k\widehat f(k)$ equal to $(0,0,1/2)$ at $k=e_3$ and $(0,0,1/2)$ at $k=-e_3$, which is exactly $u-Pu$, so $u-Pu=\nabla f$ is a gradient field. [given, algebra]

1.3 Part (b), orthogonality and norms: since $\sin(2\pi x_2)$ and $\cos(2\pi x_3)$ are functions of different coordinates, $\langle Pu,u-Pu\rangle=\int_{\mathbb T^3}\sin(2\pi x_2)\cdot0+0\cdot0+0\cdot\cos(2\pi x_3)\,dx=0$; and $\int_0^1\sin^2(2\pi s)ds=\int_0^1\cos^2(2\pi s)ds=\tfrac12$, so $\|Pu\|_{L^2}^2=\tfrac12$, $\|u-Pu\|_{L^2}^2=\tfrac12$, and $\|u\|_{L^2}^2=1$ (the mixed terms vanish by separation of variables). This verifies the orthogonal decomposition identity of [[def-periodic-vector-sobolev-space-and-leray-projection]] on this example. [given, algebra]

2.1 Part (c): for each $k'\in\mathbb Z^3$, $\widehat u(k')=\tfrac{1}{2i}A$ if $k'=k$, $-\tfrac{1}{2i}A$ if $k'=-k$, and $0$ otherwise; since $A\cdot k=0$, $k\cdot\widehat u(k)=0$ and $\pi_k\widehat u(k)=\widehat u(k)$ (and likewise at $-k$), so $Pu=u$. The divergence has coefficients $2\pi i(k'\cdot\widehat u(k'))=0$ at $k'=\pm k$, so $\operatorname{div}u=0$; and for any $v\in H^0$ the pairing $\langle u,v\rangle=\sum_{k'}\widehat u(k')\cdot\overline{\widehat v(k')}$ only involves $k'=\pm k$ where $\widehat u\perp k'$, so it equals the pairing of $u$ with $Pv$ because $(I-P)v$ has coefficients parallel to $k'$ there: $\widehat u(\pm k)\cdot\overline{(I-P)v(\pm k)}=0$. [given, algebra] ∎

## Remarks

The example shows concretely that $P$ removes exactly the component parallel to each nonzero frequency $k$, that gradient fields are killed, and that divergence-free single modes are fixed. No dynamical claim is made.
