---
id: cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves
kind: counterexample
title: "The H^1 to C^0 bound fails at s minus m equal to one: dyadic shells have an unbounded C^0/H^1 ratio"
status: published
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, lem-gr-periodic-sobolev-embedding]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universitat Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of the Sobolev spaces H^s(T^3), the continuous embedding H^s(T^3) into L-infinity and the Banach-algebra property for s>3/2) and Section 4.3 (Agmon's inequality)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "M. E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (UNC lecture notes, 2018), Section 1 (Fourier series on the torus T^n): characters, Fourier coefficients, the Parseval identity and convergence of the coefficient series"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
verification:
  precheck: pending
---

## Statement refuted

Refuted statement: "for $s=1$ and $m=0$ on $\mathbb T^3_{2\pi}$ (so that
$s-m=1<\tfrac32$) there is a constant $C$ with $\|u\|_{C^0}\le C\|u\|_{H^1}$
for every $u\in H^1$."

## Facts & Assumptions

**Given:** the torus $\mathbb T^3_{2\pi}$, its characters $\chi_k$, the norms $\|\cdot\|_{H^1}$ and $\|\cdot\|_{C^0}$, and the shell family $(u_N)$.

[L1] Fourier norm formula: for $u=\sum_ka_k\chi_k$ with finitely many nonzero coefficients, $\|u\|_{H^1}^2=\sum_k(1+|k|^2)|a_k|^2$ and $\|u\|_{C^0}=\sup_x|\sum_ka_k\chi_k(x)|$; in particular $u_N(0)=\#\{k:2^N\le|k|<2^{N+1}\}$ for the shell family, whose coefficients are $1$ on the shell ([[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L2] Lattice-point counts: there are constants $0<c\le C$ with $c2^{3N}\le\#\{k\in\mathbb Z^3:2^N\le|k|<2^{N+1}\}\le C2^{3N}$ for all $N\ge0$ (the shell is a spherical annulus of radius comparable to $2^N$; each unit cube contains at most one lattice point and volume comparison gives both bounds) ([[def-gr-periodic-torus-and-sobolev-spaces]]). [L2]

[L3] In the embedding lemma the hypothesis $s-m>3/2$ is used exactly at the finiteness of $\sum_k(1+|k|^2)^{-(s-m)}$; at $s-m=1$ this sum diverges ([[lem-gr-periodic-sobolev-embedding]]). [L3]

## Counterexample

For $N\ge0$ let
$$u_N:=\sum_{k\in\mathbb Z^3,\ 2^N\le|k|<2^{N+1}}\chi_k .$$
Then $\|u_N\|_{H^1}\le C2^{5N/2}$ and $u_N(0)=|\{k:2^N\le|k|<2^{N+1}\}|\ge c2^{3N}$ for constants $c,C>0$ independent of $N$, so the ratio $\|u_N\|_{C^0}/\|u_N\|_{H^1}$ is at least $c'2^{N/2}\to\infty$: no constant $C$ exists, and the identity embedding bound fails at $s-m=1$. The raw shell norms grow; equivalently, the normalized sequence $u_N/\|u_N\|_{H^1}$ has unit $H^1$ norm and unbounded $C^0$ norm.


**Proof technique:** direct.

1.1 (Norms of the shell family.) By [L1] and [L2]: $\|u_N\|_{H^1}^2=\sum_{2^N\le|k|<2^{N+1}}(1+|k|^2)\le2\cdot2^{2N+2}\cdot\#\text{shell}\le C2^{2N}2^{3N}=C2^{5N}$, so $\|u_N\|_{H^1}\le C2^{5N/2}$; and $u_N(0)=\#\text{shell}\ge c2^{3N}$. [L1, L2, algebra]

2.1 (Divergence of the ratio.) Hence $\|u_N\|_{C^0}/\|u_N\|_{H^1}\ge c'2^{3N-5N/2}=c'2^{N/2}\to\infty$; if a constant $C$ satisfied the claimed bound, applying it to $u_N/\|u_N\|_{H^1}$ would give a uniform bound on this ratio, a contradiction. [step 1.1, algebra]

3.1 (Consistency with the sharp threshold.) The failure occurs exactly at the exponent where the weight sum of [L3] diverges; by [[lem-gr-periodic-sobolev-embedding]] the bound does hold for $s-m>3/2$, so the counterexample is sharp and does not contradict the embedding theorem. [L3, algebra] ∎
