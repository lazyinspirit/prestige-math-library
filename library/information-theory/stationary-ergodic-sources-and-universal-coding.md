---
page: stationary-ergodic-sources-and-universal-coding
title: "Stationary Ergodic Sources and Universal Coding"
status: published
requires:
  - iid-lossless-source-coding-and-the-aep
  - stationary-markov-chains-and-ergodic-limits
  - measure-theoretic-information-and-conditioning
  - prefix-codes-and-finite-lossless-coding
items:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
  - def-finite-support-binary-prefix-code
  - lem-triangular-information-averages
  - lem-finite-kl-nonnegative-choice-free
  - alg-lz78-incremental-prefix-code
  - def-ams-source-and-stationary-mean
  - def-finite-block-source-code
  - def-finite-state-compressibility
  - def-general-process-information-rate
  - def-lz77-previous-match-phrase-length
  - def-past-information-density-finite-alphabet
  - lem-prefix-code-entropy-bounds
  - lem-finite-block-entropy-chain-rule
  - lem-aep-implies-fixed-rate-lossless-coding
  - lem-lz78-distinct-parse-ziv-inequality
  - thm-ams-stationary-mean-asymptotic-dominance
  - thm-lz78-prefix-code-lossless
  - thm-stationary-entropy-rate-limit
  - lem-ams-stationary-mean-dominates-tail-events
  - thm-lz78-individual-sequence-finite-state-optimality
  - lem-finite-alphabet-past-information-convergence
  - thm-stationary-expected-prefix-code-rate
  - thm-componentwise-shannon-mcmillan-breiman
  - thm-lz78-stationary-expected-rate
  - lem-infinite-past-conditional-block-information-rate
  - cor-ergodic-shannon-mcmillan-breiman
  - cor-smb-limit-is-conditional-entropy-under-ac
  - cor-fixed-rate-lossless-coding-stationary-ergodic
  - thm-ams-ergodic-information-aep
  - thm-lz77-phrase-length-entropy-rate
  - cor-fixed-rate-lossless-coding-ams-ergodic
examples: []
---

This page uses two-sided finite-alphabet path laws and the left shift for stationary sources, with the convention $H_2(p)=H_{\rm nat}(p)/\ln 2$. Existing finite-distribution entropy is in nats; information densities, entropy rates, and code rates here are in bits per symbol. General-process rates use a limsup; stationarity supplies the limit.

The componentwise SMB proof is choice-free through the finite-past martingale and Birkhoff average. Its conditional-expectation identification is a separate AC corollary. The AMS extension states its inherited AC use through the tail-domination proof. Fixed-rate coding is stated strictly above and below the entropy rate, with no boundary claim at equality. The full-past conditional block information rate is built from finite-past martingale limits and is proved choice-free.

LZ78 uses an explicit Elias-delta parent index, fixed-width alphabet symbols, and a terminal marker. The expected-rate result is for every stationary source and does not assume ergodicity. The individual-sequence theorem is the one-sided finite-state bound $\limsup L_{\rm LZ}/n\le\rho_{\rm FS}$; equality and convergence are not asserted. The LZ77 previous-match theorem proves $n^{-1}\log_2R_n\to h$ in probability and, for $h>0$, its inverse window-length limit; its proof uses Kac return-time integrals, SMB, and a conditional-block counting bound.

No pair-specific design section was found. The current IT05 plan summary governs this scope.

## Source trail

- **Robert M. Gray, Entropy and Information Theory, corrected edition** ([source](https://ee.stanford.edu/~gray/it.pdf)), Ch. 8 §§8.2–8.4, printed pp.153–164: stationary, componentwise, and AMS entropy theorem proofs; Ch. 11 §§11.2, 11.4 for source coding.
- **Robert M. Gray, Probability, Random Processes, and Ergodic Properties** ([source](https://ee.stanford.edu/~gray/arp.pdf)), §6.3, printed pp.130–132: AMS stationary-mean asymptotic domination, the RN decomposition estimate, and null future-tail transfer.
- **Paul H. Algoet and Thomas M. Cover, “A Sandwich Proof of the Shannon–McMillan–Breiman Theorem,” Annals of Probability 16 (1988), 899–909** ([source](https://isl.stanford.edu/~cover/papers/paper83.pdf)), Theorem 4, PDF pp.8–9: generalized AEP for AMS sources by likelihood-ratio sandwich.
- **Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed.** ([source](https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf)), Ch. 2 source coding and prefix bounds; Ch. 13 §§13.4–13.5, printed pp.440–456: LZ78, Ziv inequality, finite-state bound, and LZ77 recurrence coding.
- **MIT OpenCourseWare 6.441, Chapter 8: Compressing Stationary Ergodic Sources** ([source](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/099eee31611a15cbb951bd427a89428f_MIT6_441S16_chapter_8.pdf)), §8.2, PDF pp.93–95: full finite-order Markov approximation proof of stationary ergodic SMB.
- **Stanford EE376C, Lempel-Ziv Compression lecture notes** ([source](https://web.stanford.edu/class/ee376a/files/EE376C_lecture_LZ.pdf.pdf)), §§1.3–1.5, PDF pp.4–9: LZ78 Ziv inequality and expected universality proof; finite-state and LZ77 theorem statements.
- **Satyadev Nandakumar, IIT Kanpur LZ78 lecture transcription (2014)** ([source](https://www.cse.iitk.ac.in/users/satyadev/sp14/LZ78.pdf)), §§1.3–1.5, PDF pp.4–9: individual-sequence LZ78 bound and finite-state optimality argument.
- **Northeastern University, Lempel–Ziv Lecture 3–4** ([source](https://www.khoury.northeastern.edu/home/vip/teach/IRcourse/2_indexing_ngrams/lecture_notes/lempel_ziv/lecture3_4.pdf)), Definition and theorem statement for greedy LZ77 phrase lengths; proof is not supplied in these notes.
- **Ioannis Kontoyiannis, Recurrence and Waiting Times in Stationary Processes and Their Applications in Data Compression, Stanford University dissertation** ([full text](https://www.dpmms.cam.ac.uk/~ik355/PAPERS/thesis.pdf)), Chapter 3 §§3.1–3.2, PDF pp.50–57 (printed pp.35–42): the backward recurrence definition, Theorem 3.1 and Corollary 3.1(a), and the complete proof of Theorem 3.1. The local recurrence proof reproduces the relevant upper-tail Kac/SMB and lower-tail conditional-counting arguments, then proves the inverse window-length statement.
- **A. D. Wyner and J. Ziv, “Some asymptotic properties of the entropy of a stationary ergodic data source with applications to data compression,” IEEE Transactions on Information Theory 35 (1989), 1250–1258** ([bibliographic record](https://doi.org/10.1109/18.45281)). The primary text could not be inspected after the publisher/mirror/archive routes in the coverage ledger; it is dropped only as evidentiary support. The theorem remains fully covered by the dissertation treatment and local proof.
