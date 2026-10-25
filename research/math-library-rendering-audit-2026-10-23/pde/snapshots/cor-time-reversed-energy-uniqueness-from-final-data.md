---
id: cor-time-reversed-energy-uniqueness-from-final-data
kind: corollary
title: "Time-reversed energy uniqueness from final data"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-countable-choice, cor-energy-uniqueness-for-the-wave-cauchy-problem, cor-time-reversal-invariance-of-the-homogeneous-wave-equation, thm-conservation-of-total-wave-energy, def-wave-energy-and-energy-flux]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2-§7.3, printed pp. 170-178: reversibility of the homogeneous flow and Corollary 7.13"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: time reversibility in the qualitative-property list; §7.1.1, printed p. 212: the energy estimate"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$,
$T>0$ and let $u,v\in C^2(\mathbb R^n\times[0,T])$ solve $\Box_cw=0$, with $u$
and $v$ lying in a class of homogeneous solutions that is closed under taking
differences and in which the total energy is conserved on $[0,T]$ in one of the
whole-space senses (a) or (b) of [[thm-conservation-of-total-wave-energy]] (for instance both
have fixed compact spatial support inside a common compact set). If $u(\cdot,T)=v(\cdot,T)$ and $u_t(\cdot,T)=v_t(\cdot,T)$, then
$u=v$ on $\mathbb R^n\times[0,T]$.

Thus equal terminal displacement and velocity determine the same
finite-energy homogeneous solution backward in time; reversibility is a
consequence of energy uniqueness together with time-reversal symmetry, not of
any representation formula. The time-reversal item
[[cor-time-reversal-invariance-of-the-homogeneous-wave-equation]] itself belongs
to the preceding pair and is consumed here, not reproved.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; two homogeneous solutions $u,v$ in the stated class with equal Cauchy data at time $T$; the difference $w=u-v$ lies in the class, so its energy is conserved on $[0,T]$.

[F1] Apply the time-reversal theorem to $w$ on the open interval $I=(0,T)$ with $\tau=T/2$: $\tilde w(x,s):=w(x,T-s)$ is $C^2$ and homogeneous in the interior. Continuity of $w$ and its derivatives to the endpoints gives the reflected extension on $[0,T]$, with $\tilde w(\cdot,0)=w(\cdot,T)$ and $\partial_s\tilde w(\cdot,0)=-w_t(\cdot,T)$. ([[cor-time-reversal-invariance-of-the-homogeneous-wave-equation]])

[F2] Energy uniqueness for the Cauchy problem: a homogeneous solution whose total energy is conserved on the time interval and whose Cauchy data vanish at the initial time is identically zero; two conserved solutions with equal initial data agree. ([[cor-energy-uniqueness-for-the-wave-cauchy-problem]])

[F3] The energy density of the time-reversed solution at time $s$ equals the energy density of the original solution at time $T-s$: the spatial gradient is unchanged and $\partial_s\tilde w=-\partial_tw$. ([[def-wave-energy-and-energy-flux]])

## Proof

1.1 The difference and its reversal: $w:=u-v$ is $C^2$ and homogeneous by linearity, and it lies in the stated class, so its total energy is conserved on $[0,T]$; by hypothesis $w(\cdot,T)=0$ and $w_t(\cdot,T)=0$; define $\tilde w(x,s):=w(x,T-s)$ for $s\in[0,T]$. [given, F1]

2.1 The reversal is a conserved homogeneous solution with zero initial data: by [F1], $\tilde w$ is a $C^2$ homogeneous solution on $\mathbb R^n\times[0,T]$ with $\tilde w(\cdot,0)=w(\cdot,T)=0$ and $\partial_s\tilde w(\cdot,0)=-w_t(\cdot,T)=0$; by [F3] the energy density of $\tilde w$ at time $s$ equals that of $w$ at time $T-s$, so $E_{\tilde w}(s)=E_w(T-s)$ and conservation of $E_w$ transfers to $\tilde w$. [given, step 1.1, F1, F3, algebra]

3.1 Conclusion: [F2] applied to the conserved solution $\tilde w$ with vanishing Cauchy data gives $\tilde w\equiv0$; hence $w\equiv0$, that is, $u=v$ on $\mathbb R^n\times[0,T]$. [step 2.1, F2] ∎ 