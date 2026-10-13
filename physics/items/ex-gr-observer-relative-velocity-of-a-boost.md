---
id: ex-gr-observer-relative-velocity-of-a-boost
kind: example
title: "The relative-velocity decomposition of a boost, checked in an explicit tetrad"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [ex-gr-boosted-constant-tetrad-field, thm-gr-observer-relative-velocity-decomposition, def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects]
dependency_roles:
  ex-gr-boosted-constant-tetrad-field: mathematical-premise
  thm-gr-observer-relative-velocity-decomposition: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'Lorentz transformations' and the Lorentz factor (printed pp. 4-6; PDF pp. 11-13) and 'four-velocity' (1.98)-(1.99) (printed pp. 26-27; PDF pp. 33-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Ch. 5, section 5.3: the orthogonal decomposition u = Gamma(n + U) and Gamma = (1 - U.U)^-1/2 (5.29)-(5.36), printed pp. 76-77"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Example

Let $(\mathbb R^4,g)$ and the constant boosted tetrad field
$(E_0,E_1,E_2,E_3)$ be as in [[ex-gr-boosted-constant-tetrad-field]], with
$E_0=n$ future unit timelike, $E_1$ unit spacelike and $g(E_0,E_1)=0$. Let
$\beta\in(-1,1)$, $\gamma=(1-\beta^2)^{-1/2}$ and $c>0$, and set

$$w:=\beta c\,E_1,\qquad u:=\gamma\Bigl(n+\frac{w}{c}\Bigr)=\gamma(E_0+\beta E_1).$$

Then $u$ is future unit timelike, $-g(n,u)=\gamma\ge1$, $h_n(u)=\gamma\beta E_1$,
$w=c\,h_n(u)/\gamma$, and $g(w,w)=\beta^2c^2=c^2(1-\gamma^{-2})<c^2$ whenever
$\beta\neq0$. This verifies the relative-velocity decomposition theorem of the
tensors page in an explicit family.

## Facts & Assumptions

**Given:** The constant boosted tetrad $(E_0,E_1,E_2,E_3)$ on $\mathbb R^4$ with flat metric $g$, its first member $n=E_0$, parameters $\beta\in(-1,1)$, $\gamma=(1-\beta^2)^{-1/2}$, $c>0$, and the vectors $w=\beta cE_1$, $u=\gamma(n+w/c)$.

[L1] The fields $E_0=\gamma(\partial_0+\beta\partial_1)$, $E_1=\gamma(\beta\partial_0+\partial_1)$ satisfy $g(E_0,E_0)=-1$, $g(E_1,E_1)=1$, $g(E_0,E_1)=0$; $n=E_0$ is future-directed; and $E_2=\partial_2$, $E_3=\partial_3$ ([[ex-gr-boosted-constant-tetrad-field]]).

[L2] If $n$ is an observer, $c>0$, $u$ is future unit timelike and $\gamma_o=-g(n,u)$, $w_o=c\,h_n(u)/\gamma_o$, then $\gamma_o\ge1$, $u=\gamma_o(n+w_o/c)$ and $g(w_o,w_o)=c^2(1-\gamma_o^{-2})$ ([[thm-gr-observer-relative-velocity-decomposition]]).

[L3] An observer is a future-directed unit timelike vector; the spatial projection is $h_n(v)=v+g_p(n,v)n$ ([[def-gr-observer-and-rest-space]]), and a nonzero causal vector $v$ is future-directed exactly when $g(v,N)<0$ ([[def-gr-smooth-lorentzian-objects]]).

## Verification

**Proof technique:** direct.

1.1 Since $g(n,n)=-1$, $g(E_1,E_1)=1$ and $g(n,E_1)=0$ by [L1], bilinearity gives $g(u,u)=\gamma^2\bigl(g(n,n)+2\beta g(n,E_1)+\beta^2g(E_1,E_1)\bigr)=\gamma^2(-1+\beta^2)=-1$, so $u$ is unit timelike. Moreover $g(n,N)=g(E_0,\partial_0)=-\gamma$ and $g(E_1,\partial_0)=-\gamma\beta$ by [L1], so $g(u,N)=\gamma\bigl(g(n,N)+\beta g(E_1,N)\bigr)=-\gamma^2(1+\beta^2)<0$; by [L3] the vector $u$ is future-directed. [L1, L3, algebra]

2.1 By [L3] and [L1], $h_n(u)=u+g(u,n)n=u-\gamma n=\gamma(E_0+\beta E_1)-\gamma E_0=\gamma\beta E_1$. Moreover $g(u,n)=\gamma\bigl(g(n,n)+\beta g(E_1,n)\bigr)=-\gamma$, since $g(n,E_1)=0$; hence $\gamma_o:=-g(n,u)=\gamma$ and $w_o:=c\,h_n(u)/\gamma_o=c\beta E_1=w$. [step 1.1, L1, L3, algebra]

3.1 The identities $u=\gamma(n+w/c)$ and $g(w,w)=\beta^2c^2$ hold by definition of $w$ and [L1]; since $\gamma^{-2}=1-\beta^2$, we have $g(w,w)=c^2(1-\gamma^{-2})<c^2$ for $\beta\neq0$, while for $\beta=0$ the vector $w$ vanishes and $u=n$. Thus the explicit pair $(\gamma,w)$ is exactly the decomposition produced by [L2] for $u$, and $\gamma\ge1$. [step 1.1, step 2.1, L2, algebra] ∎

## Remarks

The example is the flat-spacetime boost written in the abstract split of a
single tetrad: no coordinate chart enters, and the only data are the observer
$n$, the spatial direction $E_1$, the speed parameter $\beta$ and the
conversion constant $c$.
